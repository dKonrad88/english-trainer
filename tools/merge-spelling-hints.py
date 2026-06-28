import json, re
ROOT = "/Users/diegokonrad/Documents/Hub Pessoal vCode/english-trainer"
WF = "/private/tmp/claude-501/-Users-diegokonrad-Documents-Hub-Pessoal-vCode/23a463c1-07cb-4840-9a93-f3d557ca5fb8/tasks/wtpjzt3tf.output"
r = json.load(open(WF, encoding="utf-8"))["result"]
r = json.loads(r) if isinstance(r, str) else r
hints = {}
for it in r["items"]:
    w = it["word"].lower().strip()
    if w not in hints:
        hints[w] = {k: it[k] for k in ["clue_en", "respell", "trap"]}
cpath = ROOT + "/data/spelling.js"
content = open(cpath, encoding="utf-8").read()
words = json.loads(re.search(r"const SPELLING_WORDS = (\[[\s\S]*\]);", content).group(1))
applied, miss = 0, []
for w in words:
    h = hints.get(w["word"].lower().strip())
    if h:
        w.update(h); applied += 1
    else:
        miss.append(w["word"])
open(cpath, "w", encoding="utf-8").write(
    "/* Palavras difíceis (sílabas, tônica, IPA) + clue_en (dica EN), respell (pronúncia legível), trap (pegadinha). */\n\n"
    "const SPELLING_WORDS = " + json.dumps(words, ensure_ascii=False, indent=1) + ";\n")
print("aplicado:", applied, "de", len(words), "| sem:", miss)
s = [w for w in words if w["word"] == "dessert"]
if s:
    print("dessert ->", s[0].get("respell"), "|", s[0].get("trap"))
