// @ts-nocheck
// 챕터별 OX 미니 퀴즈 데이터
// 출처: docs/qa/theory-mockups/exam-review.html (qa/2026-04-27-theory-content)
// 시범 첫 챕터(c111) 만 채움. 30개 챕터 풀은 다음 PR(theory-react-port) 에서.

export interface OxQuestion {
  /** 진술문 — O/X 판단 대상 */
  q: string;
  /** O = true, X = false */
  answer: boolean;
  /** 정답 노출 시 함께 보이는 해설 */
  explanation: string;
}

export const OX_QUIZ: Record<string, OxQuestion[]> = {
  c111: [
    {
      q: '물리적 모델링이 가장 먼저 진행된다.',
      answer: false,
      explanation: '**개념 → 논리 → 물리** 순서로 진행한다.',
    },
    {
      q: '데이터 모델은 코드 작성을 위한 것이다.',
      answer: false,
      explanation: '현실 세계를 **추상화**한 것이다.',
    },
    {
      q: '좋은 모델은 데이터 중복을 일부 허용한다.',
      answer: false,
      explanation: '원칙은 **중복 배제**. 다만 성능을 위한 의도적 반정규화는 별개.',
    },
    {
      q: '데이터 모델링의 3대 관점은 데이터 / 프로세스 / 상관이다.',
      answer: true,
      explanation: '**데이터 · 프로세스 · 상관** 3대 관점이 정답.',
    },
    {
      q: '좋은 모델의 6대 특징에 "통합성"은 포함되지 않는다.',
      answer: false,
      explanation: '완전성 · 중복배제 · 업무규칙 · 재사용 · 의사소통 · **통합성** 6가지 모두 포함.',
    },
    {
      q: '정규화는 물리적 모델링 단계에서 수행한다.',
      answer: false,
      explanation: '정규화는 **논리적 단계**에서 수행한다.',
    },
  ],
};
