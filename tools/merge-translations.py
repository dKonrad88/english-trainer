import json, re
from collections import defaultdict

ROOT = "/Users/diegokonrad/Documents/Hub Pessoal vCode/english-trainer"
WF = "/private/tmp/claude-501/-Users-diegokonrad-Documents-Hub-Pessoal-vCode/23a463c1-07cb-4840-9a93-f3d557ca5fb8/tasks/wmt9csf0l.output"

res = json.loads(open(WF, encoding="utf-8").read())["result"]
if isinstance(res, str):
    res = json.loads(res)
tr = {}
for t in res["themes"]:
    for it in t["items"]:
        tr[it["id"]] = it

cpath = ROOT + "/data/content.js"
content = open(cpath, encoding="utf-8").read()
items = json.loads(re.search(r"const ITEMS = (\[[\s\S]*?\]);\s*const APPROVED_ITEMS", content).group(1))
themes_meta = json.loads(re.search(r"const THEMES = (\[[\s\S]*?\]);", content).group(1))

applied, miss = 0, []
for it in items:
    t = tr.get(it["id"])
    if not t:
        miss.append(it["id"]); continue
    ep = t.get("examples_pt", [])
    for i, ex in enumerate(it.get("examples", [])):
        if i < len(ep):
            ex["pt"] = ep[i]
    md = t.get("meaning_distractors", [])
    if len(md) >= 3:
        it["mdist"] = md[:3]
    applied += 1

cnt = defaultdict(int)
for it in items:
    cnt[it["theme"]] += 1
for t in themes_meta:
    t["count"] = cnt.get(t["key"], 0)

newc = (
    "/* GERADO automaticamente (workflow english-content-factory + traduções/distratores).\n"
    "   Cada item: examples[].pt = tradução PT da frase; mdist = 3 significados confundíveis. */\n\n"
    "const ITEMS = " + json.dumps(items, ensure_ascii=False, indent=1) + ";\n\n"
    "const APPROVED_ITEMS = ITEMS.filter(function (it) { return it.status === 'approved'; });\n"
    "const APPROVED_IDS = APPROVED_ITEMS.map(function (it) { return it.id; });\n\n"
    "const THEMES = " + json.dumps(themes_meta, ensure_ascii=False, indent=1) + ";\n"
)
open(cpath, "w", encoding="utf-8").write(newc)

print("aplicado:", applied, "de", len(items), "| sem tradução:", len(miss), miss[:8])
s = [it for it in items if it["id"] == "hotel-3"][0]
print("hotel-3 ex0.pt:", s["examples"][0].get("pt"))
print("hotel-3 mdist :", s.get("mdist"))
