// @ts-nocheck
import React from 'react';
// Onion Design-System SVG Diagrams — 이론 본문 삽화용
// 모두 currentColor와 CSS 변수를 사용해 다크/테마에 자동 대응
// Each diagram: export as a function component, register on window.DIAGRAMS[key]
//
// Common wrapper: DiagramFrame (label + caption + SVG area)

const DiagramFrame = ({title, caption, children, height = 280}) => (
  <figure style={{
    margin: "16px 0 4px",
    background: "var(--bg-card)",
    border: "1px solid var(--border-subtle)",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
  }}>
    {title && (
      <figcaption style={{
        padding: "10px 14px",
        fontSize: 12,
        fontWeight: 700,
        color: "var(--point-600)",
        background: "var(--point-050)",
        borderBottom: "1px solid var(--point-100)",
        letterSpacing: "0.02em",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
        </svg>
        {title}
      </figcaption>
    )}
    <div style={{padding: "18px 20px", background: "var(--bg-card)"}}>
      <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        {children}
      </div>
      {caption && (
        <div style={{marginTop: 10, fontSize: 12.5, color: "var(--fg-3)", lineHeight: 1.6, textAlign:"center"}}>
          {caption}
        </div>
      )}
    </div>
  </figure>
);

// ═══════════════════════════════════════════════════════════════
// 1과목 DIAGRAMS
// ═══════════════════════════════════════════════════════════════

// 3층 스키마 — 외부/개념/내부 + 독립성
const ThreeSchemaDiagram = () => (
  <DiagramFrame title="3층 스키마 아키텍처" caption="외부·개념·내부 스키마로 분리되어 독립성을 보장 — 논리적 독립성(사용자 뷰↔논리 구조)과 물리적 독립성(논리 구조↔저장 구조)">
    <svg viewBox="0 0 560 340" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
      {/* 외부 스키마 — 3개 뷰 */}
      <g>
        <text x="40" y="38" fontSize="12" fontWeight="700" fill="var(--fg-3)" letterSpacing="0.04em">외부 스키마 · External</text>
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(${60 + i*160}, 50)`}>
            <rect width="120" height="54" rx="10" fill="var(--point-050)" stroke="var(--point-500)" strokeWidth="1.5"/>
            <text x="60" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--point-600)">사용자 뷰 {i+1}</text>
            <text x="60" y="40" textAnchor="middle" fontSize="10" fill="var(--fg-3)">
              {["인사 뷰","회계 뷰","영업 뷰"][i]}
            </text>
          </g>
        ))}
      </g>

      {/* 논리적 독립성 화살표 */}
      <g>
        <line x1="280" y1="110" x2="280" y2="150" stroke="var(--fg-4)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <polygon points="276,148 280,156 284,148" fill="var(--fg-4)"/>
        <polygon points="276,112 280,104 284,112" fill="var(--fg-4)"/>
        <text x="300" y="135" fontSize="11" fill="var(--point-600)" fontWeight="600">논리적 독립성</text>
      </g>

      {/* 개념 스키마 */}
      <g>
        <text x="40" y="176" fontSize="12" fontWeight="700" fill="var(--fg-3)" letterSpacing="0.04em">개념 스키마 · Conceptual</text>
        <rect x="40" y="186" width="480" height="58" rx="10" fill="var(--point-100)" stroke="var(--point-600)" strokeWidth="2"/>
        <text x="280" y="210" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--point-600)">전사(全社) 통합 논리 구조</text>
        <text x="280" y="230" textAnchor="middle" fontSize="11" fill="var(--fg-3)">ERD · 엔터티 · 속성 · 관계 · 제약조건</text>
      </g>

      {/* 물리적 독립성 */}
      <g>
        <line x1="280" y1="250" x2="280" y2="290" stroke="var(--fg-4)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <polygon points="276,288 280,296 284,288" fill="var(--fg-4)"/>
        <polygon points="276,252 280,244 284,252" fill="var(--fg-4)"/>
        <text x="300" y="275" fontSize="11" fill="var(--point-600)" fontWeight="600">물리적 독립성</text>
      </g>

      {/* 내부 스키마 */}
      <g>
        <rect x="40" y="296" width="480" height="36" rx="8" fill="var(--bg-muted)" stroke="var(--border-default)" strokeWidth="1.5"/>
        <text x="280" y="319" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--fg-2)">내부 스키마 · Internal  (파일·인덱스·블록 · 저장 구조)</text>
      </g>
    </svg>
  </DiagramFrame>
);

// 모델링 3가지 관점
const ModelingPerspectives = () => (
  <DiagramFrame title="데이터 모델링의 3가지 관점">
    <svg viewBox="0 0 520 220" width="100%" style={{maxWidth: 520}} fontFamily="var(--font-sans)">
      {/* 3 circles */}
      {[
        {x:130, label:"데이터 관점", sub:"What · Data", tint:"var(--point-100)", stroke:"var(--point-600)"},
        {x:260, label:"프로세스 관점", sub:"How · Process", tint:"var(--info-bg)", stroke:"var(--info-fg)"},
        {x:390, label:"상관 관점", sub:"Interaction", tint:"var(--wrong-bg)", stroke:"var(--wrong-fg)"},
      ].map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy="90" r="70" fill={c.tint} stroke={c.stroke} strokeWidth="2" opacity="0.92"/>
          <text x={c.x} y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--fg-1)">{c.label}</text>
          <text x={c.x} y="106" textAnchor="middle" fontSize="10.5" fill="var(--fg-3)">{c.sub}</text>
        </g>
      ))}
      {/* labels below */}
      <text x="130" y="196" textAnchor="middle" fontSize="11" fill="var(--fg-3)">업무가 관리하는 정보</text>
      <text x="260" y="196" textAnchor="middle" fontSize="11" fill="var(--fg-3)">업무가 실제 하는 일</text>
      <text x="390" y="196" textAnchor="middle" fontSize="11" fill="var(--fg-3)">프로세스 ↔ 데이터</text>
    </svg>
  </DiagramFrame>
);

// 엔터티 분류 매트릭스 (유무형 × 발생시점)
const EntityClassification = () => {
  const rows = [
    {k:"유형 엔터티", ex:"사원, 부서"},
    {k:"개념 엔터티", ex:"조직, 상품분류"},
    {k:"사건 엔터티", ex:"주문, 로그"},
  ];
  const rows2 = [
    {k:"기본 엔터티", d:"독립 생성", ex:"사원·부서"},
    {k:"중심 엔터티", d:"기본에서 발생", ex:"주문·계약"},
    {k:"행위 엔터티", d:"2개 이상에서 발생", ex:"주문내역"},
  ];
  return (
    <DiagramFrame title="엔터티 분류 — 유무형 / 발생시점">
      <svg viewBox="0 0 560 260" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        {/* left: 유무형 */}
        <text x="20" y="24" fontSize="12" fontWeight="700" fill="var(--point-600)">유무형 기준</text>
        {rows.map((r, i) => (
          <g key={i} transform={`translate(20, ${40 + i*62})`}>
            <rect width="240" height="52" rx="10" fill="var(--bg-muted)" stroke="var(--border-subtle)"/>
            <circle cx="24" cy="26" r="10" fill="var(--point-100)" stroke="var(--point-600)" strokeWidth="1.5"/>
            <text x="24" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--point-600)">{i+1}</text>
            <text x="46" y="22" fontSize="13" fontWeight="700" fill="var(--fg-1)">{r.k}</text>
            <text x="46" y="40" fontSize="11" fill="var(--fg-3)">예: {r.ex}</text>
          </g>
        ))}
        {/* right: 발생시점 */}
        <text x="300" y="24" fontSize="12" fontWeight="700" fill="var(--point-600)">발생시점 기준</text>
        {rows2.map((r, i) => (
          <g key={i} transform={`translate(300, ${40 + i*62})`}>
            <rect width="240" height="52" rx="10" fill="var(--point-050)" stroke="var(--point-100)"/>
            <circle cx="24" cy="26" r="10" fill="var(--point-600)"/>
            <text x="24" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">{i+1}</text>
            <text x="46" y="22" fontSize="13" fontWeight="700" fill="var(--fg-1)">{r.k}</text>
            <text x="46" y="40" fontSize="10.5" fill="var(--fg-3)">{r.d} · {r.ex}</text>
          </g>
        ))}
      </svg>
    </DiagramFrame>
  );
};

// ERD 표기 범례 (새발, 실선/점선, 필수/선택)
const ERDLegend = () => (
  <DiagramFrame title="ERD 표기법 — IE(새발) 표기 범례" caption="관계 선의 양 끝에 표시하여 차수와 선택성을 함께 나타냄">
    <svg viewBox="0 0 560 260" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
      {/* 4 rows of examples */}
      {[
        {y: 30, label: "필수 1 (One, Mandatory)", render: (y) => (
          <g>
            <line x1="140" y1={y} x2="260" y2={y} stroke="var(--fg-2)" strokeWidth="1.5"/>
            {/* | | two perpendicular marks */}
            <line x1="240" y1={y-10} x2="240" y2={y+10} stroke="var(--point-600)" strokeWidth="2.2"/>
            <line x1="248" y1={y-10} x2="248" y2={y+10} stroke="var(--point-600)" strokeWidth="2.2"/>
          </g>
        )},
        {y: 80, label: "선택 0 또는 1 (Zero or One)", render: (y) => (
          <g>
            <line x1="140" y1={y} x2="260" y2={y} stroke="var(--fg-2)" strokeWidth="1.5"/>
            <circle cx="244" cy={y} r="5" fill="var(--bg-card)" stroke="var(--point-600)" strokeWidth="2"/>
            <line x1="252" y1={y-10} x2="252" y2={y+10} stroke="var(--point-600)" strokeWidth="2.2"/>
          </g>
        )},
        {y: 130, label: "필수 다(多, One or Many)", render: (y) => (
          <g>
            <line x1="140" y1={y} x2="260" y2={y} stroke="var(--fg-2)" strokeWidth="1.5"/>
            <line x1="238" y1={y-10} x2="238" y2={y+10} stroke="var(--point-600)" strokeWidth="2.2"/>
            {/* crow's foot */}
            <path d={`M246 ${y} L258 ${y-10} M246 ${y} L258 ${y} M246 ${y} L258 ${y+10}`} stroke="var(--point-600)" strokeWidth="2" fill="none"/>
          </g>
        )},
        {y: 180, label: "선택 다(多, Zero or Many)", render: (y) => (
          <g>
            <line x1="140" y1={y} x2="260" y2={y} stroke="var(--fg-2)" strokeWidth="1.5"/>
            <circle cx="238" cy={y} r="5" fill="var(--bg-card)" stroke="var(--point-600)" strokeWidth="2"/>
            <path d={`M246 ${y} L258 ${y-10} M246 ${y} L258 ${y} M246 ${y} L258 ${y+10}`} stroke="var(--point-600)" strokeWidth="2" fill="none"/>
          </g>
        )},
      ].map((r, i) => (
        <g key={i}>
          {r.render(r.y)}
          <text x="280" y={r.y + 4} fontSize="13" fill="var(--fg-2)" fontWeight="600">{r.label}</text>
        </g>
      ))}
      {/* 선 종류 */}
      <text x="30" y="236" fontSize="12" fontWeight="700" fill="var(--point-600)">실선</text>
      <line x1="70" y1="232" x2="140" y2="232" stroke="var(--fg-1)" strokeWidth="1.8"/>
      <text x="150" y="236" fontSize="11" fill="var(--fg-3)">식별 관계</text>

      <text x="240" y="236" fontSize="12" fontWeight="700" fill="var(--point-600)">점선</text>
      <line x1="280" y1="232" x2="350" y2="232" stroke="var(--fg-1)" strokeWidth="1.8" strokeDasharray="4 3"/>
      <text x="360" y="236" fontSize="11" fill="var(--fg-3)">비식별 관계</text>
    </svg>
  </DiagramFrame>
);

// 관계 차수 3컷
const RelationshipCardinality = () => {
  const Panel = ({x, title, leftCard, rightCard, subtitle}) => (
    <g transform={`translate(${x}, 30)`}>
      <text x="85" y="-6" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--fg-1)">{title}</text>
      {/* Left entity box */}
      <rect x="0" y="30" width="60" height="48" rx="8" fill="var(--bg-card)" stroke="var(--point-600)" strokeWidth="1.5"/>
      <text x="30" y="58" textAnchor="middle" fontSize="12" fill="var(--fg-2)" fontWeight="600">A</text>
      {/* line */}
      <line x1="60" y1="54" x2="110" y2="54" stroke="var(--fg-2)" strokeWidth="1.5"/>
      {/* Right entity */}
      <rect x="110" y="30" width="60" height="48" rx="8" fill="var(--bg-card)" stroke="var(--point-600)" strokeWidth="1.5"/>
      <text x="140" y="58" textAnchor="middle" fontSize="12" fill="var(--fg-2)" fontWeight="600">B</text>
      {/* cardinality labels */}
      <text x="63" y="46" fontSize="11" fontWeight="700" fill="var(--point-600)">{leftCard}</text>
      <text x="107" y="46" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--point-600)">{rightCard}</text>
      <text x="85" y="106" textAnchor="middle" fontSize="11" fill="var(--fg-3)">{subtitle}</text>
    </g>
  );
  return (
    <DiagramFrame title="관계 차수 (Cardinality)">
      <svg viewBox="0 0 560 150" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        <Panel x="20"  title="1 : 1" leftCard="1" rightCard="1" subtitle="사원 — 사원카드"/>
        <Panel x="200" title="1 : M" leftCard="1" rightCard="M" subtitle="부서 — 사원"/>
        <Panel x="380" title="M : N" leftCard="M" rightCard="N" subtitle="학생 — 과목 (중간 엔터티 필요)"/>
      </svg>
    </DiagramFrame>
  );
};

// 식별자 vs 비식별자 관계
const IdentifyingVsNon = () => (
  <DiagramFrame title="식별자 관계 vs 비식별자 관계" caption="부모 PK가 자식의 PK로 상속되면 식별자(실선), 일반 속성(FK)로 상속되면 비식별자(점선)">
    <svg viewBox="0 0 560 240" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
      {/* 식별자 (실선) */}
      <g>
        <text x="40" y="24" fontSize="13" fontWeight="700" fill="var(--point-600)">식별자 관계 · 실선</text>
        <rect x="40" y="34" width="130" height="72" rx="8" fill="var(--bg-card)" stroke="var(--point-600)" strokeWidth="1.5"/>
        <rect x="40" y="34" width="130" height="22" fill="var(--point-100)" stroke="none"/>
        <rect x="40" y="34" width="130" height="22" rx="8" fill="var(--point-100)" stroke="none"/>
        <text x="50" y="50" fontSize="11" fontWeight="700" fill="var(--point-600)">주문 (부모)</text>
        <text x="50" y="72" fontSize="11" fill="var(--fg-2)" fontWeight="700">PK</text>
        <text x="76" y="72" fontSize="11" fill="var(--fg-2)">order_no</text>
        <text x="50" y="92" fontSize="10.5" fill="var(--fg-3)">order_date</text>

        <line x1="170" y1="70" x2="240" y2="70" stroke="var(--point-600)" strokeWidth="2"/>
        <path d="M230 60 L240 70 L230 80 M230 70 L240 70" stroke="var(--point-600)" strokeWidth="2" fill="none"/>

        <rect x="240" y="34" width="160" height="92" rx="8" fill="var(--bg-card)" stroke="var(--point-600)" strokeWidth="1.5"/>
        <rect x="240" y="34" width="160" height="22" fill="var(--point-100)" stroke="none"/>
        <rect x="240" y="34" width="160" height="22" rx="8" fill="var(--point-100)" stroke="none"/>
        <text x="250" y="50" fontSize="11" fontWeight="700" fill="var(--point-600)">주문상세 (자식)</text>
        <text x="250" y="72" fontSize="11" fill="var(--fg-2)" fontWeight="700">PK,FK</text>
        <text x="290" y="72" fontSize="11" fill="var(--point-600)" fontWeight="600">order_no</text>
        <text x="250" y="90" fontSize="11" fill="var(--fg-2)" fontWeight="700">PK</text>
        <text x="290" y="90" fontSize="11" fill="var(--fg-2)">item_no</text>
        <text x="250" y="110" fontSize="10.5" fill="var(--fg-3)">qty, price</text>
        <text x="415" y="70" fontSize="11" fill="var(--point-600)" fontWeight="600">부모PK가</text>
        <text x="415" y="84" fontSize="11" fill="var(--point-600)" fontWeight="600">자식PK 구성</text>
      </g>

      {/* 비식별자 (점선) */}
      <g transform="translate(0, 120)">
        <text x="40" y="24" fontSize="13" fontWeight="700" fill="var(--fg-3)">비식별자 관계 · 점선</text>
        <rect x="40" y="34" width="130" height="72" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="5 3"/>
        <rect x="40" y="34" width="130" height="22" fill="var(--bg-muted)" stroke="none"/>
        <rect x="40" y="34" width="130" height="22" rx="8" fill="var(--bg-muted)" stroke="none"/>
        <text x="50" y="50" fontSize="11" fontWeight="700" fill="var(--fg-2)">부서 (부모)</text>
        <text x="50" y="72" fontSize="11" fill="var(--fg-2)" fontWeight="700">PK</text>
        <text x="76" y="72" fontSize="11" fill="var(--fg-2)">dept_id</text>
        <text x="50" y="92" fontSize="10.5" fill="var(--fg-3)">dept_name</text>

        <line x1="170" y1="70" x2="240" y2="70" stroke="var(--fg-4)" strokeWidth="1.8" strokeDasharray="5 3"/>
        <path d="M230 60 L240 70 L230 80 M230 70 L240 70" stroke="var(--fg-4)" strokeWidth="1.8" fill="none"/>

        <rect x="240" y="34" width="160" height="92" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="5 3"/>
        <rect x="240" y="34" width="160" height="22" fill="var(--bg-muted)" stroke="none"/>
        <rect x="240" y="34" width="160" height="22" rx="8" fill="var(--bg-muted)" stroke="none"/>
        <text x="250" y="50" fontSize="11" fontWeight="700" fill="var(--fg-2)">사원 (자식)</text>
        <text x="250" y="72" fontSize="11" fill="var(--fg-2)" fontWeight="700">PK</text>
        <text x="290" y="72" fontSize="11" fill="var(--fg-2)">emp_id</text>
        <text x="250" y="90" fontSize="11" fill="var(--fg-2)" fontWeight="700">FK</text>
        <text x="290" y="90" fontSize="11" fill="var(--fg-3)">dept_id (일반속성)</text>
        <text x="250" y="110" fontSize="10.5" fill="var(--fg-3)">name, salary</text>
        <text x="415" y="70" fontSize="11" fill="var(--fg-3)" fontWeight="600">부모PK가</text>
        <text x="415" y="84" fontSize="11" fill="var(--fg-3)" fontWeight="600">일반 FK로 상속</text>
      </g>
    </svg>
  </DiagramFrame>
);

// 정규화 계단
const NormalizationSteps = () => {
  const steps = [
    {nf: "1NF", req: "원자값", rm: "반복·다중값"},
    {nf: "2NF", req: "완전 함수 종속", rm: "부분 종속"},
    {nf: "3NF", req: "이행 종속 없음", rm: "이행 종속"},
    {nf: "BCNF", req: "모든 결정자가 후보키", rm: "결정자≠후보키"},
  ];
  return (
    <DiagramFrame title="정규화 단계" caption="각 단계마다 제거되는 종속성이 다름 — 실무/시험은 BCNF까지">
      <svg viewBox="0 0 560 220" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        {steps.map((s, i) => {
          const x = 20 + i * 135;
          const h = 50 + i * 28;
          const y = 180 - h;
          return (
            <g key={i}>
              <rect x={x} y={y} width="120" height={h} rx="8"
                fill={i===3 ? "var(--point-600)" : `var(--point-${[100,100,500,500][i]})`}
                stroke="var(--point-600)" strokeWidth="1.5"/>
              <text x={x+60} y={y+22} textAnchor="middle" fontSize="15" fontWeight="800"
                fill={i>=2 ? "#fff" : "var(--point-600)"}>{s.nf}</text>
              <text x={x+60} y={y+40} textAnchor="middle" fontSize="10"
                fill={i>=2 ? "#fff" : "var(--fg-2)"}>{s.req}</text>
              <text x={x+60} y={200} textAnchor="middle" fontSize="10.5" fill="var(--wrong-fg)" fontWeight="600">
                ✕ {s.rm}
              </text>
              {/* arrow */}
              {i < 3 && (
                <path d={`M${x+120} ${y+h/2} L${x+135} ${y+h/2}`} stroke="var(--fg-4)" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--fg-4)"/>
          </marker>
        </defs>
      </svg>
    </DiagramFrame>
  );
};

// ═══════════════════════════════════════════════════════════════
// 2과목 DIAGRAMS
// ═══════════════════════════════════════════════════════════════

// SELECT 실행 순서 vs 작성 순서
const SelectExecutionOrder = () => {
  const rows = [
    {write: "SELECT",   exec: 5, real: "SELECT (투영)"},
    {write: "FROM",     exec: 1, real: "FROM (소스)"},
    {write: "WHERE",    exec: 2, real: "WHERE (행 필터)"},
    {write: "GROUP BY", exec: 3, real: "GROUP BY (그룹)"},
    {write: "HAVING",   exec: 4, real: "HAVING (그룹 필터)"},
    {write: "ORDER BY", exec: 6, real: "ORDER BY (정렬)"},
  ];
  return (
    <DiagramFrame title="SELECT 작성 순서 vs 실행 순서" caption="SELECT는 5번째로 실행되므로 WHERE·GROUP BY에서 SELECT의 별칭 사용 불가">
      <svg viewBox="0 0 560 280" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        <text x="90" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--fg-3)">작성 순서</text>
        <text x="390" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--point-600)">실행 순서</text>
        {rows.map((r, i) => {
          const y = 40 + i*38;
          const targetY = 40 + (r.exec-1)*38;
          return (
            <g key={i}>
              {/* Left side */}
              <rect x="20" y={y} width="140" height="28" rx="6" fill="var(--bg-muted)" stroke="var(--border-default)"/>
              <text x="32" y={y+18} fontSize="10" fontFamily="var(--font-mono)" fill="var(--fg-3)">{i+1}.</text>
              <text x="52" y={y+18} fontSize="12" fontFamily="var(--font-mono)" fill="var(--fg-2)" fontWeight="600">{r.write}</text>
              {/* Curve */}
              <path d={`M160 ${y+14} C 240 ${y+14}, 280 ${targetY+14}, 320 ${targetY+14}`}
                stroke={r.exec===5 || r.exec===6 ? "var(--wrong-fg)" : "var(--point-500)"}
                strokeWidth="1.5" fill="none" opacity="0.7"/>
              {/* Right side */}
              <rect x="320" y={targetY} width="220" height="28" rx="6"
                fill={r.exec<=3 ? "var(--point-100)" : r.exec===4 ? "var(--info-bg)" : "var(--point-050)"}
                stroke="var(--point-600)" strokeWidth="1"/>
              <text x="332" y={targetY+18} fontSize="11" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--point-600)">{r.exec}.</text>
              <text x="358" y={targetY+18} fontSize="12" fontFamily="var(--font-mono)" fill="var(--fg-1)" fontWeight="600">{r.real}</text>
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
};

// JOIN 벤다이어그램 5컷
const JoinVenn = () => {
  const Panel = ({x, y, title, fillLeft, fillRight, fillBoth, desc}) => (
    <g transform={`translate(${x}, ${y})`}>
      <text x="70" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--fg-1)">{title}</text>
      <circle cx="50" cy="60" r="34" fill={fillLeft} stroke="var(--border-default)" strokeWidth="1.5" opacity="0.95"/>
      <circle cx="90" cy="60" r="34" fill={fillRight} stroke="var(--border-default)" strokeWidth="1.5" opacity="0.95"/>
      {/* intersection via clipPath */}
      {fillBoth && (
        <g>
          <defs>
            <clipPath id={`cp-${title}`}>
              <circle cx="50" cy="60" r="34"/>
            </clipPath>
          </defs>
          <circle cx="90" cy="60" r="34" fill={fillBoth} clipPath={`url(#cp-${title})`}/>
        </g>
      )}
      <text x="50" y="64" textAnchor="middle" fontSize="10" fill="var(--fg-3)">A</text>
      <text x="90" y="64" textAnchor="middle" fontSize="10" fill="var(--fg-3)">B</text>
      <text x="70" y="110" textAnchor="middle" fontSize="10.5" fill="var(--fg-3)">{desc}</text>
    </g>
  );
  return (
    <DiagramFrame title="JOIN 종류 — 벤다이어그램" caption="INNER는 교집합, OUTER는 해당 쪽 전체를 포함, CROSS는 카티션 곱">
      <svg viewBox="0 0 560 260" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        <Panel x="10"  y="20" title="INNER JOIN"       fillLeft="var(--bg-muted)" fillRight="var(--bg-muted)" fillBoth="var(--point-600)" desc="A ∩ B"/>
        <Panel x="150" y="20" title="LEFT OUTER JOIN"  fillLeft="var(--point-600)" fillRight="var(--bg-muted)" fillBoth="var(--point-600)" desc="A 전체 + B 매칭"/>
        <Panel x="290" y="20" title="RIGHT OUTER JOIN" fillLeft="var(--bg-muted)" fillRight="var(--point-600)" fillBoth="var(--point-600)" desc="B 전체 + A 매칭"/>
        <Panel x="430" y="20" title="FULL OUTER JOIN"  fillLeft="var(--point-600)" fillRight="var(--point-600)" fillBoth="var(--point-600)" desc="A ∪ B"/>

        {/* CROSS JOIN — grid */}
        <g transform="translate(180, 165)">
          <text x="100" y="0" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--fg-1)">CROSS JOIN — 카티션 곱 (m × n)</text>
          {[0,1,2].map(r => (
            [0,1,2,3].map(c => (
              <rect key={`${r}-${c}`} x={30 + c*35} y={12 + r*22} width="30" height="18" rx="3"
                fill="var(--point-100)" stroke="var(--point-600)" strokeWidth="1"/>
            ))
          ))}
          <text x="100" y="90" textAnchor="middle" fontSize="10.5" fill="var(--fg-3)">모든 조합 반환 · 조건 없음</text>
        </g>
      </svg>
    </DiagramFrame>
  );
};

