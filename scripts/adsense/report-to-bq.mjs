// AdSense 일일 보고서를 BigQuery(sql-onion-cs.adsense)에 적재한다. GitHub Actions(adsense-report.yml)가 매일 실행.
//
// 환경변수
//   ADSENSE_CLIENT_ID / ADSENSE_CLIENT_SECRET / ADSENSE_REFRESH_TOKEN  (필수, scripts/adsense/auth.mjs 로 발급)
//   ADSENSE_ACCOUNT  예: accounts/pub-4723950729614149 (없으면 계정 목록의 첫 번째)
//   BQ_PROJECT=sql-onion-cs  BQ_DATASET=adsense  BQ_LOCATION=asia-northeast3
//   DAYS=3   최근 며칠을 다시 받을지 (AdSense 수치는 며칠 동안 조금씩 확정되므로 겹쳐서 다시 적재)
//   DRY_RUN_FILE  설정 시 API 를 부르지 않고 저장된 보고서 JSON 으로 적재할 행만 만들어 본다(로컬 점검용)
//
// 공개 저장소의 Actions 로그는 누구나 볼 수 있으므로 수익 숫자는 로그에 남기지 않는다(행 수만 출력).
import { readFileSync } from 'node:fs';

const env = process.env;
const BQ_PROJECT = env.BQ_PROJECT || 'sql-onion-cs';
const BQ_DATASET = env.BQ_DATASET || 'adsense';
const BQ_LOCATION = env.BQ_LOCATION || 'asia-northeast3';
const DAYS = Math.max(1, Math.min(90, Number(env.DAYS || 3)));

const REPORTS = [
  {
    table: 'daily_by_page',
    dims: ['DATE', 'PAGE_URL', 'PLATFORM_TYPE_NAME'],
    fallbackDims: ['DATE', 'PAGE_URL'],
    metrics: ['PAGE_VIEWS', 'AD_REQUESTS', 'MATCHED_AD_REQUESTS', 'IMPRESSIONS', 'CLICKS', 'ESTIMATED_EARNINGS'],
    cols: { DATE: 'date', PAGE_URL: 'page_url', PLATFORM_TYPE_NAME: 'platform', PAGE_VIEWS: 'page_views', AD_REQUESTS: 'ad_requests', MATCHED_AD_REQUESTS: 'matched_ad_requests', IMPRESSIONS: 'impressions', CLICKS: 'clicks', ESTIMATED_EARNINGS: 'estimated_earnings' },
  },
  {
    table: 'daily_by_unit',
    dims: ['DATE', 'AD_UNIT_NAME'],
    metrics: ['AD_REQUESTS', 'MATCHED_AD_REQUESTS', 'IMPRESSIONS', 'CLICKS', 'ESTIMATED_EARNINGS', 'ACTIVE_VIEW_VIEWABILITY'],
    cols: { DATE: 'date', AD_UNIT_NAME: 'ad_unit', AD_REQUESTS: 'ad_requests', MATCHED_AD_REQUESTS: 'matched_ad_requests', IMPRESSIONS: 'impressions', CLICKS: 'clicks', ESTIMATED_EARNINGS: 'estimated_earnings', ACTIVE_VIEW_VIEWABILITY: 'active_view_viewability' },
  },
];
const TYPES = { date: 'DATE', page_url: 'STRING', platform: 'STRING', ad_unit: 'STRING', estimated_earnings: 'NUMERIC', active_view_viewability: 'FLOAT64' };
const colType = c => TYPES[c] || 'INT64';

function ymd(d) { return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() }; }
function iso(o) { return `${o.year}-${String(o.month).padStart(2, '0')}-${String(o.day).padStart(2, '0')}`; }
// JSON 한 줄(NDJSON) 값으로 변환 — BigQuery 로드 작업용
function jsonVal(v, type) {
  if (v === undefined || v === null || v === '') return null;
  if (type === 'STRING' || type === 'DATE') return String(v);
  if (type === 'NUMERIC') return Number(v).toFixed(6);
  if (type === 'FLOAT64') return Number(v);
  return Math.round(Number(v));
}

async function accessToken() {
  for (const k of ['ADSENSE_CLIENT_ID', 'ADSENSE_CLIENT_SECRET', 'ADSENSE_REFRESH_TOKEN']) if (!env[k]) throw new Error(`${k} 가 없습니다`);
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: env.ADSENSE_CLIENT_ID, client_secret: env.ADSENSE_CLIENT_SECRET, refresh_token: env.ADSENSE_REFRESH_TOKEN, grant_type: 'refresh_token' }),
  });
  const j = await r.json();
  if (!j.access_token) throw new Error(`토큰 갱신 실패: ${j.error || r.status} ${j.error_description || ''}`);
  return j.access_token;
}

