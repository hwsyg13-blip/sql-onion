import fs from 'node:fs';
const target = 'scripts/authored/cbt-mock.json';
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

const NEW = [
  {
    _pdf: 'cbt5', _pdfNumber: 17,
    subject: '1과목', chapter: '엔터티',
    title: '다음 중 엔터티 (Entity) 의 명명 기준으로 가장 적절한 것은?',
    options: ['동사로 시작하는 이름을 사용한다.', '약어 사용을 우선한다.', '가능한 단수형 명사를 사용한다.', '내부식별자 값을 포함한다.'],
    correctIndex: 2,
    explanation: '엔터티는 업무 용어 기반의 단수형 명사를 사용하는 것이 원칙이다. 동사 사용은 부적절하며 약어 사용은 권장되지 않는다.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 18,
    subject: '2과목', chapter: '집합 연산자',
    title: '다음 중 UNION ALL 에 대한 설명으로 옳은 것은?',
    options: ['결과에서 중복을 제거한다.', '정렬된 결과를 반환한다.', '중복을 포함하여 결과를 모두 출력한다.', '두 SELECT 결과의 교집합을 구한다.'],
    correctIndex: 2,
    explanation: 'UNION ALL 은 두 결과 집합을 그대로 결합하며 중복을 제거하지 않고 모두 출력한다. ① UNION 의 특성, ② UNION 은 정렬, ④ INTERSECT 의 특성.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 19,
    subject: '1과목', chapter: '속성',
    title: '다음 중 일반 속성과 설계 속성에 대한 설명으로 올바른 것은?',
    options: [
      '설계 속성은 요구사항에서 직접 도출된다.',
      '일반 속성은 개발상 편의를 위해 추가된 속성이다.',
      '파생 속성은 무조건 저장되어야 한다.',
      '파생 속성은 다른 속성으로부터 계산된 값을 가진다.'
    ],
    correctIndex: 3,
    explanation: '파생 속성은 기존 속성으로부터 유도된 값으로 꼭 저장할 필요는 없다. 요구사항에 직접 도출되는 것은 기본 속성이고, 편의를 위해 추가된 속성은 설계 속성이다.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 20,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은? (PIVOT 사용)',
    options: [
      'Alice|NULL|80|95, Bob|NULL|70|88, Charlie|85|90|NULL',
      'Alice|80|95|NULL, Bob|70|NULL|88, Charlie|NULL|90|85',
      'Alice|80|NULL|95, Bob|NULL|70|88, Charlie|NULL|90|85',
      'Alice|95|80|NULL, Bob|88|70|NULL, Charlie|85|90|NULL'
    ],
    correctIndex: 1,
    explanation: 'PIVOT 은 GAME 컬럼의 값 \'Puzzle\', \'Shooter\', \'Racing\' 을 각각 컬럼으로 전환하고 해당 값에 연결된 Score 의 MAX 값을 찾아 반환해준다. Alice: Puzzle 80, Shooter 95, Racing NULL. Bob: Puzzle 70, Racing 88, Shooter NULL. Charlie: Shooter 90, Racing 85, Puzzle NULL.',
    references: [
      {
        type: 'table', caption: '[TB_GAME_SCORE] 테이블',
        headers: ['Player', 'Game', 'Score'],
        rows: [
          ['Alice', 'Puzzle', '80'], ['Alice', 'Shooter', '95'],
          ['Bob', 'Puzzle', '70'], ['Bob', 'Racing', '88'],
          ['Charlie', 'Shooter', '90'], ['Charlie', 'Racing', '85']
        ]
      },
      {
        type: 'sql',
        code: "SELECT *\nFROM   (\n  SELECT Player, Game, Score FROM TB_GAME_SCORE\n)\nPIVOT (\n  MAX(Score) FOR Game IN ('Puzzle' AS Puzzle, 'Shooter' AS Shooter, 'Racing' AS Racing)\n);"
      }
    ]
  },
  {
    _pdf: 'cbt5', _pdfNumber: 23,
    subject: '2과목', chapter: '집합 연산자',
    title: '다음의 SQL 문에 대한 설명으로 올바른 것은?\n\n`SELECT \'A\', 1 FROM DUAL UNION ALL SELECT 1, \'A\' FROM DUAL;`',
    options: [
      '실행 결과는 A, 1, 1, A 가 표현된다.',
      'UNION ALL 을 사용하면 결과만 출력된다.',
      '위의 SQL 문은 실행되지 않는다 (오류 발생).',
      '실행 결과로 첫 행만 표현된다.'
    ],
    correctIndex: 2,
    explanation: 'UNION ALL 결합 시 두 SELECT 의 컬럼 데이터 타입이 일치해야 한다. \'A\' (문자) 와 1 (숫자) 은 타입이 달라 컬럼 매칭 불가 → 오류 발생.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 27,
    subject: '2과목', chapter: '조인',
    title: 'JOIN 의 종류에 대한 설명으로 틀린 것은?',
    options: [
      'NON-EQUI JOIN 은 두 조건이 일치하지 않은 데이터에 대해서 결과를 만든다.',
      'EQUI JOIN 은 인덱스 기준으로 사용하여 처리할 수 있다.',
      'OUTER JOIN 은 JOIN 조건의 만족하지 않는 데이터의 결과를 출력한다.',
      'SELF JOIN 은 자기 자신을 두 번 사용 데이터를 동일하게 사용한다.'
    ],
    correctIndex: 1,
    explanation: 'EQUI JOIN 의 처리 방법은 키 정보·인덱스 사용 여부에 따라 달라지며 항상 인덱스를 사용하는 것은 아니다. 옵티마이저가 비용 기반으로 인덱스 또는 풀 스캔을 선택할 수 있다.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 29,
    subject: '2과목', chapter: '윈도우 함수',
    title: '우선순위를 계산하는 윈도우 함수에서 동일한 우선순위가 나와도 고유의 값을 부여하기 위한 방법으로 알맞은 것은?',
    options: [
      'RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK',
      'DENSE_RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK',
      'ROW_NUMBER() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK',
      'UNIQUE_RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK'
    ],
    correctIndex: 2,
    explanation: 'ROW_NUMBER() 함수는 동일한 우선순위가 나올 때도 고유한 값을 부여한다. RANK 와 DENSE_RANK 는 동률에 같은 순위, UNIQUE_RANK 는 표준 윈도우 함수가 아니다.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 46,
    subject: '2과목', chapter: '계층형 질의',
    title: '다음 중 역방향 전개가 되기 위한 전개 조건으로 올바른 것은? (단, EMP_ID 와 MANAGER_ID 는 사원 자체의 EMP_ID 와 매니저의 EMP_ID 를 저장한다.)',
    options: [
      'CONNECT BY PRIOR EMP_ID = MANAGER_ID',
      'CONNECT BY EMP_ID = PRIOR MANAGER_ID',
      'WHERE PRIOR EMP_ID = MANAGER_ID',
      'WHERE EMP_ID = PRIOR MANAGER_ID'
    ],
    correctIndex: 1,
    explanation: '자식 → 부모 역방향 전개에서는 PRIOR 가 자식 측 컬럼에 붙어야 한다. \"EMP_ID = PRIOR MANAGER_ID\" 는 부모 행의 MANAGER_ID 와 자식 행의 EMP_ID 가 매칭됨을 의미하여 역방향 (자식 → 부모) 전개가 된다.'
  },
  {
    _pdf: 'cbt5', _pdfNumber: 49,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '데이터 모델링이 최종적으로 완료된 상태라고 정의할 수 있는, 즉 물리적인 스키마 설계를 하기 전 단계에 가까운 단계는?',
    options: [
      '물리적 데이터 모델링',
      '논리적 데이터 모델링',
      '개념 데이터 모델링',
      '기능적 데이터 모델링'
    ],
    correctIndex: 1,
    explanation: '논리적 데이터 모델링은 데이터 모델링이 최종 완료된 상태로 표준화·정규화가 완료되어 데이터 모델이 결정된 단계이다. 물리적 모델링은 그 다음 단계로 DBMS 종속적 구현 사항을 반영한다.'
  }
];

let nextId = data.authored.length + 1;
for (const q of NEW) {
  q._id = `cbt-${String(nextId).padStart(3, '0')}`;
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} cbt5 questions. Total: ${data.authored.length}`);