// ROLLUP vs CUBE 조합 트리
const RollupVsCube = () => (
  <DiagramFrame title="ROLLUP vs CUBE — 그룹 조합" caption="ROLLUP(A,B)은 계층적 소계, CUBE(A,B)는 모든 조합의 소계를 만든다">
    <svg viewBox="0 0 560 240" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
      {/* ROLLUP */}
      <g>
        <text x="130" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--point-600)">ROLLUP(A, B)</text>
        {/* nodes */}
        {[
          {x:130, y:50, label:"(A, B)", highlight:true},
          {x:130, y:110, label:"(A)", highlight:true},
          {x:130, y:170, label:"()", highlight:true},
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x-50} y={n.y-18} width="100" height="36" rx="8"
              fill={n.highlight ? "var(--point-100)" : "var(--bg-muted)"}
              stroke="var(--point-600)" strokeWidth="1.5"/>
            <text x={n.x} y={n.y+5} textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--point-600)">{n.label}</text>
          </g>
        ))}
        <line x1="130" y1="68" x2="130" y2="92" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <line x1="130" y1="128" x2="130" y2="152" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <text x="130" y="210" textAnchor="middle" fontSize="11" fill="var(--fg-3)">3종 소계 (계층적)</text>
      </g>

      {/* CUBE */}
      <g transform="translate(280, 0)">
        <text x="140" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--point-600)">CUBE(A, B)</text>
        {[
          {x:140, y:50, label:"(A, B)"},
          {x:70,  y:110, label:"(A)"},
          {x:210, y:110, label:"(B)"},
          {x:140, y:170, label:"()"},
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x-50} y={n.y-18} width="100" height="36" rx="8"
              fill="var(--point-100)" stroke="var(--point-600)" strokeWidth="1.5"/>
            <text x={n.x} y={n.y+5} textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--point-600)">{n.label}</text>
          </g>
        ))}
        <line x1="125" y1="66" x2="80" y2="92" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <line x1="115" y1="66" x2="75" y2="92" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <line x1="165" y1="66" x2="205" y2="92" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <line x1="85" y1="128" x2="130" y2="152" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <line x1="195" y1="128" x2="150" y2="152" stroke="var(--fg-4)" strokeWidth="1.5"/>
        <text x="140" y="210" textAnchor="middle" fontSize="11" fill="var(--fg-3)">4종 소계 (모든 조합)</text>
      </g>
    </svg>
  </DiagramFrame>
);

