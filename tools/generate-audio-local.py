#!/usr/bin/env python3
"""
generate-audio-local.py — Gera áudio GRÁTIS usando o TTS nativo do macOS (`say`)
+ afconvert (AAC/.m4a, que toca nativo em Safari/iPhone/Chrome).

Só gera as vozes que o Mac tem com QUALIDADE e sotaque correto:
  uk_male -> Daniel   ·   us_female -> Samantha
As outras (uk_female / us_male) o Mac não tem boas — ficam na voz do aparelho
(no iPhone o fallback do Web Speech é ótimo). Para as 4 vozes neurais, use
generate-audio.py (ElevenLabs).

USO:  python3 tools/generate-audio-local.py
O app tenta audio/<chave>.mp3 -> .m4a -> voz do sistema, então isto entra sozinho.
"""
import os
import json
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
AUDIO_DIR = os.path.join(ROOT, "audio")
MANIFEST = os.path.join(AUDIO_DIR, "manifest.json")
TMP = "/tmp/_et_say.aiff"

MAC_VOICE = {"uk_male": "Daniel", "us_female": "Samantha"}
RATE = "168"  # palavras/min — um tiquinho mais devagar, melhor p/ estudo


def main():
    entries = json.load(open(MANIFEST, encoding="utf-8"))
    todo = [e for e in entries if e["voice"] in MAC_VOICE]
    print("Frases geráveis no Mac (Daniel/Samantha): %d de %d" % (len(todo), len(entries)))
    done = skip = fail = 0
    for e in todo:
        out = os.path.join(AUDIO_DIR, e["file"].replace(".mp3", ".m4a"))
        if os.path.exists(out):
            skip += 1
            continue
        try:
            subprocess.run(["say", "-v", MAC_VOICE[e["voice"]], "-r", RATE, "-o", TMP, e["text"]], check=True)
            subprocess.run(["afconvert", TMP, out, "-f", "m4af", "-d", "aac"], check=True,
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            done += 1
        except Exception as ex:  # noqa
            fail += 1
            print("  ✗ %s (%s)" % (e["file"], ex))
    if os.path.exists(TMP):
        os.remove(TMP)
    print("Gerados: %d · pulados: %d · falhas: %d" % (done, skip, fail))
    print("Pronto — o app toca esses .m4a automaticamente (uk_male/us_female).")


if __name__ == "__main__":
    main()
