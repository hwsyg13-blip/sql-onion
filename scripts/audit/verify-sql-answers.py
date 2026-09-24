"""SQL 실행 기반 정답 검증기.

references 의 table + sql 을 sqlite 에 올려 실행하고, 결과값이 정확히 하나의 보기와 일치하면 correctIndex 와 대조한다.
지원 불가 구문(ROWNUM, CONNECT BY, (+), PIVOT, DML 등)은 SKIP 하며, MISMATCH 는 "검토 필요" 신호일 뿐이다
(SQLite 와 Oracle 의 방언 차이로도 발생 가능).

사용:
  python scripts/audit/verify-sql-answers.py .                 # 전 회차
  python scripts/audit/verify-sql-answers.py . 60 61           # 특정 회차
  python scripts/audit/verify-sql-answers.py . --file scripts/authored/hard-mock.json
"""
import json, glob, re, sys, sqlite3, collections

base = sys.argv[1]
args = sys.argv[2:]
files_arg = None
if "--file" in args:
    i = args.index("--file")
    files_arg = args[i + 1]
    args = args[:i] + args[i + 2:]
only = [int(x) for x in args]

UNSUPPORTED = re.compile(r"\|\||/\s*0|ROWNUM|CONNECT\s+BY|\(\+\)|PIVOT|MERGE|INSERT|UPDATE|DELETE|ROLLUP|CUBE|GROUPING\s+SETS|FETCH\s+(FIRST|NEXT)|OFFSET|REGEXP|SYSDATE|TO_DATE|LISTAGG|CREATE|ALTER|DROP|GRANT|REVOKE|COMMIT|ROLLBACK|SAVEPOINT|MODEL|TOP\s+\d|LIMIT|\?", re.I)


# NULL 정렬 위치가 Oracle(NULL 최대)과 SQLite(NULL 최소)에서 달라 NULLS 지정 없는 DESC 정렬은 검증 제외
DESC_NULL = re.compile(r"ORDER\s+BY[^;]*\bDESC\b(?![^;]*NULLS)", re.I)


def nvl(a, b): return b if a is None else a
def nvl2(a, b, c): return c if a is None else b
def nullif(a, b): return None if a == b else a
def decode(*args):
    x = args[0]; rest = args[1:]
    i = 0
    while i + 1 < len(rest):
        if x == rest[i] or (x is None and rest[i] is None):
            return rest[i + 1]
        i += 2
    return rest[-1] if len(rest) % 2 == 1 else None
def to_char(x, fmt=None): return None if x is None else str(x)
def ceil(x):
    import math; return None if x is None else math.ceil(x)
def floor(x):
    import math; return None if x is None else math.floor(x)
def trunc(x, n=0):
    import math
    if x is None: return None
    m = 10 ** n
    return math.trunc(x * m) / m if n else math.trunc(x)
def lpad(s, n, p=" "): return None if s is None else (str(s)[:n] if len(str(s)) >= n else (p * n + str(s))[-n:])
def rpad(s, n, p=" "): return None if s is None else (str(s)[:n] if len(str(s)) >= n else (str(s) + p * n)[:n])
def oround(x, n=0):
    import math
    if x is None: return None
    m = 10 ** n
    v = abs(x) * m
    r = math.floor(v + 0.5) / m  # Oracle: 0.5 는 0에서 멀어지는 방향으로 반올림
    r = r if x >= 0 else -r
    return int(r) if n <= 0 else r


def concat_fn(a, b): return ("" if a is None else str(a)) + ("" if b is None else str(b))


def conn():
    c = sqlite3.connect(":memory:")
    for name, fn, n in [("NVL", nvl, 2), ("NVL2", nvl2, 3), ("NULLIF", nullif, 2), ("TO_CHAR", to_char, -1), ("CEIL", ceil, 1), ("FLOOR", floor, 1),
                        ("TRUNC", trunc, -1), ("LPAD", lpad, -1), ("RPAD", rpad, -1), ("CONCAT", concat_fn, 2), ("DECODE", decode, -1)]:
        c.create_function(name, n, fn)
    c.create_function("ROUND", 1, lambda x: oround(x, 0))
    c.create_function("ROUND", 2, oround)
    c.create_function("MOD", 2, lambda a, b: None if a is None or b is None else a % b)
    c.create_function("POWER", 2, lambda a, b: None if a is None or b is None else a ** b)
    c.create_function("SIGN", 1, lambda a: None if a is None else (a > 0) - (a < 0))
    c.execute("CREATE TABLE DUAL (DUMMY TEXT)"); c.execute("INSERT INTO DUAL VALUES ('X')")
    return c


def sanitize(name):
    return re.sub(r"[^\w가-힣]", "_", name.strip())


def conv(v):
    v = str(v).strip()
    if v.upper() == "NULL" or v == "":
        return None
    if re.fullmatch(r"-?\d+", v):
        return int(v)
    if re.fullmatch(r"-?\d+\.\d+", v):
        return float(v)
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "'\"":
        return v[1:-1]
    return v


def table_name(ref, sqltxt):
    cap = ref.get("caption") or ""
    idents = set(re.findall(r"(?:FROM|JOIN|,)\s*([A-Za-z_가-힣][\w가-힣]*)", sqltxt, re.I))
    for i in idents:
        if re.search(r"(^|[^\w가-힣])" + re.escape(i) + r"($|[^\w가-힣])", cap, re.I):
            return i
    return None


