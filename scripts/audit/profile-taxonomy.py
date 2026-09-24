import json, glob, re, sys, collections
base = sys.argv[1]
TAGS = {
 "NULL": r"NULL|널",
 "NOT_IN": r"NOT\s+IN|NOT\s+EXISTS|낫\s*인",
 "OUTER": r"OUTER|\(\+\)|LEFT\s+JOIN|RIGHT\s+JOIN|아우터",
 "PRECEDENCE": r"\bOR\b.*\bAND\b|\bAND\b.*\bOR\b|우선순위",
 "EXEC_ORDER": r"수행\s*순서|실행\s*순서|별칭|ROWNUM",
 "TYPE_CONV": r"TO_CHAR|TO_NUMBER|TO_DATE|형변환|묵시적",
 "TCL": r"SAVEPOINT|ROLLBACK|COMMIT|롤백|커밋",
 "WINDOW": r"OVER\s*\(|윈도우|RANK|LAG|LEAD|NTILE",
 "HIER": r"CONNECT\s+BY|START\s+WITH|계층",
 "SETOP": r"UNION|MINUS|INTERSECT|집합\s*연산",
 "GROUPEXT": r"ROLLUP|CUBE|GROUPING\s+SETS",
 "PIVOT": r"PIVOT",
 "REGEXP": r"REGEXP",
 "SUBQ": r"서브\s*쿼리|EXISTS|\(\s*SELECT",
 "DDL_DCL": r"CREATE|ALTER|DROP|GRANT|REVOKE|제약|CONSTRAINT|FOREIGN\s+KEY",
 "DML": r"INSERT|UPDATE|DELETE|MERGE",
 "MODEL": r"엔터티|식별자|정규|관계|속성|ERD|도메인|트랜잭션",
}
def text(q):
    return " ".join([q["title"], " ".join(q["options"]), json.dumps(q.get("references") or [], ensure_ascii=False)])
per = {}
combo = {}
for p in sorted(glob.glob(base + "/scripts/authored/round-*.json")):
    r = int(re.search(r"round-(\d+)", p).group(1))
    d = json.load(open(p, encoding="utf8"))["authored"]
    c = collections.Counter()
    multi = 0
    for q in d:
        if q["subject"] != "2과목":
            continue
        t = text(q)
        hit = [k for k, pat in TAGS.items() if k != "MODEL" and re.search(pat, t, re.I | re.S)]
        for k in hit:
            c[k] += 1
        if len(set(hit) - {"SUBQ"}) >= 3:
            multi += 1
    per[r] = c
    combo[r] = multi
keys = [k for k in TAGS if k != "MODEL"]
print("round " + " ".join(f"{k[:6]:>6}" for k in keys) + "  multi3+")
for r in sorted(per):
    print(f"{r:>5} " + " ".join(f"{per[r][k]:>6}" for k in keys) + f"  {combo[r]:>5}")
old = [r for r in per if 45 <= r <= 52]
mid = [r for r in per if 53 <= r <= 59]
new = [r for r in per if r >= 60]
def avg(rs, k): return sum(per[r][k] for r in rs) / max(1, len(rs))
print("\n평균(회차당) 45-52 / 53-59 / 60-62")
for k in keys:
    print(f"{k:12} {avg(old,k):5.1f} {avg(mid,k):5.1f} {avg(new,k):5.1f}")
print("multi3+", round(sum(combo[r] for r in old)/len(old),1), round(sum(combo[r] for r in mid)/len(mid),1), round(sum(combo[r] for r in new)/len(new),1))
