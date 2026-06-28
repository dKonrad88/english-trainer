import json, os
from collections import defaultdict

PATH = "/private/tmp/claude-501/-Users-diegokonrad-Documents-Hub-Pessoal-vCode/23a463c1-07cb-4840-9a93-f3d557ca5fb8/tasks/ww2qie7md.output"
OUT = "/Users/diegokonrad/Documents/Hub Pessoal vCode/english-trainer"

res = json.loads(open(PATH, encoding="utf-8").read())["result"]
if isinstance(res, str):
    res = json.loads(res)
themes = res["themes"]
test = res["test"]
principles = res["principles"]

# ---------- content.js ----------
items = []
manifest = []
theme_meta = []
for t in themes:
    key = t["key"]
    cnt = 0
    for i, it in enumerate(t["items"]):
        iid = "%s-%d" % (key, i)
        item = {"id": iid, "theme": key, "status": "approved"}
        for f in ["type", "text", "cefr", "register", "meaning_pt", "meaning_en", "nuance", "answer", "examples", "distractors"]:
            if f in it:
                item[f] = it[f]
        items.append(item)
        cnt += 1
        for ei, ex in enumerate(it.get("examples", [])):
            v = ex.get("voice", "us_female")
            manifest.append({"file": "%s__%d__%s.mp3" % (iid, ei, v), "text": ex["text"], "voice": v})
    theme_meta.append({"key": key, "pt": t.get("pt", key), "count": cnt})

content_js = (
    "/* GERADO automaticamente a partir do workflow english-content-factory.\n"
    "   79 itens lexicais B2-C2 verificados por revisor nativo. NAO editar a mao\n"
    "   sem querer; regenere via tools/build-content.py se reexecutar o workflow. */\n\n"
    "const ITEMS = " + json.dumps(items, ensure_ascii=False, indent=1) + ";\n\n"
    "const APPROVED_ITEMS = ITEMS.filter(function (it) { return it.status === 'approved'; });\n"
    "const APPROVED_IDS = APPROVED_ITEMS.map(function (it) { return it.id; });\n\n"
    "/* metadados dos temas para o seletor de \"tema do dia\" */\n"
    "const THEMES = " + json.dumps(theme_meta, ensure_ascii=False, indent=1) + ";\n"
)
open(os.path.join(OUT, "data", "content.js"), "w", encoding="utf-8").write(content_js)

# ---------- conversations.js ----------
convs = {}
for t in themes:
    c = dict(t["conversation"])
    c["theme"] = t["key"]
    convs[t["key"]] = c
conv_js = (
    "/* Mini-conversas imersivas por tema (geradas e verificadas). */\n\n"
    "const CONVERSATIONS = " + json.dumps(convs, ensure_ascii=False, indent=1) + ";\n"
)
open(os.path.join(OUT, "data", "conversations.js"), "w", encoding="utf-8").write(conv_js)

# ---------- test.js (escolhe 21: 7 B2 / 7 C1 / 7 C2) ----------
keep = [q for q in test if q.get("keep") and q.get("hard") and q.get("unambiguous")]
by_level = defaultdict(list)
for q in keep:
    by_level[q["level"]].append(q)
selected = []
for lvl in ["B2", "C1", "C2"]:
    qs = sorted(by_level[lvl], key=lambda q: 0 if q.get("audio") else 1)  # escuta primeiro
    selected += qs[:7]
clean = []
for q in selected:
    cq = {"level": q["level"], "type": q["type"], "q": q["q"],
          "options": q["options"], "answer": q["answer"], "trap": q.get("trap", "")}
    if q.get("context"):
        cq["context"] = q["context"]
    if q.get("audio"):
        cq["audio"] = q["audio"]
    clean.append(cq)
test_js = (
    "/* Teste de nivel B2-C2: 21 questoes com distratores dificeis (verificadas\n"
    "   uma a uma: 'hard' e 'unambiguous'). */\n\n"
    "const TEST_QUESTIONS = " + json.dumps(clean, ensure_ascii=False, indent=1) + ";\n"
)
open(os.path.join(OUT, "data", "test.js"), "w", encoding="utf-8").write(test_js)

# ---------- audio/manifest.json ----------
os.makedirs(os.path.join(OUT, "audio"), exist_ok=True)
open(os.path.join(OUT, "audio", "manifest.json"), "w", encoding="utf-8").write(
    json.dumps(manifest, ensure_ascii=False, indent=1))

# ---------- DESIGN.md (princípios) ----------
open(os.path.join(OUT, "DESIGN.md"), "w", encoding="utf-8").write(
    "# Base pedagógica (gerada na pesquisa do workflow)\n\n" + principles + "\n")

# ---------- resumo ----------
lc = defaultdict(int)
for it in items:
    lc[it["cefr"]] += 1
print("content.js     :", len(items), "itens", dict(lc))
print("conversations  :", len(convs), "temas")
print("test.js        :", len(clean), "questoes", {l: sum(1 for q in clean if q["level"] == l) for l in ["B2", "C1", "C2"]},
      "| escuta:", sum(1 for q in clean if q.get("audio")))
print("manifest.json  :", len(manifest), "frases de audio")
print("OK -> arquivos escritos em data/ e audio/")