async function api(token, url, init = {}) {
  const r = await fetch(url, { ...init, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', ...(init.headers || {}) } });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { const e = new Error(`${r.status} ${j.error?.message || ''}`.trim()); e.status = r.status; throw e; }
  return j;
}

async function generate(token, account, dims, metrics, start, end) {
  const p = new URLSearchParams({ dateRange: 'CUSTOM', reportingTimeZone: 'ACCOUNT_TIME_ZONE', currencyCode: 'KRW', limit: '100000' });
  for (const [k, o] of [['startDate', start], ['endDate', end]]) for (const f of ['year', 'month', 'day']) p.set(`${k}.${f}`, String(o[f]));
  dims.forEach(d => p.append('dimensions', d));
  metrics.forEach(m => p.append('metrics', m));
  return api(token, `https://adsense.googleapis.com/v2/${account}/reports:generate?${p}`);
}

function toRows(report, spec, dims) {
  const names = (report.headers || []).map(h => h.name);
  return (report.rows || []).map(r => {
    const o = {};
    names.forEach((n, i) => { if (spec.cols[n]) o[spec.cols[n]] = r.cells?.[i]?.value; });
    for (const d of spec.dims) if (!dims.includes(d)) o[spec.cols[d]] = null; // 폴백으로 빠진 차원
    return o;
  });
}

// 무료(샌드박스) BigQuery 는 INSERT/DELETE(DML)와 스트리밍이 막혀 있어, 날짜별 파티션을 로드 작업으로 통째로 교체한다
// (table$YYYYMMDD + WRITE_TRUNCATE). 같은 날을 다시 받아도 중복되지 않는다.
function byDate(spec, rows) {
  const loadedAt = new Date().toISOString();
  const out = {};
  for (const r of rows) {
    const o = {};
    for (const c of Object.values(spec.cols)) o[c] = jsonVal(r[c], colType(c));
    o.loaded_at = loadedAt;
    (out[o.date] = out[o.date] || []).push(o);
  }
  return out;
}

async function loadPartition(token, table, date, rows) {
  const boundary = 'adsense' + Math.random().toString(36).slice(2);
  const config = {
    configuration: { load: {
      destinationTable: { projectId: BQ_PROJECT, datasetId: BQ_DATASET, tableId: `${table}$${date.replace(/-/g, '')}` },
      sourceFormat: 'NEWLINE_DELIMITED_JSON', writeDisposition: 'WRITE_TRUNCATE',
    } },
    jobReference: { projectId: BQ_PROJECT, location: BQ_LOCATION },
  };
  const CRLF = '\r\n';
  const body = `--${boundary}${CRLF}content-type: application/json; charset=UTF-8${CRLF}${CRLF}${JSON.stringify(config)}${CRLF}`
    + `--${boundary}${CRLF}content-type: application/octet-stream${CRLF}${CRLF}${rows.map(r => JSON.stringify(r)).join('\n')}${CRLF}--${boundary}--`;
  let job = await api(token, `https://bigquery.googleapis.com/upload/bigquery/v2/projects/${BQ_PROJECT}/jobs?uploadType=multipart`, {
    method: 'POST', headers: { 'content-type': `multipart/related; boundary=${boundary}` }, body,
  });
  for (let i = 0; i < 30 && job.status?.state !== 'DONE'; i++) {
    await new Promise(r => setTimeout(r, 2000));
    job = await api(token, `https://bigquery.googleapis.com/bigquery/v2/projects/${BQ_PROJECT}/jobs/${job.jobReference.jobId}?location=${BQ_LOCATION}`);
  }
  if (job.status?.state !== 'DONE') throw new Error(`${table} ${date}: 로드 작업이 60초 안에 끝나지 않았습니다`);
  if (job.status.errorResult) throw new Error(`${table} ${date}: ${job.status.errorResult.message}`);
}

async function main() {
  const end = ymd(new Date(Date.now() - 24 * 3600e3));            // 어제(UTC 기준 — 계정 시간대 보고서라 하루 겹쳐 받는다)
  const start = ymd(new Date(Date.now() - DAYS * 24 * 3600e3));
  if (env.DRY_RUN_FILE) {
    const sample = JSON.parse(readFileSync(env.DRY_RUN_FILE, 'utf8'));
    for (const spec of REPORTS) {
      const parts = byDate(spec, toRows(sample[spec.table], spec, spec.dims));
      for (const [d, rows] of Object.entries(parts)) console.log(`[dry-run] ${spec.table}$${d.replace(/-/g, '')}: ${rows.length}행\n${rows.map(r => JSON.stringify(r)).join('\n')}\n`);
    }
    return;
  }
  if (!env.ADSENSE_REFRESH_TOKEN) { console.log('ADSENSE_REFRESH_TOKEN 이 설정되지 않아 건너뜁니다 (설정 방법: scripts/adsense/auth.mjs 머리말).'); return; }
  const token = await accessToken();
  let account = env.ADSENSE_ACCOUNT;
  if (!account) {
    const list = await api(token, 'https://adsense.googleapis.com/v2/accounts');
    account = list.accounts?.[0]?.name;
    if (!account) throw new Error('접근 가능한 AdSense 계정이 없습니다');
  }
  console.log(`기간 ${iso(start)} ~ ${iso(end)}`);
  for (const spec of REPORTS) {
    let dims = spec.dims, report;
    try { report = await generate(token, account, dims, spec.metrics, start, end); }
    catch (e) {
      if (e.status === 400 && spec.fallbackDims) { dims = spec.fallbackDims; report = await generate(token, account, dims, spec.metrics, start, end); console.log(`${spec.table}: 차원 조합이 거부되어 ${dims.join('+')} 로 다시 받음`); }
      else throw e;
    }
    const parts = byDate(spec, toRows(report, spec, dims));
    for (const [d, rows] of Object.entries(parts)) {
      await loadPartition(token, spec.table, d, rows);
      console.log(`${spec.table} ${d}: ${rows.length}행 적재`);
    }
    if (!Object.keys(parts).length) console.log(`${spec.table}: 기간 안에 데이터 없음`);
  }
}

main().catch(e => { console.error('실패:', e.message); process.exit(1); });