def norm_tokens(s):
    s = str(s)
    s = re.sub(r"[`'\"]", "", s)
    s = re.sub(r"\bNULL\b", "NULL", s, flags=re.I)
    toks = [t for t in re.split(r"[\s,/|]+", s) if t]
    return [t for t in toks if t not in ("건", "행", "개", "값", "결과")]


def flat(rows):
    out = []
    for r in rows:
        for v in r:
            out.append("NULL" if v is None else (str(int(v)) if isinstance(v, float) and v == int(v) else str(v)))
    return out


def trans(sql):
    s = sql
    s = re.sub(r"--[^\n]*", "", s)
    s = re.sub(r"\bMINUS\b", "EXCEPT", s, flags=re.I)
    s = re.sub(r"\bFROM\s+DUAL\b", "FROM DUAL", s, flags=re.I)
    s = re.sub(r"\bSUBSTR\(", "SUBSTR(", s, flags=re.I)
    s = re.sub(r"\bLENGTH\(", "LENGTH(", s, flags=re.I)
    s = re.sub(r"\bSYS_CONNECT_BY_PATH\b", "X", s)
    s = re.sub(r"\bLEFT\s+OUTER\b", "LEFT", s, flags=re.I)
    s = re.sub(r"\bFULL\s+OUTER\s+JOIN\b", "FULL OUTER JOIN", s, flags=re.I)
    s = s.replace(";", " ")
    return s


stats = collections.OrderedDict()
detail = []
paths = [files_arg] if files_arg else sorted(glob.glob(base + "/scripts/authored/round-*.json"))
for p in paths:
    m_ = re.search(r"round-(\d+)", p)
    r = int(m_.group(1)) if m_ else p.split("/")[-1]
    if only and r not in only:
        continue
    d = json.load(open(p, encoding="utf8"))["authored"]
    c = collections.Counter()
    for q in d:
        refs = q.get("references") or []
        tables = [x for x in refs if x.get("type") == "table"]
        if any("요약" in (t.get("caption") or "") for t in tables):  # 원본 행이 아니라 요약표인 지문은 검증 제외
            c["summary_table"] += 1
            continue
        sqls = [x for x in refs if x.get("type") == "sql"]
        if not sqls:
            c["no_sql"] += 1
            continue
        code = "\n".join(x.get("code", "") for x in sqls)
        if UNSUPPORTED.search(code) or DESC_NULL.search(code) or not re.search(r"\bSELECT\b", code, re.I):
            c["unsupported"] += 1
            continue
        if code.count("SELECT") and re.search(r"\n\s*--\s*[가-힣(]", code):
            c["multi_sql"] += 1
            continue
        db = conn()
        ok = True
        used = set()
        try:
            for t in tables:
                name = table_name(t, code)
                if not name or name.upper() in used:
                    continue
                used.add(name.upper())
                cols = [sanitize(h) for h in t["headers"]]
                db.execute(f'CREATE TABLE "{name}" (' + ",".join(f'"{x}"' for x in cols) + ")")
                for row in t["rows"]:
                    if len(row) != len(cols):
                        raise ValueError("row width")
                    db.execute(f'INSERT INTO "{name}" VALUES (' + ",".join("?" * len(cols)) + ")", [conv(v) for v in row])
            need = set(x.upper() for x in re.findall(r"(?:FROM|JOIN)\s+([A-Za-z_가-힣][\w가-힣]*)", code, re.I)) - {"DUAL"}
            if not need <= used:
                c["table_map_fail"] += 1
                detail.append((r, q.get("number") or q.get("_id"), "TABLE_MAP", f"need={sorted(need)} used={sorted(used)}"))
                continue
            cur = db.execute(trans(code))
            rows = cur.fetchall()
        except Exception as e:
            c["exec_error"] += 1
            detail.append((r, q.get("number") or q.get("_id"), "EXEC_ERROR", str(e)[:80]))
            continue
        res = flat(rows)
        exact, loose = [], []
        for i, o in enumerate(q["options"]):
            if not res:
                if re.match(r"\s*(공집합|결과\s*없음)", o):
                    exact.append(i)
                continue
            ot = [t.upper() for t in norm_tokens(o)]
            if ot == [t.upper() for t in res]:
                exact.append(i)
            elif len(res) > 1 and sorted(ot) == sorted(t.upper() for t in res):
                loose.append(i)
        matches = exact if exact else loose
        if len(matches) == 1:
            if matches[0] == q["correctIndex"]:
                c["OK"] += 1
            else:
                c["MISMATCH"] += 1
                detail.append((r, q.get("number") or q.get("_id"), "MISMATCH", f"exec={res} → option{matches[0]+1}, key={q['correctIndex']+1}"))
        else:
            c["no_option_match"] += 1
            detail.append((r, q.get("number") or q.get("_id"), "NO_MATCH", f"exec={res[:8]}"))
    stats[r] = c
keys = ["OK", "MISMATCH", "no_option_match", "exec_error", "table_map_fail", "unsupported", "multi_sql", "no_sql"]
print("round".ljust(12) + " ".join(f"{k[:9]:>9}" for k in keys))
tot = collections.Counter()
for r, c in stats.items():
    print(str(r).ljust(12) + " ".join(f"{c[k]:>9}" for k in keys))
    tot.update(c)
print("TOTAL".ljust(12) + " ".join(f"{tot[k]:>9}" for k in keys))
print()
for r, n, kind, msg in detail:
    if kind in ("MISMATCH", "EXEC_ERROR") or (files_arg and kind in ("NO_MATCH", "TABLE_MAP")):
        print(r, n, kind, msg)