// 서브쿼리 위치 맵
const SubqueryPositions = () => (
  <DiagramFrame title="서브쿼리 — 위치별 분류" caption="어느 절에 쓰이느냐에 따라 이름과 제약이 달라짐">
    <svg viewBox="0 0 560 240" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
      {/* main query box */}
      <rect x="30" y="30" width="500" height="180" rx="12" fill="var(--bg-code)" stroke="var(--border-default)" strokeWidth="1.5"/>
      <text x="46" y="52" fontSize="12" fontFamily="var(--font-mono)" fill="var(--fg-3)">SELECT</text>
      {/* scalar subquery highlight */}
      <rect x="108" y="38" width="150" height="22" rx="4" fill="var(--point-100)" stroke="var(--point-600)" strokeWidth="1.5"/>
      <text x="118" y="53" fontSize="11" fontFamily="var(--font-mono)" fill="var(--point-600)" fontWeight="700">( 스칼라 서브쿼리 )</text>
      <text x="280" y="52" fontSize="11" fontFamily="var(--font-mono)" fill="var(--fg-3)">, emp_name</text>

      <text x="46" y="92" fontSize="12" fontFamily="var(--font-mono)" fill="var(--fg-3)">FROM</text>
      <rect x="100" y="78" width="150" height="22" rx="4" fill="var(--info-bg)" stroke="var(--info-fg)" strokeWidth="1.5"/>
      <text x="110" y="93" fontSize="11" fontFamily="var(--font-mono)" fill="var(--info-fg)" fontWeight="700">( 인라인 뷰 ) t</text>
      <text x="270" y="92" fontSize="11" fontFamily="var(--font-mono)" fill="var(--fg-3)"></text>

      <text x="46" y="132" fontSize="12" fontFamily="var(--font-mono)" fill="var(--fg-3)">WHERE</text>
      <text x="108" y="132" fontSize="11" fontFamily="var(--font-mono)" fill="var(--fg-3)">salary &gt;</text>
      <rect x="170" y="118" width="200" height="22" rx="4" fill="var(--wrong-bg)" stroke="var(--wrong-fg)" strokeWidth="1.5"/>
      <text x="180" y="133" fontSize="11" fontFamily="var(--font-mono)" fill="var(--wrong-fg)" fontWeight="700">( 단일/다중 행 서브쿼리 )</text>

      {/* legend */}
      <g transform="translate(46, 170)">
        <circle cx="4" cy="4" r="5" fill="var(--point-600)"/>
        <text x="16" y="8" fontSize="11" fill="var(--fg-2)"><tspan fontWeight="700">스칼라</tspan> · 단일행·단일컬럼</text>
        <circle cx="4" cy="24" r="5" fill="var(--info-fg)"/>
        <text x="16" y="28" fontSize="11" fill="var(--fg-2)"><tspan fontWeight="700">인라인 뷰</tspan> · 테이블처럼</text>
        <circle cx="280" cy="4" r="5" fill="var(--wrong-fg)"/>
        <text x="292" y="8" fontSize="11" fill="var(--fg-2)"><tspan fontWeight="700">WHERE 서브쿼리</tspan> · IN/ANY/ALL/EXISTS</text>
      </g>
    </svg>
  </DiagramFrame>
);

