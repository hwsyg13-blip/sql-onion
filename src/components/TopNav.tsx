// @ts-nocheck
// TopNav + mobile nav
import React from 'react';
import { Btn, Ic } from './Atoms';
import { UserMenu } from '../screens/LoginScreen';

export const TopNav = ({route, onNavigate, dark, onToggleDark, user, onLogout, betaNoAuth = false}: any) => {
  const links = [
    {id: "plan",   label: "3주 공부계획"},
    {id: "theory", label: "이론"},
    {id: "mock",   label: "모의고사"},
    {id: "exams",  label: "기출문제"},
    ...(betaNoAuth ? [] : [{id: "pricing", label: "요금제"}]),
  ];
  const isActive = (id: string) => {
    if (id === "theory" && (route === "theory" || route === "theory-detail")) return true;
    if (id === "exams" && (route === "exams" || route === "cbt" || route === "cbt-result")) return true;
    if (id === "mock" && (route === "mock" || route === "mock-exam" || route === "endless")) return true;
    if (id === "plan" && route === "plan") return true;
    if (id === "pricing" && (route === "pricing" || route === "subscribe")) return true;
    return false;
  };
  return (
    <header style={{
      height: 64, background: "var(--bg-card)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex", alignItems: "center", padding: "0 28px", gap: 28,
      position: "sticky", top: 0, zIndex: 50,
    }}>
      <button onClick={() => onNavigate("home")} style={{
        background: "none", border: 0, cursor: "pointer", padding: 0,
        display: "inline-flex", alignItems: "center",
      }}>
        <img src={dark ? "/assets/logo-dark.svg" : "/assets/logo.svg"} height="28" alt="SQL양파"/>
      </button>
      <nav style={{display: "flex", gap: 24, marginLeft: 12}} className="topnav-links">
        {links.map(l => {
          const active = isActive(l.id);
          return (
            <button key={l.id} onClick={() => onNavigate(l.id)} style={{
              background: "none", border: 0, padding: "8px 0", cursor: "pointer",
              fontFamily: "inherit", fontSize: 14, position: "relative",
              fontWeight: active ? 700 : 500,
              color: active ? "var(--fg-1)" : "var(--fg-3)",
            }}>
              {l.label}
              <span style={{
                position: "absolute", left: 0, right: 0, bottom: -22,
                height: 2, background: active ? "var(--point-600)" : "transparent",
              }}/>
            </button>
          );
        })}
      </nav>
      <div style={{marginLeft: "auto", display: "flex", gap: 10, alignItems: "center"}}>
        <button onClick={onToggleDark} title={dark ? "라이트 모드" : "다크 모드"} style={{
          width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: "transparent", border: "1px solid var(--border-default)",
          borderRadius: 10, color: "var(--fg-2)", cursor: "pointer",
        }}>{dark ? <Ic.Sun/> : <Ic.Moon/>}</button>
        {betaNoAuth
          ? <span style={{fontSize:11,color:"var(--fg-3)",padding:"6px 10px",background:"var(--bg-muted)",borderRadius:999,fontWeight:600}}>BETA</span>
          : user
            ? <UserMenu user={user} onLogout={onLogout} onNavigate={onNavigate}/>
            : <Btn size="sm" variant="ghost" icon={<Ic.User size={16}/>} onClick={() => onNavigate("login")}>로그인</Btn>
        }
      </div>
    </header>
  );
};

// Mobile bottom tabs
export const MobileNav = ({route, onNavigate}: any) => {
  const tabs = [
    {id: "home",   label: "홈",     icon: Ic.Target},
    {id: "plan",   label: "3주계획", icon: Ic.Calendar},
    {id: "theory", label: "이론",    icon: Ic.Book},
    {id: "mock",   label: "모의고사", icon: Ic.Sparkles},
    {id: "exams",  label: "기출",    icon: Ic.ListChecks},
  ];
  const active = (id: string) => route === id
    || (id === "theory" && route === "theory-detail")
    || (id === "mock" && (route === "mock-exam" || route === "endless"))
    || (id === "exams" && (route === "cbt" || route === "cbt-result"));
  return (
    <div className="mobile-nav" style={{
      position: "fixed", left: 0, right: 0, bottom: 0, height: 64,
      background: "var(--bg-card)", borderTop: "1px solid var(--border-subtle)",
      display: "none", zIndex: 40,
    }}>
      {tabs.map(t => {
        const I = t.icon;
        const a = active(t.id);
        return (
          <button key={t.id} onClick={() => onNavigate(t.id)} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 3, background: "transparent", border: 0, cursor: "pointer", fontFamily: "inherit",
            color: a ? "var(--point-600)" : "var(--fg-3)",
          }}>
            <I size={20}/>
            <span style={{fontSize: 10.5, fontWeight: a ? 700 : 500}}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};
