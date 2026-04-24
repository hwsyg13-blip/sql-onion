// @ts-nocheck
import { supabase, hasSupabase } from './supabase';

export async function recordQuizAttempt(params: {
  userId: string;
  questionId: string | number;
  chosen: number;
  correct: boolean;
  context: 'mock' | 'exam' | 'theory';
}) {
  if (!hasSupabase) return;
  const { error } = await supabase.from('quiz_attempts').insert({
    user_id: params.userId,
    question_id: String(params.questionId),
    chosen: params.chosen,
    correct: params.correct,
    context: params.context,
  });
  if (error) console.error('[recordQuizAttempt]', error);
}

export async function startExamSession(userId: string, examSetId: string) {
  if (!hasSupabase) return null;
  const { data, error } = await supabase
    .from('exam_sessions')
    .insert({ user_id: userId, exam_set_id: examSetId })
    .select('id')
    .single();
  if (error) { console.error('[startExamSession]', error); return null; }
  return data.id as string;
}

export async function finishExamSession(sessionId: string, score: number, total: number) {
  if (!hasSupabase) return;
  const { error } = await supabase
    .from('exam_sessions')
    .update({ finished_at: new Date().toISOString(), score, total })
    .eq('id', sessionId);
  if (error) console.error('[finishExamSession]', error);
}

/**
 * HomeScreen 용 통계 — 총 풀이 수, 정답률, 최근 시험, 진도일수
 */
export async function fetchHomeStats(userId: string) {
  if (!hasSupabase) {
    return { totalAttempts: 0, correctRate: 0, examsDone: 0, recent: [] as any[] };
  }

  const [attemptsRes, examsRes] = await Promise.all([
    supabase.from('quiz_attempts').select('correct', { count: 'exact' }).eq('user_id', userId),
    supabase
      .from('exam_sessions')
      .select('id, exam_set_id, started_at, finished_at, score, total')
      .eq('user_id', userId)
      .order('started_at', { ascending: false })
      .limit(5),
  ]);

  const attempts = attemptsRes.data || [];
  const totalAttempts = attempts.length;
  const correctCount = attempts.filter((a: any) => a.correct).length;
  const correctRate = totalAttempts ? Math.round((correctCount / totalAttempts) * 100) : 0;

  const exams = examsRes.data || [];
  const examsDone = exams.filter((e: any) => e.finished_at).length;

  return { totalAttempts, correctRate, examsDone, recent: exams };
}
