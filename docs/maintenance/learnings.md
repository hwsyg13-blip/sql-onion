# 학습 기록

실행할 때마다 먼저 읽습니다. 맨 위 "규칙"은 반드시 따르고, 아래 회고는 미션마다 추가합니다.

## 규칙

1. **오래된 제보는 현재 데이터로 다시 판단한다.** 2026-10-31 R58 2과목 28번, R60 1과목 3번 제보는 5월에 들어왔지만 9월 22일 커밋(`8dffaf3` 등)으로 이미 고쳐져 있었다. 제보 시각과 `git log -- scripts/authored/round-NN.json`을 먼저 비교한다.
2. **운영 사이트 버전은 GitHub deployments API로 확인한다.** `sqldyangpa.com`은 이 환경에서 Vercel 방화벽(`x-vercel-mitigated: deny`)에 막힌다. 접속을 우회하려 하지 않는다. `gh api "repos/hwsyg13-blip/sql-onion/deployments?environment=Production"`으로 배포된 커밋을 본다.
3. **PR은 REST API로 만든다.** `gh pr create`는 GraphQL 403이 난다. `gh api repos/hwsyg13-blip/sql-onion/pulls -X POST ...`를 쓴다.
4. **npm 레지스트리 접속이 ENOTFOUND로 실패하면**, 이 환경의 npm 설정이 `registry.npmjs.org`를 프록시 예외로 두기 때문이다. 그 명령에만 `env -u NO_PROXY -u no_proxy -u npm_config_noproxy npm <cmd> --https-proxy="$HTTPS_PROXY"`로 실행한다. 전역 설정은 바꾸지 않는다. 새 세션에서는 그냥 `npm ci`가 되는 경우도 있으니 먼저 그대로 시도한다.
5. **푸시 후 원격 추적 ref를 갱신한다.** 얕은 클론이라 푸시 뒤에도 `origin/<branch>`가 옛 값으로 남을 수 있다. `git fetch origin <branch>:refs/remotes/origin/<branch>`로 맞춘다.
6. **생성 파일은 직접 고치지 않는다.** `src/data/rounds/*.ts`는 `scripts/authored/*.json`에서, 이론 HTML은 `scripts/build-theory*.mjs`에서 만든다.

## 회고

### 2026-10-31 첫 수동 실행 (기본 점검)
- 결과: 수정 없음. validate-rounds ERROR 0, WARN 29. 정답 노출 의심 16건.
- 잘 된 것: 제보와 실제 데이터를 대조해 오래된 제보를 걸러냈다.
- 막힌 것과 해결: 사이트 접근이 막혀 배포 버전을 확인할 수 없었다. GitHub deployments API로 운영 배포 커밋을 확인해 해결했다.
- 다음에 다르게 할 것: 제보 판단 전에 해당 문항의 수정 이력부터 본다 (규칙 1).
