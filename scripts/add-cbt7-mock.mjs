import fs from 'node:fs';
const target = 'scripts/authored/cbt-mock.json';
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

const NEW = [
  {
    _pdf: 'cbt7', _pdfNumber: 5,
    subject: '2과목', chapter: '그룹 함수',
    title: '어떠한 데이터 타입도 사용이 가능한 집계 함수는 어느 것인가?',
    options: ['AVG', 'SUM', 'COUNT', 'STDDEV'],
    correctIndex: 2,
    explanation: '집계 함수는 집합에 대한 정보를 제공하므로 주로 숫자 유형에 사용된다. 추가로 MAX, MIN, COUNT 함수는 숫자 유형뿐 아니라 문자 유형, 날짜 유형에도 적용이 가능한 함수이다.'
  },
  {
    _pdf: 'cbt7', _pdfNumber: 7,
    subject: '2과목', chapter: '표준 조인',
    title: 'ANSI/ISO 표준 SQL 에서 두 테이블 간에 동일한 칼럼 이름을 가지는 것을 모두 출력하는 조인 방식은 무엇인가?',
    options: ['Inner Join', 'Cross Join', 'Natural Join', 'Using'],
    correctIndex: 2,
    explanation: 'NATURAL JOIN 은 두 테이블 간에 동일한 칼럼 이름을 가진 것을 모두 출력하는 조인 방법이다. USING 은 명시한 컬럼만 매칭, INNER JOIN ON 은 임의 조건, CROSS JOIN 은 카티션 곱.'
  },
  {
    _pdf: 'cbt7', _pdfNumber: 22,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 분산 데이터베이스의 투명성 (Transparency) 에 속하지 않는 것은?',
    options: ['분할 투명성', '병렬 투명성', '위치 투명성', '변환 투명성'],
    correctIndex: 1,
    explanation: '분산 데이터베이스의 투명성에는 분할 투명성, 위치 투명성, 지역 투명성, 중복 (병합) 투명성, 변환 투명성, 장애 투명성이 있다. \"병렬 투명성\" 은 표준 분류에 포함되지 않는다.'
  },
  {
    _pdf: 'cbt7', _pdfNumber: 41,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 개념적 데이터 모델링 단계에서 수행하지 않는 것은?',
    options: ['업무 엔터티 식별', '속성 추출', '인덱스 구성', '관계 설정'],
    correctIndex: 2,
    explanation: '개념적 데이터 모델링 단계에서는 업무 엔터티 식별, 속성 추출, 관계 설정 등을 수행한다. 인덱스는 물리 모델링에서 다루는 것이며, 개념 모델에서는 등장하지 않는다.'
  },
  {
    _pdf: 'cbt7', _pdfNumber: 42,
    subject: '2과목', chapter: '조인',
    title: '아래와 같은 테이블 TAB1, TAB2 가 있을 때 아래 5 종류의 SQL 결과 건수를 알맞게 나열한 것은?',
    options: ['2, 4, 3, 5, 12', '2, 4, 5, 3, 12', '2, 3, 4, 5, 12', '5, 4, 3, 7, 12'],
    correctIndex: 0,
    explanation: 'TAB1 4 행, TAB2 3 행. INNER JOIN ON A.KEY1=B.KEY2 → 매칭 2 행. LEFT OUTER JOIN → TAB1 모든 4 행 (미매칭은 NULL). RIGHT OUTER JOIN → TAB2 모든 3 행. FULL OUTER JOIN → 매칭 2 + TAB1 미매칭 2 + TAB2 미매칭 1 = 5 행. CROSS JOIN → 4×3 = 12 행. 따라서 (2, 4, 3, 5, 12).',
    references: [
      { type: 'sql', code: "SELECT * FROM TAB1 A INNER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A LEFT OUTER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A RIGHT OUTER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A FULL OUTER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A CROSS JOIN TAB2 B;" }
    ]
  },
  {
    _pdf: 'cbt7', _pdfNumber: 46,
    subject: '2과목', chapter: 'DML',
    title: '다음 중 DEPT 테이블에 존재하지 않는 부서의 사원을 삭제하는 SQL 은? (단, EMP.DEPTNO 컬럼이 NULL 가능)',
    options: [
      'DELETE FROM EMP WHERE DEPTNO NOT IN (SELECT DEPTNO FROM DEPT);',
      'DELETE * FROM EMP WHERE DEPTNO != ALL (SELECT DEPTNO FROM DEPT);',
      'DELETE FROM EMP WHERE NOT EXISTS DEPT.DEPTNO = EMP.DEPTNO;',
      'DELETE FROM EMP WHERE DEPTNO IS NULL;'
    ],
    correctIndex: 0,
    explanation: 'DEPT 에 존재하지 않는 부서의 사원을 삭제하려면 NOT IN 서브쿼리를 사용한다. ② DELETE 는 * 를 쓸 수 없음 (문법 오류). ③ NOT EXISTS 는 서브쿼리 형식이 잘못됨. ④ NULL 인 사원만 삭제 (의미 다름).'
  },
  {
    _pdf: 'cbt7', _pdfNumber: 50,
    subject: '2과목', chapter: 'DML',
    title: 'DELETE, TRUNCATE, DROP 명령을 비교한 것으로 옳은 것은?',
    options: [
      'DROP, TRUNCATE 는 DDL 이고 DELETE 는 DML 이다.',
      'DROP, TRUNCATE 는 테이블 자체를 삭제하고, DELETE 는 테이블 자체는 남아있다.',
      'DELETE FROM 테이블; 과 TRUNCATE TABLE 테이블; 의 결과 행은 다르다.',
      'DELETE 는 ROLLBACK 이 불가능하다.'
    ],
    correctIndex: 0,
    explanation: 'DELETE 는 DML 로 ROLLBACK 이 가능하며 실행 시 테이블 자체는 남아있다. TRUNCATE 는 DDL 로 ROLLBACK 이 불가하며, 실행 시 테이블을 초기 상태로 되돌린다 (테이블 구조 자체는 남아있음). DROP 은 DDL 로 ROLLBACK 도 불가능하고 테이블 구조 자체를 삭제한다. ② TRUNCATE 도 구조는 남음, ③ 둘 다 빈 테이블, ④ DELETE 는 ROLLBACK 가능.'
  }
];

let nextId = data.authored.length + 1;
for (const q of NEW) {
  q._id = `cbt-${String(nextId).padStart(3, '0')}`;
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} cbt7 questions. Total: ${data.authored.length}`);
