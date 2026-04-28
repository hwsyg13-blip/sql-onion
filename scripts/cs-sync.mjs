// scripts/cs-sync.mjs
// SQLD양파 CS 일일 자동 처리 루틴의 외부 어댑터.
// schedule routine 안의 Claude 가 이 도구의 서브커맨드를 호출하면서 자기 판단으로 처리.
//
// 책임:
//   - Sheets read/write (시트 PENDING 행 / 처리 결과)
//   - GA4 어제 통계
//   - AdSense 어제 통계 + 승인 상태
//   - Resend 이메일 발송
//
// 책임 아님 (Claude 가 일반 도구로 처리):
//   - JSON 패치, 빌드 (npm run build / build-quiz-bank.mjs)
//   - 무결성 검증 (validate-rounds.mjs)
//   - Git 커밋·푸시 (Bash 도구)
//
// 사용법:
//   node scripts/cs-sync.mjs read-pending
//   node scripts/cs-sync.mjs sheet-update --row 5 --status RESOLVED --direction "raw markdown 제거" --link "https://github.com/.../commit/abc1234"
//   node scripts/cs-sync.mjs ga-stats
//   node scripts/cs-sync.mjs adsense-status
//   node scripts/cs-sync.mjs send-email --subject "..." --html-file path/to/body.html
//
// 환경 변수: ~/.sql-onion-cs/.env 에서 자동 로드. routine 환경에서는 외부 주입.

import { readFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { resolve, join } from 'node:path';
import { execSync } from 'node:child_process';

// ─────────────────────────────────────────────────────────────
// 환경 변수 로드 (~/.sql-onion-cs/.env 우선, 이미 set 된 환경 변수 우선)

const ENV_FILE = join(homedir(), '.sql-onion-cs', '.env');
if (existsSync(ENV_FILE)) {
  const text = readFileSync(ENV_FILE, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    if (line.trim().startsWith('#')) continue;
    const [, key, rawVal] = m;
    if (process.env[key] !== undefined) continue; // 이미 set 된 건 보존
    const val = rawVal.replace(/^["']|["']$/g, '');
    process.env[key] = val;
  }
}

const REQUIRED = [
  'CS_SHEET_ID',
  'CS_SHEET_NAME',
  'GA4_PROPERTY_ID',
  'ADSENSE_PUBLISHER_ID',
  'RESEND_API_KEY',
  'REPORT_EMAIL_FROM',
  'REPORT_EMAIL_TO',
];

function requireEnv(keys = REQUIRED) {
  const missing = keys.filter((k) => !process.env[k]);
  if (missing.length) {
    console.error(`❌ 환경 변수 누락: ${missing.join(', ')}`);
    process.exit(1);
  }
}

// ─────────────────────────────────────────────────────────────
// Google API access token (gcloud ADC)

let _cachedToken = null;
function getGoogleToken() {
  if (_cachedToken) return _cachedToken;
  try {
    _cachedToken = execSync('gcloud auth application-default print-access-token', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    return _cachedToken;
  } catch (err) {
    console.error('❌ Google 인증 실패. 다음 명령으로 재인증:');
    console.error('   gcloud auth application-default login --client-id-file="C:/Users/hwsyg/.sql-onion-cs/oauth-client.json" --scopes="https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/adsense.readonly"');
    process.exit(2);
  }
}

async function googleFetch(url, options = {}) {
  const token = getGoogleToken();
  const resp = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await resp.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!resp.ok) {
    throw new Error(`Google API ${resp.status}: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
  }
  return data;
}

// ─────────────────────────────────────────────────────────────
// CLI 파싱

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) { args[key] = next; i++; }
      else args[key] = true;
    }
  }
  return args;
}

// ─────────────────────────────────────────────────────────────
// 서브커맨드: read-pending

async function cmdReadPending() {
  requireEnv(['CS_SHEET_ID', 'CS_SHEET_NAME']);
  const range = `${process.env.CS_SHEET_NAME}!A1:K1000`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.CS_SHEET_ID}/values/${encodeURIComponent(range)}`;
  const data = await googleFetch(url);
  const rows = data.values || [];
  if (rows.length === 0) {
    console.log(JSON.stringify({ pending: [], total: 0 }, null, 2));
    return;
  }
  const headers = rows[0];
  const pending = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i] || [];
    const status = (r[7] || '').trim(); // H열 = 상태
    if (status && status !== 'PENDING') continue;
    pending.push({
      rowNumber: i + 1, // 시트는 1-indexed
      time: r[0] || '',
      round: r[1] || '',
      subject: r[2] || '',
      number: r[3] || '',
      report: r[4] || '',
      title: r[5] || '',
      ua: r[6] || '',
    });
  }
  console.log(JSON.stringify({ pending, total: pending.length, headers }, null, 2));
}

// ─────────────────────────────────────────────────────────────
// 서브커맨드: sheet-update

async function cmdSheetUpdate(args) {
  requireEnv(['CS_SHEET_ID', 'CS_SHEET_NAME']);
  const row = parseInt(args.row, 10);
  if (!row || row < 2) {
    console.error('❌ --row <행 번호> 필요 (2 이상)');
    process.exit(1);
  }
  const status = args.status || 'PENDING';
  const direction = args.direction || '';
  const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' }); // YYYY-MM-DD
  const resolvedDate = (status === 'RESOLVED' || status === 'WORKING_AS_DESIGNED' || status === 'AUTO_FIX_FAILED') ? today : '';
  const link = args.link || '';

  const range = `${process.env.CS_SHEET_NAME}!H${row}:K${row}`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.CS_SHEET_ID}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`;
  const body = {
    range,
    majorDimension: 'ROWS',
    values: [[status, direction, resolvedDate, link]],
  };
  const data = await googleFetch(url, { method: 'PUT', body: JSON.stringify(body) });
  console.log(JSON.stringify({ updated: data.updatedRange, row, status, direction, resolvedDate, link }));
}

// ─────────────────────────────────────────────────────────────
// 서브커맨드: ga-stats

async function cmdGaStats() {
  requireEnv(['GA4_PROPERTY_ID']);
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${process.env.GA4_PROPERTY_ID}:runReport`;
  const body = {
    dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
      { name: 'averageSessionDuration' },
    ],
  };
  const data = await googleFetch(url, { method: 'POST', body: JSON.stringify(body) });
  const m = data.rows?.[0]?.metricValues || [];
  const stats = {
    activeUsers: parseInt(m[0]?.value || '0', 10),
    sessions: parseInt(m[1]?.value || '0', 10),
    pageViews: parseInt(m[2]?.value || '0', 10),
    avgSessionDurationSec: parseFloat(m[3]?.value || '0'),
    date: data.metadata?.timeZone || 'yesterday',
  };

  // CBT 완료 등 커스텀 이벤트도 같이 (선택, 실패해도 무시)
  try {
    const evtBody = {
      dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }],
    };
    const evtData = await googleFetch(url, { method: 'POST', body: JSON.stringify(evtBody) });
    const events = {};
    for (const r of evtData.rows || []) {
      events[r.dimensionValues[0].value] = parseInt(r.metricValues[0].value, 10);
    }
    stats.events = events;
  } catch (err) {
    stats.eventsError = err.message;
  }

  console.log(JSON.stringify(stats, null, 2));
}

