// @ts-nocheck
// 다음 SQLD 정기 시험 일정 — PlanScreen 헤더 D-day 카운트다운에 사용.
// 시험일이 지나면 다음 회차로 갱신 필요 (반기마다 1회 정도).

/** 2026년 2회차 SQLD 시험 — 5월 31일 (일) */
export const NEXT_EXAM = {
  label: '2026년 2회차 SQLD 시험',
  date: '2026-05-31',
  weekday: '일',
} as const;

/** 시험까지 남은 일수 (오늘 기준, 자정 비교). 시험 당일 = 0, 지난 시험 = 음수. */
export function daysUntilExam(today: Date = new Date()): number {
  const exam = new Date(NEXT_EXAM.date + 'T00:00:00+09:00');
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const e = new Date(exam.getFullYear(), exam.getMonth(), exam.getDate()).getTime();
  return Math.round((e - t) / (24 * 60 * 60 * 1000));
}
