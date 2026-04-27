// Auto-generated index. Do not edit by hand — re-run scripts/build-quiz-bank.mjs.
// 총 800문항, 제45회 ~ 제60회

/** 문항에 딸린 보기(지문·표·SQL·ERD 도식) 블록 */
export type QuestionReference =
  | { type: 'text';  content: string; heading?: string }
  | { type: 'sql';   code: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'ascii'; text: string; caption?: string }
  | { type: 'html';  html: string; caption?: string }
  | { type: 'entity-diagram'; entityName: string; preText: string; headers: string[]; rows: string[][] };

export type QuizQuestion = {
  id: number;
  examSetId: string;
  examLabel: string;
  /** 기출 회차 번호. ai-mock 등 회차에 속하지 않는 풀은 undefined. */
  round?: number;
  subject: '1과목' | '2과목';
  number: number;
  title: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** 문항에 포함되는 보기(지문·표·SQL·도식) 블록들. 없으면 생략. */
  references?: QuestionReference[];
  /** 선택지별 보기 블록. 인덱스가 options 와 일치. 빈 배열은 보기 없음. */
  optionReferences?: (QuestionReference[] | undefined)[];
  /** SQLD 챕터 메타태그 (ai-mock 항목에 부여). UI 노출 가능. */
  chapter?: string;
  /** 내부 출처 태그 ('pdf' | 'blog' | 'authored' | 'ai-mock'). UI 에 노출하지 말 것. */
  _source?: string;
  /** AI 모의 원본 ID (ai-mock-001 등). 추적용. */
  _origId?: string;
};

import { ROUND_60 } from './rounds/round-60';
import { ROUND_59 } from './rounds/round-59';
import { ROUND_58 } from './rounds/round-58';
import { ROUND_57 } from './rounds/round-57';
import { ROUND_56 } from './rounds/round-56';
import { ROUND_55 } from './rounds/round-55';
import { ROUND_54 } from './rounds/round-54';
import { ROUND_53 } from './rounds/round-53';
import { ROUND_52 } from './rounds/round-52';
import { ROUND_51 } from './rounds/round-51';
import { ROUND_50 } from './rounds/round-50';
import { ROUND_49 } from './rounds/round-49';
import { ROUND_48 } from './rounds/round-48';
import { ROUND_47 } from './rounds/round-47';
import { ROUND_46 } from './rounds/round-46';
import { ROUND_45 } from './rounds/round-45';
import { AI_MOCK } from './rounds/ai-mock';

export const EXAM_SETS: { id: string; round: number; label: string; date: string; count: number }[] = [
  {
    "id": "round-60",
    "round": 60,
    "label": "제60회",
    "date": "2026년 3월",
    "count": 50
  },
  {
    "id": "round-59",
    "round": 59,
    "label": "제59회",
    "date": "2025년 11월",
    "count": 50
  },
  {
    "id": "round-58",
    "round": 58,
    "label": "제58회",
    "date": "2025년 8월",
    "count": 50
  },
  {
    "id": "round-57",
    "round": 57,
    "label": "제57회",
    "date": "2025년 5월",
    "count": 50
  },
  {
    "id": "round-56",
    "round": 56,
    "label": "제56회",
    "date": "2025년 3월",
    "count": 50
  },
  {
    "id": "round-55",
    "round": 55,
    "label": "제55회",
    "date": "2024년 11월",
    "count": 50
  },
  {
    "id": "round-54",
    "round": 54,
    "label": "제54회",
    "date": "2024년 8월",
    "count": 50
  },
  {
    "id": "round-53",
    "round": 53,
    "label": "제53회",
    "date": "2024년 5월",
    "count": 50
  },
  {
    "id": "round-52",
    "round": 52,
    "label": "제52회",
    "date": "2024년 3월",
    "count": 50
  },
  {
    "id": "round-51",
    "round": 51,
    "label": "제51회",
    "date": "2023년 11월",
    "count": 50
  },
  {
    "id": "round-50",
    "round": 50,
    "label": "제50회",
    "date": "2023년 9월",
    "count": 50
  },
  {
    "id": "round-49",
    "round": 49,
    "label": "제49회",
    "date": "2023년 6월",
    "count": 50
  },
  {
    "id": "round-48",
    "round": 48,
    "label": "제48회",
    "date": "2023년 3월",
    "count": 50
  },
  {
    "id": "round-47",
    "round": 47,
    "label": "제47회",
    "date": "2022년 11월",
    "count": 50
  },
  {
    "id": "round-46",
    "round": 46,
    "label": "제46회",
    "date": "2022년 9월",
    "count": 50
  },
  {
    "id": "round-45",
    "round": 45,
    "label": "제45회",
    "date": "2022년 5월",
    "count": 50
  }
];

/** 기출 회차 풀 (45회~60회) — 회차 시험·모의고사 출제 풀 */
export const QUIZ_BANK_EXAM: QuizQuestion[] = [
  ...ROUND_60,
  ...ROUND_59,
  ...ROUND_58,
  ...ROUND_57,
  ...ROUND_56,
  ...ROUND_55,
  ...ROUND_54,
  ...ROUND_53,
  ...ROUND_52,
  ...ROUND_51,
  ...ROUND_50,
  ...ROUND_49,
  ...ROUND_48,
  ...ROUND_47,
  ...ROUND_46,
  ...ROUND_45,
];

/** AI 생성 변형 풀 — 기출 회차에 속하지 않는 별도 풀 */
export const QUIZ_BANK_AI_MOCK: QuizQuestion[] = [...AI_MOCK];

/** 통합 풀 (기출 + AI 변형) — 모의고사·랜덤 퀴즈 모드 출제용. 기출 회차 CBT 는 round 필터로 ai-mock 자동 제외됨. */
export const QUIZ_BANK: QuizQuestion[] = [
  ...QUIZ_BANK_EXAM,
  ...QUIZ_BANK_AI_MOCK,
];
