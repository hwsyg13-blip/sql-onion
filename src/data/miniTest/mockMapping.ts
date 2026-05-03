// @ts-nocheck
// 챕터별 AI 모의고사 연관 문제 매핑.
// AI_MOCK 의 각 문항에 부여된 chapter 메타태그(한국어 카테고리)를
// 30개 챕터 ID(c111~c234)에 연결한다.
//
// 한 카테고리가 여러 챕터에 걸치면 해당 챕터들 모두에 매핑한다
// (예: "DCL·TCL" → c232·c234 양쪽에 등장).

export const MOCK_CHAPTERS_FOR: Record<string, string[]> = {
  // 1과목 - 1-1
  c111: ['데이터 모델 개념', '데이터베이스 설계'],
  c112: ['엔터티'],
  c113: ['속성'],
  c114: ['관계'],
  c115: ['식별자', '데이터 무결성'],

  // 1과목 - 1-2
  c121: ['정규화', '데이터 모델링 기법'],
  c122: [], // 관계와 조인의 이해 — 별도 카테고리 없음
  c123: ['트랜잭션 관리', '트랜잭션과 Null'],
  c124: ['트랜잭션과 Null'],
  c125: [], // 본질 vs 인조 식별자 — 식별자에서 일부 다룸

  // 2과목 - 2-1
  c211: ['관계형 DB와 SELECT'],
  c212: ['관계형 DB와 SELECT'],
  c213: ['함수'],
  c214: ['WHERE'],
  c215: ['GROUP BY·HAVING'],
  c216: ['ORDER BY'],
  c217: ['조인'],
  c218: ['표준 조인'],

  // 2과목 - 2-2
  c221: ['서브쿼리'],
  c222: ['집합 연산자'],
  c223: ['그룹 함수'],
  c224: ['윈도우 함수'],
  c225: ['TOP N 쿼리'],
  c226: ['계층형 질의'],
  c227: ['PIVOT'],
  c228: ['정규표현식', '정규 표현식'],

  // 2과목 - 2-3
  c231: ['DML'],
  c232: ['DCL·TCL'],
  c233: ['DDL', 'View'],
  c234: ['DCL·TCL'],
};

/** 챕터에 매칭되는 AI 모의고사 카테고리가 하나라도 있는지 */
export function hasMockForChapter(chapterId: string): boolean {
  return (MOCK_CHAPTERS_FOR[chapterId]?.length ?? 0) > 0;
}
