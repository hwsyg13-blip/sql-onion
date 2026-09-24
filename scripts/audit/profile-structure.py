import json, glob, re, statistics as st, sys
base = sys.argv[1]
rows = []
detail = {}
for p in sorted(glob.glob(base + "/scripts/authored/round-*.json")):
    r = int(re.search(r"round-(\d+)", p).group(1))
    d = json.load(open(p, encoding="utf8"))["authored"]
    n = len(d)
    s2 = [q for q in d if q["subject"] == "2과목"]
    def refs(q): return q.get("references") or []
    def has(q, t): return any(x.get("type") == t for x in refs(q))
    sqlish = [q for q in s2 if re.search(r"SQL|쿼리|결과|실행|출력|건수|행", q["title"])]
    with_table = sum(1 for q in s2 if has(q, "table"))
    with_sql = sum(1 for q in s2 if has(q, "sql"))
    both = sum(1 for q in s2 if has(q, "table") and has(q, "sql"))
    noref_sqlish = [q["number"] for q in sqlish if not refs(q)]
    exp_len = [len(q.get("explanation", "")) for q in d]
    short_exp = sum(1 for e in exp_len if e < 60)
    code_opts = sum(1 for q in s2 if any(re.search(r"SELECT|FROM|WHERE|INSERT|UPDATE|JOIN", o) for o in q["options"]))
    null_q = sum(1 for q in d if re.search(r"NULL|널", q["title"] + " ".join(q["options"]) + q.get("explanation", "") + json.dumps(refs(q), ensure_ascii=False)))
    avg_opt = st.mean(len(o) for q in d for o in q["options"])
    ans_dist = [sum(1 for q in d if q["correctIndex"] == i) for i in range(4)]
    # "안전한" 보기 형태: 숫자/짧은 단어만
    short_opts = sum(1 for q in s2 if st.mean(len(o) for o in q["options"]) < 6)
    multi_data = sum(1 for q in s2 if sum(1 for x in refs(q) if x.get("type") == "table") >= 2)
    rows.append((r, n, len(s2), with_table, with_sql, both, len(noref_sqlish), round(st.mean(exp_len)), short_exp, code_opts, null_q, round(avg_opt, 1), short_opts, multi_data, ans_dist))
    detail[r] = noref_sqlish
print("round n s2  tbl sql both noRefSqlish expAvg expShort codeOpt nullQ optLen shortOpt multiTbl ansDist")
for x in rows:
    print(*x)
print("noref sql-ish question numbers:")
for r, v in detail.items():
    print(r, v)
