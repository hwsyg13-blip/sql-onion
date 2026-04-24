// Shared atoms: buttons, tags, icons, blocks, mascot
// @ts-nocheck
import React from 'react';

export const Btn = ({variant = "primary", size = "md", children, onClick, disabled, icon, iconRight, style, title}: any) => {
  const sizes = {
    sm: {height: 34, padding: "0 14px", fontSize: 13, borderRadius: 10},
    md: {height: 42, padding: "0 18px", fontSize: 14},
    lg: {height: 52, padding: "0 26px", fontSize: 16},
  };
  const variants = {
    primary: {background: "var(--point-600)", color: "#fff", border: "1px solid var(--point-600)"},
    outline: {background: "var(--bg-card)", color: "var(--point-600)", border: "1.5px solid var(--point-600)"},
    ghost:   {background: "var(--bg-muted)", color: "var(--fg-2)", border: "1px solid var(--border-default)"},
    soft:    {background: "var(--point-100)", color: "var(--point-600)", border: "1px solid transparent"},
    text:    {background: "transparent", color: "var(--fg-3)", border: "1px solid transparent"},
    danger:  {background: "var(--wrong-bg)", color: "var(--wrong-fg)", border: "1px solid var(--wrong-border)"},
  };
  const ds = disabled ? {background: "var(--bg-muted)", color: "var(--fg-4)", border: "1px solid var(--border-default)", cursor: "not-allowed"} : {};
  return (
    <button onClick={onClick} disabled={disabled} title={title} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
      fontFamily: "inherit", fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 150ms var(--ease-standard), border-color 150ms, transform 60ms",
      borderRadius: 12, lineHeight: 1, whiteSpace: "nowrap",
      ...sizes[size], ...variants[variant], ...ds, ...style,
    }}>
      {icon}{children}{iconRight}
    </button>
  );
};

export const Tag = ({children, tone = "neutral", size = "md"}: any) => {
  const tones = {
    green:   {bg: "var(--point-100)", fg: "var(--correct-fg)"},
    blue:    {bg: "var(--info-bg)",   fg: "var(--info-fg)"},
    peach:   {bg: "var(--wrong-bg)",  fg: "var(--wrong-fg)"},
    neutral: {bg: "var(--bg-muted)",  fg: "var(--fg-3)"},
    solid:   {bg: "var(--point-600)", fg: "#fff"},
    outline: {bg: "var(--bg-card)", fg: "var(--fg-2)", border: "1px solid var(--border-default)"},
  };
  const t = tones[tone];
  const sizes = { sm: {h: 20, px: 8, fs: 11}, md: {h: 24, px: 10, fs: 12} };
  const s = sizes[size];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", height: s.h, padding: `0 ${s.px}px`,
      background: t.bg, color: t.fg, borderRadius: 999, fontSize: s.fs, fontWeight: 600,
      border: t.border || "none", whiteSpace: "nowrap",
    }}>{children}</span>
  );
};

// SQL code block with syntax highlighting
const KEYWORDS = /\b(SELECT|FROM|WHERE|GROUP BY|HAVING|ORDER BY|JOIN|INNER|LEFT|RIGHT|OUTER|ON|AS|AND|OR|NOT|IN|BETWEEN|LIKE|IS|NULL|UNION|ALL|INTERSECT|MINUS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|CASE|WHEN|THEN|ELSE|END|CREATE|TABLE|PRIMARY KEY|FOREIGN KEY|REFERENCES|NUMBER|VARCHAR2|DEFAULT|CONNECT BY|PRIOR|START WITH|OVER|PARTITION BY|RANK|DENSE_RANK|ROW_NUMBER|ROLLUP|CUBE|GROUPING SETS|NVL|TRUNCATE|DROP|DELETE|INSERT|UPDATE|GRANT|REVOKE|COMMIT|ROLLBACK|DESC|ASC|NULLS FIRST|NULLS LAST)\b/gi;
export const highlightSQL = (code: any) => {
  if (!code) return null;
  const lines = code.split("\n");
  return lines.map((line, li) => {
    // Comment
    if (/^\s*--/.test(line)) {
      return <div key={li} style={{color: "var(--fg-3)", fontStyle: "italic"}}>{line}</div>;
    }
    // Tokenize: split on keywords and numbers and strings
    const parts = [];
    let remaining = line;
    let inlineComment = null;
    const cIdx = remaining.indexOf("--");
    if (cIdx >= 0) { inlineComment = remaining.slice(cIdx); remaining = remaining.slice(0, cIdx); }
    const regex = /('[^']*')|(\b\d+\b)|(\b(?:SELECT|FROM|WHERE|GROUP BY|HAVING|ORDER BY|JOIN|INNER|LEFT|RIGHT|OUTER|ON|AS|AND|OR|NOT|IN|BETWEEN|LIKE|IS|NULL|UNION|ALL|INTERSECT|MINUS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|CASE|WHEN|THEN|ELSE|END|CREATE|TABLE|PRIMARY KEY|FOREIGN KEY|REFERENCES|NUMBER|VARCHAR2|DEFAULT|CONNECT BY|PRIOR|START WITH|OVER|PARTITION BY|RANK|DENSE_RANK|ROW_NUMBER|ROLLUP|CUBE|GROUPING SETS|NVL|TRUNCATE|DROP|DELETE|INSERT|UPDATE|GRANT|REVOKE|COMMIT|ROLLBACK|DESC|ASC|NULLS FIRST|NULLS LAST)\b)/gi;
    let last = 0, m, key = 0;
    while ((m = regex.exec(remaining)) !== null) {
      if (m.index > last) parts.push(<span key={key++}>{remaining.slice(last, m.index)}</span>);
      if (m[1]) parts.push(<span key={key++} style={{color: "var(--wrong-fg)"}}>{m[1]}</span>);
      else if (m[2]) parts.push(<span key={key++} style={{color: "var(--info-fg)"}}>{m[2]}</span>);
      else if (m[3]) parts.push(<span key={key++} style={{color: "var(--point-600)", fontWeight: 600}}>{m[3]}</span>);
      last = m.index + m[0].length;
    }
    if (last < remaining.length) parts.push(<span key={key++}>{remaining.slice(last)}</span>);
    if (inlineComment) parts.push(<span key={key++} style={{color: "var(--fg-3)", fontStyle: "italic"}}>{inlineComment}</span>);
    return <div key={li}>{parts.length ? parts : "\u00A0"}</div>;
  });
};

