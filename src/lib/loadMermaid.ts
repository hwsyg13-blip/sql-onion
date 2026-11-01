// mermaid 동적 로드 — 배포 직후 옛 청크 404 대비
//
// Vercel 은 배포마다 assets 파일명(해시)이 바뀐다. 사이트를 열어 둔 채로 새 배포가 나가면
// 브라우저가 들고 있는 옛 index.js 가 이미 사라진 mermaid 청크를 요청해 404 가 나고,
// import('mermaid') 가 실패한다. 예전에는 콘솔 경고만 남기고 ERD 자리가 빈 상자로 보여
// "보기에 ERD 가 없어요" 제보가 들어왔다 (R58 1과목 8·9번, 2026-10-26·11-01).
//
// 여기서는 한 번 재시도하고, 그래도 실패하면 호출한 쪽이 안내 문구를 보여 줄 수 있게 에러를 넘긴다.
// 시험 중 답안은 저장되지 않으므로 자동 새로고침은 하지 않는다 (사용자가 버튼으로 선택).

type MermaidModule = typeof import('mermaid');

let pending: Promise<MermaidModule> | null = null;

export function loadMermaid(): Promise<MermaidModule> {
  if (!pending) {
    pending = import('mermaid').catch(
      () => new Promise<MermaidModule>((resolve, reject) => {
        // 일시적인 네트워크 오류일 수 있으니 잠깐 뒤 한 번 더
        setTimeout(() => { import('mermaid').then(resolve, reject); }, 800);
      }),
    ).catch(err => {
      pending = null; // 다음 호출에서 다시 시도할 수 있게
      throw err;
    });
  }
  return pending;
}

/** 청크 로드 실패(배포 직후 등) 안내 — ERD 자리에 넣는 HTML. 새로고침은 사용자가 고른다. */
export function mermaidLoadFailedHtml(): string {
  return `<div role="alert" style="text-align:center;padding:14px 8px;font-size:13px;line-height:1.6;color:var(--fg-2);">`
    + `다이어그램을 불러오지 못했어요.<br/>사이트가 방금 업데이트되어 새로고침이 필요해요.`
    + `<br/><button type="button" onclick="location.reload()" style="margin-top:8px;padding:6px 14px;border-radius:8px;`
    + `border:1px solid var(--border-default);background:var(--bg-card);color:var(--fg-1);font:inherit;cursor:pointer;">새로고침</button>`
    + `<div style="margin-top:6px;font-size:11.5px;color:var(--fg-4);">시험을 푸는 중이라면 새로고침 시 답안이 초기화될 수 있어요.</div>`
    + `</div>`;
}
