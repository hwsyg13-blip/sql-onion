// @ts-nocheck
// localStorage 기반 진도 스토어 — 로그인 없는 방문자 전용.
// 로그인 켜면 lib/queries.ts 로 Supabase 동기화 가능 (지금은 로컬 only).

import React from 'react';

const KEY = 'sqlo_progress_v1';

export type LocalProgress = {
  /** 첫 방문 타임스탬프 (ms) */
  firstVisitAt: number;
  /** 방문한 고유 날짜 (YYYY-MM-DD) — 공부일수 계산용 */
  visitDays: string[];
  /** 이론 챕터 열람 기록: ['c11', 'c21', ...] */
  theoryViewed: string[];
  /** 퀴즈 답안 기록 */
  quizAttempts: Record<string, {
    chosen: number;
    correct: boolean;
    at: number;
    round?: number;
    subject?: '1과목' | '2과목';
    number?: number;
    context?: 'mock' | 'exam' | 'theory';
  }>;
  /** CBT 완료 기록 */
  examSessions: Record<string, {
    score: number;
    total: number;
    startedAt: number;
    finishedAt: number;
  }>;
};

const DEFAULT: LocalProgress = {
  firstVisitAt: 0,
  visitDays: [],
  theoryViewed: [],
  quizAttempts: {},
  examSessions: {},
};

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getProgress(): LocalProgress {
  if (typeof window === 'undefined') return { ...DEFAULT };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT };
    const parsed = JSON.parse(raw);
    // Backfill missing keys on schema drift
    return { ...DEFAULT, ...parsed };
  } catch { return { ...DEFAULT }; }
}

export function save(p: LocalProgress) {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(KEY, JSON.stringify(p)); } catch {}
  // notify listeners in the same tab
  try { window.dispatchEvent(new Event('sqlo_progress_change')); } catch {}
}

/** 오늘 방문을 기록 (하루에 한 번만 visitDays에 추가) */
export function recordVisit() {
  const p = getProgress();
  const today = todayStr();
  if (!p.firstVisitAt) p.firstVisitAt = Date.now();
  if (!p.visitDays.includes(today)) {
    p.visitDays = [...p.visitDays, today].sort();
  }
  save(p);
}

export function recordTheoryView(chapterId: string) {
  if (!chapterId) return;
  const p = getProgress();
  if (!p.theoryViewed.includes(chapterId)) {
    p.theoryViewed = [...p.theoryViewed, chapterId];
    save(p);
  }
}

export function recordQuizAttempt(key: string, info: LocalProgress['quizAttempts'][string]) {
  const p = getProgress();
  p.quizAttempts = { ...p.quizAttempts, [key]: { at: Date.now(), ...info } };
  save(p);
}

export function recordExamComplete(examSetId: string, score: number, total: number, startedAt?: number) {
  const p = getProgress();
  p.examSessions = {
    ...p.examSessions,
    [examSetId]: {
      score,
      total,
      startedAt: startedAt || Date.now(),
      finishedAt: Date.now(),
    },
  };
  save(p);
}

/** 초기화 (디버그·개발용) */
export function resetProgress() {
  if (typeof window === 'undefined') return;
  try { window.localStorage.removeItem(KEY); } catch {}
  try { window.dispatchEvent(new Event('sqlo_progress_change')); } catch {}
}

// ─────────────────────────────────────────────────────────────
// 파생 통계
// ─────────────────────────────────────────────────────────────

export type DerivedStats = {
  totalAttempts: number;
  correctRate: number;          // 0~100
  examsDone: number;
  dayProgress: number;          // 1~21
  weekNum: number;              // 1~3
  weekDay: number;              // 1~7
  recentExams: { examSetId: string; score: number; total: number; finishedAt: number }[];
};

export function computeStats(p: LocalProgress): DerivedStats {
  const attempts = Object.values(p.quizAttempts || {});
  const totalAttempts = attempts.length;
  const correct = attempts.filter(a => a.correct).length;
  const correctRate = totalAttempts ? Math.round((correct / totalAttempts) * 100) : 0;

  const exams = Object.entries(p.examSessions || {})
    .map(([id, v]) => ({ examSetId: id, ...v }))
    .filter(e => e.finishedAt);
  const examsDone = exams.length;
  const recentExams = exams
    .slice()
    .sort((a, b) => b.finishedAt - a.finishedAt)
    .slice(0, 3);

  // Day 진도 = 방문한 고유 일수 (최대 21, 최소 1)
  const visited = (p.visitDays || []).length;
  const dayProgress = Math.min(21, Math.max(1, visited || 1));
  const weekNum = Math.min(3, Math.ceil(dayProgress / 7));
  const weekDay = ((dayProgress - 1) % 7) + 1;

  return { totalAttempts, correctRate, examsDone, dayProgress, weekNum, weekDay, recentExams };
}

// ─────────────────────────────────────────────────────────────
// 3주 계획 — 각 Day 완료 판정
// ─────────────────────────────────────────────────────────────

/** Day 번호 → 완료된 것인지 판단 (진도에 맞게 PlanScreen 체크 표시) */
export function isPlanDayDone(day: any, p: LocalProgress, stats: DerivedStats): boolean {
  // day: PlanScreen.PLAN_DATA 의 한 항목
  // 현재 위치보다 이전이면 done 으로 간주 + 실제 완료 증거가 있으면 확실히 done
  if (day.theoryId) {
    return p.theoryViewed.includes(day.theoryId);
  }
  if (day.examId) {
    return Boolean(p.examSessions[day.examId]?.finishedAt);
  }
  if (day.mock) {
    // 모의고사는 별도 ID 없이 AI 생성이라 — 단순히 day 번호가 지난 진도보다 앞이면 done
    return day.day <= stats.dayProgress - 1;
  }
  if (day.test) {
    // 1과목 미니테스트: 1과목 퀴즈 10+ 시도했으면 완료
    const s1Attempts = Object.values(p.quizAttempts).filter(a => a.subject === '1과목').length;
    return s1Attempts >= 10;
  }
  // 복습·마무리 같은 활동: day 번호가 현재 진도보다 이전이면 done
  return day.day < stats.dayProgress;
}

// ─────────────────────────────────────────────────────────────
// React 훅 — 진도 변경 구독
// ─────────────────────────────────────────────────────────────

/** useProgress — 이 훅을 쓰는 컴포넌트는 진도 변경 시 자동 리렌더 */
export function useProgress(): { progress: LocalProgress; stats: DerivedStats } {
  const [progress, setProgress] = React.useState<LocalProgress>(() => getProgress());

  React.useEffect(() => {
    const handler = () => setProgress(getProgress());
    // 이벤트 기반 (같은 탭)
    window.addEventListener('sqlo_progress_change', handler);
    // storage 이벤트 (다른 탭)
    window.addEventListener('storage', (e) => {
      if (e.key === KEY) handler();
    });
    return () => {
      window.removeEventListener('sqlo_progress_change', handler);
    };
  }, []);

  const stats = React.useMemo(() => computeStats(progress), [progress]);
  return { progress, stats };
}