export const CodeBlock = ({children, style}: any) => (
  <pre style={{
    fontFamily: "var(--font-mono)", fontSize: 13.5, lineHeight: 1.7,
    background: "var(--bg-code)", color: "var(--fg-1)",
    padding: "14px 18px", borderRadius: 12, border: "1px solid var(--border-subtle)",
    overflowX: "auto", margin: "12px 0", whiteSpace: "pre", tabSize: 2,
    ...style,
  }}>{typeof children === "string" ? highlightSQL(children) : children}</pre>
);

// Lucide-inspired line icons, stroke 1.5
export const Ic: any = {
  Check:    (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>,
  X:        (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Clock:    (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  Book:     (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Bookmark: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  BookmarkFill: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  ArrowRight: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  ArrowLeft:  (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 5l-7 7 7 7"/></svg>,
  ChevronDown:  (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  ChevronRight: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>,
  Refresh:  (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9"/><path d="M3 3v6h6"/></svg>,
  Shuffle:  (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 6h-4.9c-1.9 0-3.7 1-4.6 2.6L7.6 15.4A5.3 5.3 0 0 1 3 18H2"/><path d="m18 14 4 4-4 4"/><path d="M22 18h-4.9c-1.1 0-2.1-.4-2.9-1"/></svg>,
  Flame:    (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.5-.5-3-2-4 .4 2-3 4-3 6.5A5 5 0 0 0 11 19.5a5 5 0 0 0 5-4.8 5 5 0 0 0-2-5C15 14 13 15 11.5 15a2.5 2.5 0 0 1-3-.5Z"/></svg>,
  Calendar: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  ListChecks: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>,
  Menu:     (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  Sun:      (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>,
  Moon:     (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>,
  Send:     (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7Z"/></svg>,
  Play:     (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M6 4v16l14-8Z"/></svg>,
  Sparkles: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/><path d="M19 17v4M17 19h4"/></svg>,
  User:     (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>,
  Target:   (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>,
  Lightbulb:(p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2Z"/></svg>,
  Save:     (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>,
  LogOut:   (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>,
};

// Mini mascot SVG — 2 sizes + variants
export const Mascot = ({size = 96, variant = "smile"}: any) => {
  const eye = variant === "wink"
    ? <g><path d="M82 152 Q 90 144, 98 152" stroke="#1F2320" strokeWidth="3.2" strokeLinecap="round" fill="none"/><path d="M120 152 L 140 152" stroke="#1F2320" strokeWidth="3.5" strokeLinecap="round"/></g>
    : <g><path d="M82 152 Q 90 144, 98 152" stroke="#1F2320" strokeWidth="3.2" strokeLinecap="round" fill="none"/><path d="M122 152 Q 130 144, 138 152" stroke="#1F2320" strokeWidth="3.2" strokeLinecap="round" fill="none"/></g>;
  const mouth = variant === "surprise"
    ? <ellipse cx="110" cy="184" rx="6" ry="8" fill="#1F2320"/>
    : variant === "sad"
    ? <path d="M102 186 Q 110 180, 118 186" stroke="#1F2320" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
    : <path d="M102 180 Q 110 188, 118 180" stroke="#1F2320" strokeWidth="2.8" strokeLinecap="round" fill="none"/>;
  return (
    <svg width={size} height={size * 260/220} viewBox="0 0 220 260" style={{display:"block",flexShrink:0}}>
      <ellipse cx="110" cy="245" rx="62" ry="6" fill="#1F2320" opacity="0.10"/>
      <g strokeLinecap="round" fill="none">
        <path d="M110 70 C 80 42, 54 22, 42 6" stroke="#2E7D32" strokeWidth="9"/>
        <path d="M110 70 C 140 42, 166 22, 178 6" stroke="#2E7D32" strokeWidth="9"/>
        <path d="M110 68 C 110 40, 110 18, 108 0" stroke="#4CAF50" strokeWidth="10"/>
      </g>
      <path d="M110 238 C 55 238, 35 195, 35 148 C 35 105, 60 70, 110 70 C 160 70, 185 105, 185 148 C 185 195, 165 238, 110 238 Z" fill="#FBFAF4" stroke="#C9B78E" strokeWidth="3"/>
      <path d="M60 92 C 48 140, 55 200, 82 236" stroke="#D9C9A2" strokeWidth="2" fill="none" opacity="0.85"/>
      <path d="M160 92 C 172 140, 165 200, 138 236" stroke="#D9C9A2" strokeWidth="2" fill="none" opacity="0.85"/>
      <path d="M110 70 L 110 238" stroke="#E8DBB8" strokeWidth="1.2" fill="none" opacity="0.55"/>
      <ellipse cx="78" cy="125" rx="14" ry="26" fill="#FFFFFF" opacity="0.6"/>
      <ellipse cx="76" cy="172" rx="10" ry="5.5" fill="#F4B4A8" opacity="0.7"/>
      <ellipse cx="144" cy="172" rx="10" ry="5.5" fill="#F4B4A8" opacity="0.7"/>
      {eye}
      {mouth}
    </svg>
  );
};

// Mascot with speech bubble (for guide moments)
export const MascotGuide = ({size = 80, variant = "smile", children, side = "right"}: any) => (
  <div style={{
    display: "flex", alignItems: "flex-end", gap: 12,
    flexDirection: side === "right" ? "row" : "row-reverse",
  }}>
    <Mascot size={size} variant={variant}/>
    <div style={{
      position: "relative", background: "var(--bg-card)",
      border: "1px solid var(--border-subtle)", borderRadius: 14,
      padding: "12px 16px", fontSize: 13.5, color: "var(--fg-2)",
      lineHeight: 1.55, maxWidth: 340, boxShadow: "var(--shadow-sm)",
      marginBottom: 12,
    }}>
      {children}
      <span style={{
        position: "absolute", bottom: 16, [side === "right" ? "left" : "right"]: -6,
        width: 10, height: 10, background: "var(--bg-card)",
        borderLeft: side === "right" ? "1px solid var(--border-subtle)" : "none",
        borderBottom: side === "right" ? "1px solid var(--border-subtle)" : "none",
        borderRight: side === "left" ? "1px solid var(--border-subtle)" : "none",
        borderTop: side === "left" ? "1px solid var(--border-subtle)" : "none",
        transform: "rotate(45deg)",
      }}/>
    </div>
  </div>
);

// Onion mark — for smaller logo accent
export const OnionMark = ({size = 24}: any) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{flexShrink: 0}}>
    <path d="M20 35c-7.5 0-13-5.5-13-12.5C7 15.5 12.5 10 20 10s13 5.5 13 12.5C33 29.5 27.5 35 20 35Z" fill="#EBF5EC" stroke="#2E7D32" strokeWidth="2"/>
    <path d="M11 22c2 5 5 8 9 8M29 22c-2 5-5 8-9 8" stroke="#4CAF50" strokeWidth="1.25" strokeLinecap="round" fill="none"/>
    <path d="M20 10c0-3 1-5 2-5M20 10c0-2-2-4-4-4" stroke="#2E7D32" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
  </svg>
);

export const Progress = ({value, total, color = "var(--point-600)"}: any) => (
  <div style={{height: 8, background: "var(--bg-code)", borderRadius: 999, overflow: "hidden"}}>
    <div style={{
      width: `${Math.min(100, (value/total)*100)}%`, height: "100%",
      background: color, borderRadius: 999,
      transition: "width 400ms var(--ease-standard)",
    }}/>
  </div>
);

export const Divider = ({v}: any) => (
  <div style={v ? {width: 1, alignSelf: "stretch", background: "var(--border-subtle)"} : {height: 1, background: "var(--border-subtle)", margin: "16px 0"}}/>
);

// All exports handled inline above.
