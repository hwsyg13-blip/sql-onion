// @ts-nocheck
// SQLD 정기 시험 일정 — 홈 "시험까지" D-day, 3주 공부계획 헤더/권장 날짜에 사용.
//
// 다음 시험은 오늘 날짜(한국 시간 기준)로 이 목록에서 자동 선택된다.
// 시험일이 지나면 별도 수정 없이 다음 회차로 넘어간다.
//
// 새 일정 추가 방법: 한국데이터산업진흥원(www.dataq.or.kr) 시험일정 공지가 나오면
// 아래 EXAM_SCHEDULE 에 { round, date } 한 줄씩만 추가하면 된다.
// (목록의 마지막 시험까지 지나면 D-day 는 "일정 발표 예정" 으로 표시된다.)

export const EXAM_SCHEDULE = [
  { round: 60, date: '2026-03-07' },
  { round: 61, date: '2026-05-31' },
  { round: 62, date: '2026-08-22' },
  { round: 63, date: '2026-11-14' },
  // 2027년 일정은 공식 발표 전 — 발표 후 { round: 64, date: 'YYYY-MM-DD' } 형태로 추가
];

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

/** 한국 시간(KST) 기준 오늘 날짜 'YYYY-MM-DD' (브라우저 시간대와 무관) */
function todayKST(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

/** 'YYYY-MM-DD' 두 날짜 사이의 일수 차 (b - a) */
function diffDays(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
}

export type ExamInfo = { round: number; date: string; label: string; weekday: string; year: number; month: number; day: number };

function toInfo(e: { round: number; date: string }): ExamInfo {
  const [year, month, day] = e.date.split('-').map(Number);
  return {
    round: e.round,
    date: e.date,
    label: `제${e.round}회 SQLD 시험`,
    weekday: WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()],
    year, month, day,
  };
}

/** 오늘(시험 당일 포함) 이후 첫 시험. 남은 일정이 없으면 null. */
export function getNextExam(now: Date = new Date()): ExamInfo | null {
  const today = todayKST(now);
  const next = [...EXAM_SCHEDULE]
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .find(e => e.date >= today);
  return next ? toInfo(next) : null;
}

/** 시험까지 남은 일수. 시험 당일 = 0. 남은 시험 일정이 없으면 null. */
export function daysUntilExam(now: Date = new Date()): number | null {
  const next = getNextExam(now);
  return next ? diffDays(todayKST(now), next.date) : null;
}

/** 3주 공부계획 권장 시작일 = 다음 시험일 - 21일 ('YYYY-MM-DD'). 일정이 없으면 null. */
export function planStartDate(now: Date = new Date()): string | null {
  const next = getNextExam(now);
  if (!next) return null;
  const d = new Date(Date.UTC(next.year, next.month - 1, next.day - 21));
  return d.toISOString().slice(0, 10);
}