// 집합 연산자 벤다이어그램
const SetOperators = () => {
  const Panel = ({x, title, leftFill, rightFill, bothFill, desc}) => (
    <g transform={`translate(${x}, 20)`}>
      <text x="70" y="14" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--fg-1)">{title}</text>
      <circle cx="50" cy="70" r="36" fill={leftFill} stroke="var(--border-default)" strokeWidth="1.5" opacity="0.95"/>
      <circle cx="90" cy="70" r="36" fill={rightFill} stroke="var(--border-default)" strokeWidth="1.5" opacity="0.95"/>
      {bothFill && (
        <g>
          <defs>
            <clipPath id={`sp-${title}`}>
              <circle cx="50" cy="70" r="36"/>
            </clipPath>
          </defs>
          <circle cx="90" cy="70" r="36" fill={bothFill} clipPath={`url(#sp-${title})`}/>
        </g>
      )}
      <text x="70" y="128" textAnchor="middle" fontSize="10.5" fill="var(--fg-3)">{desc}</text>
    </g>
  );
  return (
    <DiagramFrame title="집합 연산자" caption="UNION은 중복 제거(내부 정렬 발생), UNION ALL은 중복 유지(빠름)">
      <svg viewBox="0 0 560 170" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        <Panel x="0"   title="UNION / ALL" leftFill="var(--point-600)" rightFill="var(--point-600)" bothFill="var(--point-600)" desc="A ∪ B (합집합)"/>
        <Panel x="140" title="INTERSECT"   leftFill="var(--bg-muted)" rightFill="var(--bg-muted)" bothFill="var(--point-600)" desc="A ∩ B (교집합)"/>
        <Panel x="280" title="MINUS / EXCEPT" leftFill="var(--point-600)" rightFill="var(--bg-muted)" bothFill="var(--bg-muted)" desc="A − B (차집합)"/>
        <Panel x="420" title="역(MINUS)"    leftFill="var(--bg-muted)" rightFill="var(--point-600)" bothFill="var(--bg-muted)" desc="B − A"/>
      </svg>
    </DiagramFrame>
  );
};