// ─────────────────────────────────────────────────────────────
// 서브커맨드: adsense-status

async function cmdAdsenseStatus() {
  requireEnv(['ADSENSE_PUBLISHER_ID']);
  const accountUrl = `https://adsense.googleapis.com/v2/accounts/${process.env.ADSENSE_PUBLISHER_ID}`;
  const account = await googleFetch(accountUrl);
  const result = { state: account.state, displayName: account.displayName, timeZone: account.timeZone?.id };

  // 어제 수익/노출 (계정 READY 일 때만 의미)
  if (account.state === 'READY') {
    try {
      const reportUrl = `https://adsense.googleapis.com/v2/accounts/${process.env.ADSENSE_PUBLISHER_ID}/reports:generate?dateRange=YESTERDAY&metrics=ESTIMATED_EARNINGS&metrics=IMPRESSIONS&metrics=CLICKS&metrics=PAGE_VIEWS`;
      const report = await googleFetch(reportUrl);
      const headers = (report.headers || []).map((h) => h.name);
      const row = report.rows?.[0];
      if (row) {
        const cells = row.cells.map((c) => c.value);
        result.yesterday = Object.fromEntries(headers.map((h, i) => [h, cells[i]]));
      } else {
        result.yesterday = { note: '어제 데이터 없음 (광고 노출 0 또는 신규 계정)' };
      }
    } catch (err) {
      result.reportError = err.message;
    }
  }

  console.log(JSON.stringify(result, null, 2));
}

// ─────────────────────────────────────────────────────────────
// 서브커맨드: send-email

async function cmdSendEmail(args) {
  requireEnv(['RESEND_API_KEY', 'REPORT_EMAIL_FROM', 'REPORT_EMAIL_TO']);
  const subject = args.subject || '[SQLD양파] 일일 운영 리포트';
  let html = '';
  if (args['html-file']) {
    html = readFileSync(resolve(args['html-file']), 'utf8');
  } else if (args.html) {
    html = args.html;
  } else {
    console.error('❌ --html-file <path> 또는 --html "..." 필요');
    process.exit(1);
  }

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.REPORT_EMAIL_FROM,
      to: [process.env.REPORT_EMAIL_TO],
      subject,
      html,
    }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    console.error(`❌ Resend ${resp.status}:`, JSON.stringify(data));
    process.exit(3);
  }
  console.log(JSON.stringify({ ok: true, id: data.id }));
}

// ─────────────────────────────────────────────────────────────
// 서브커맨드: help

function cmdHelp() {
  console.log(`scripts/cs-sync.mjs — SQLD양파 CS 루틴 외부 어댑터

서브커맨드:
  read-pending                    시트 PENDING 행 JSON 출력
  sheet-update --row N --status S [--direction D] [--link L]
                                  시트 N행의 H~K 컬럼 갱신
  ga-stats                        GA4 어제 통계 + 커스텀 이벤트
  adsense-status                  AdSense 계정 상태 + 어제 수익/노출
  send-email --subject "..." --html-file path
                                  Resend 로 이메일 발송

상태 값(--status):
  RESOLVED | NEEDS_REVIEW | AUTO_FIX_FAILED | WORKING_AS_DESIGNED | PENDING

환경 변수 ~/.sql-onion-cs/.env 에서 자동 로드. routine 환경에서는 외부 주입.
`);
}

// ─────────────────────────────────────────────────────────────
// 디스패치

const [, , subcommand, ...rest] = process.argv;
const args = parseArgs(rest);

const handlers = {
  'read-pending': cmdReadPending,
  'sheet-update': () => cmdSheetUpdate(args),
  'ga-stats': cmdGaStats,
  'adsense-status': cmdAdsenseStatus,
  'send-email': () => cmdSendEmail(args),
  help: cmdHelp,
  '--help': cmdHelp,
  '-h': cmdHelp,
};

const handler = handlers[subcommand];
if (!handler) {
  cmdHelp();
  if (subcommand) {
    console.error(`\n❌ 알 수 없는 서브커맨드: ${subcommand}`);
    process.exit(1);
  }
  process.exit(0);
}

try {
  await handler();
} catch (err) {
  console.error('❌', err.message);
  process.exit(4);
}
