// @ts-nocheck
// 챕터별 연관 기출 매핑 — quizBank 의 (round, number) 만 보관, 본문은 quizBank lookup.
// 시범 첫 챕터(c111) 만 채움. 30개 챕터 풀은 다음 PR 에서.
//
// 키워드 매칭 기준: docs/qa/mini-test-spec.md
//   c111 ← '데이터 모델', '모델링', '3층 스키마', '스키마'
// 매칭된 32개 중 챕터 핵심 주제(모델링 단계·관점·3층 스키마)에 직접 닿는 5개 선별.

export interface ExamRef {
  /** 회차 번호 — 예: 45 */
  round: number;
  /** 회차 내 문항 번호 — 1~50 */
  number: number;
}

export const EXAM_MAPPING: Record<string, ExamRef[]> = {
  c111: [
    { round: 45, number: 1 },   // 데이터 모델링 시 유의점
    { round: 45, number: 6 },   // 모델링 단계 중 재사용성 (논리)
    { round: 47, number: 1 },   // 데이터 모델링 관점
    { round: 47, number: 10 },  // 외부 스키마
    { round: 48, number: 2 },   // 개념 스키마
  ],
};
