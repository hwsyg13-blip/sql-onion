// Theory content — 메타 (전 과목/전 챕터 목록)

import { THEORY_BODY_S1 } from './theoryS1';
import { THEORY_BODY_S2 } from './theoryS2';

export const THEORY: any = {
  subjects: [
    {
      id: 's1', code: '1과목', title: '데이터 모델링의 이해',
      chapters: [
        { id: 'c11', title: '데이터 모델의 이해', detailed: true, sections: ['1.1 모델링의 이해','1.2 3층 스키마 구조','1.3 데이터 모델의 요소','1.4 ERD 표기법'] },
        { id: 'c12', title: '엔터티',          detailed: true, sections: ['2.1 엔터티의 개념','2.2 엔터티의 특징','2.3 엔터티의 분류'] },
        { id: 'c13', title: '속성',            detailed: true, sections: ['3.1 속성의 개념','3.2 속성의 분류','3.3 도메인'] },
        { id: 'c14', title: '관계',            detailed: true, sections: ['4.1 관계의 개념','4.2 관계의 표기','4.3 관계 차수 · 선택성'] },
        { id: 'c15', title: '식별자',          detailed: true, sections: ['5.1 식별자의 4가지 특성','5.2 식별자 분류','5.3 식별자 관계 vs 비식별자 관계'] },
        { id: 'c16', title: '정규화 · 반정규화', detailed: true, sections: ['6.1 함수 종속','6.2 1NF ~ 5NF','6.3 반정규화'] },
      ],
    },
    {
      id: 's2', code: '2과목', title: 'SQL 기본 및 활용',
      chapters: [
        { id: 'c21', title: '관계형 DB · SQL 개요', detailed: true, sections: ['1.1 관계형 DB','1.2 SQL 분류 (DDL/DML/DCL/TCL)','1.3 트랜잭션 ACID'] },
        { id: 'c22', title: 'SELECT · WHERE · 함수', detailed: true, sections: ['2.1 기본 SELECT','2.2 WHERE · ORDER BY','2.3 내장 함수','2.4 NULL 처리 함수'] },
        { id: 'c23', title: 'GROUP BY · HAVING',  detailed: true, sections: ['3.1 집계 함수','3.2 GROUP BY · HAVING','3.3 ROLLUP · CUBE · GROUPING SETS'] },
        { id: 'c24', title: 'JOIN',              detailed: true, sections: ['4.1 INNER JOIN','4.2 OUTER JOIN','4.3 CROSS · SELF JOIN','4.4 ANSI vs Oracle 표기'] },
        { id: 'c25', title: '서브쿼리',            detailed: true, sections: ['5.1 단일/다중 행','5.2 스칼라·인라인뷰','5.3 연관 서브쿼리'] },
        { id: 'c26', title: '집합 연산자',         detailed: true, sections: ['6.1 UNION · UNION ALL','6.2 INTERSECT · MINUS'] },
        { id: 'c27', title: '계층형 질의 · 윈도우 함수', detailed: true, sections: ['7.1 CONNECT BY','7.2 윈도우 함수 개요','7.3 RANK·DENSE_RANK·ROW_NUMBER','7.4 집계 윈도우 · LAG/LEAD'] },
      ],
    },
  ],
};

export const THEORY_BODY: any = { ...THEORY_BODY_S1, ...THEORY_BODY_S2 };