// 계층형 질의 — 조직도 + PRIOR 화살표
const HierarchyTree = () => (
  <DiagramFrame title="계층형 질의 — CONNECT BY" caption="START WITH로 루트 지정, CONNECT BY PRIOR로 부모→자식 관계 정의">
    <svg viewBox="0 0 560 260" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
      {/* tree */}
      {[
        {x: 260, y: 30,  lvl: 1, name: "CEO",  id: 1},
        {x: 140, y: 110, lvl: 2, name: "영업본부", id: 2, parent: 1},
        {x: 380, y: 110, lvl: 2, name: "개발본부", id: 3, parent: 1},
        {x: 60,  y: 190, lvl: 3, name: "국내영업", id: 4, parent: 2},
        {x: 220, y: 190, lvl: 3, name: "해외영업", id: 5, parent: 2},
        {x: 340, y: 190, lvl: 3, name: "프론트팀", id: 6, parent: 3},
        {x: 460, y: 190, lvl: 3, name: "백엔드팀", id: 7, parent: 3},
      ].map((n, i, all) => (
        <g key={i}>
          {n.parent && (() => {
            const p = all.find(a => a.id === n.parent);
            return <line x1={p.x} y1={p.y + 20} x2={n.x} y2={n.y - 20} stroke="var(--fg-4)" strokeWidth="1.5"/>;
          })()}
          <rect x={n.x - 48} y={n.y - 20} width="96" height="40" rx="10"
            fill={n.lvl === 1 ? "var(--point-600)" : n.lvl === 2 ? "var(--point-100)" : "var(--bg-card)"}
            stroke="var(--point-600)" strokeWidth="1.5"/>
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="12" fontWeight="700"
            fill={n.lvl === 1 ? "#fff" : "var(--fg-1)"}>{n.name}</text>
          <text x={n.x - 40} y={n.y - 6} fontSize="9" fontFamily="var(--font-mono)" fill={n.lvl === 1 ? "rgba(255,255,255,0.7)" : "var(--fg-3)"}>LV{n.lvl}</text>
        </g>
      ))}
      {/* Direction hint */}
      <g transform="translate(30, 234)">
        <text x="0" y="0" fontSize="11" fontWeight="700" fill="var(--point-600)">PRIOR 사원번호 = 상사번호</text>
        <text x="0" y="16" fontSize="10.5" fill="var(--fg-3)">→ 상사에서 부하로 (Top-Down)</text>
      </g>
      <g transform="translate(320, 234)">
        <text x="0" y="0" fontSize="11" fontWeight="700" fill="var(--wrong-fg)">PRIOR 상사번호 = 사원번호</text>
        <text x="0" y="16" fontSize="10.5" fill="var(--fg-3)">→ 부하에서 상사로 (Bottom-Up)</text>
      </g>
    </svg>
  </DiagramFrame>
);

