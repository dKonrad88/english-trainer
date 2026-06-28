import json
ROOT = "/Users/diegokonrad/Documents/Hub Pessoal vCode/english-trainer"
WF = "/private/tmp/claude-501/-Users-diegokonrad-Documents-Hub-Pessoal-vCode/23a463c1-07cb-4840-9a93-f3d557ca5fb8/tasks/w896mj9fp.output"
res = json.loads(open(WF, encoding="utf-8").read())["result"]
if isinstance(res, str):
    res = json.loads(res)
words, seen = [], set()
for c in res["cats"]:
    for w in c["words"]:
        k = w["word"].lower().strip()
        if k in seen:
            continue
        seen.add(k)
        words.append({f: w[f] for f in ["word", "syllables", "stress", "ipa", "meaning_pt", "example_en", "example_pt"]})
open(ROOT + "/data/spelling.js", "w", encoding="utf-8").write(
    "/* Palavras difíceis de soletrar/pronunciar (geradas + verificadas por nativo).\n"
    "   syllables: separadas por '·' · stress: índice 0-based da sílaba tônica. */\n\n"
    "const SPELLING_WORDS = " + json.dumps(words, ensure_ascii=False, indent=1) + ";\n")
print("palavras únicas:", len(words))
print("amostra:", words[0]["word"], words[0]["syllables"], "stress", words[0]["stress"])