// RANK vs DENSE_RANK vs ROW_NUMBER
const RankCompare = () => {
  const data = [
    {name: "A", salary: 100, r: 1, dr: 1, rn: 1},
    {name: "B", salary: 90,  r: 2, dr: 2, rn: 2},
    {name: "C", salary: 90,  r: 2, dr: 2, rn: 3},
    {name: "D", salary: 80,  r: 4, dr: 3, rn: 4},
    {name: "E", salary: 70,  r: 5, dr: 4, rn: 5},
  ];
  return (
    <DiagramFrame title="순위 함수 비교 — RANK / DENSE_RANK / ROW_NUMBER" caption="동률(90)이 있을 때 각 함수가 다음 순위를 어떻게 매기는지 비교">
      <svg viewBox="0 0 560 260" width="100%" style={{maxWidth: 560}} fontFamily="var(--font-sans)">
        {/* headers */}
        {["사원", "급여", "RANK", "DENSE_RANK", "ROW_NUMBER"].map((h, i) => {
          const x = 40 + i * 100;
          return (
            <g key={h}>
              <rect x={x} y="20" width="90" height="32" rx="6" fill="var(--point-100)" stroke="var(--point-600)" strokeWidth="1"/>
              <text x={x + 45} y="40" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--point-600)">{h}</text>
            </g>
          );
        })}
        {/* rows */}
        {data.map((row, i) => {
          const y = 60 + i * 36;
          const tied = row.salary === 90;
          return (
            <g key={i}>
              <rect x="40" y={y} width="90" height="30" rx="4" fill="var(--bg-muted)" stroke="var(--border-subtle)"/>
              <text x="85" y={y + 20} textAnchor="middle" fontSize="12" fill="var(--fg-2)" fontWeight="600">{row.name}</text>
              <rect x="140" y={y} width="90" height="30" rx="4" fill={tied ? "var(--info-bg)" : "var(--bg-card)"} stroke="var(--border-subtle)"/>
              <text x="185" y={y + 20} textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill="var(--fg-2)">{row.salary}</text>
              <rect x="240" y={y} width="90" height="30" rx="4" fill="var(--bg-card)" stroke="var(--border-subtle)"/>
              <text x="285" y={y + 20} textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--fg-1)">{row.r}</text>
              <rect x="340" y={y} width="90" height="30" rx="4" fill="var(--bg-card)" stroke="var(--border-subtle)"/>
              <text x="385" y={y + 20} textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--fg-1)">{row.dr}</text>
              <rect x="440" y={y} width="90" height="30" rx="4" fill="var(--bg-card)" stroke="var(--border-subtle)"/>
              <text x="485" y={y + 20} textAnchor="middle" fontSize="13" fontFamily="var(--font-mono)" fontWeight="700" fill="var(--fg-1)">{row.rn}</text>
            </g>
          );
        })}
        {/* note on tie */}
        <text x="140" y="254" fontSize="10.5" fill="var(--info-fg)">↑ 동률(B=C=90). RANK는 다음을 4로 건너뜀, DENSE_RANK는 3으로 연속, ROW_NUMBER는 항상 유일.</text>
      </svg>
    </DiagramFrame>
  );
};

// Registry — keys used in theory-s1/s2 `diagram` field
export const DIAGRAMS: any = {
  // 1과목
  threeSchema: ThreeSchemaDiagram,
  perspectives: ModelingPerspectives,
  entityClassification: EntityClassification,
  erdLegend: ERDLegend,
  cardinality: RelationshipCardinality,
  identifyingVsNon: IdentifyingVsNon,
  normalization: NormalizationSteps,
  // 2과목
  selectOrder: SelectExecutionOrder,
  joinVenn: JoinVenn,
  rollupCube: RollupVsCube,
  subqueryPositions: SubqueryPositions,
  setOperators: SetOperators,
  hierarchyTree: HierarchyTree,
  rankCompare: RankCompare,
};
