#!/usr/bin/env python3
"""
generate-audio.py — Gera os MP3 neurais das frases do app (camada de áudio "static").
-------------------------------------------------------------------------------------
Lê data/content.js, extrai cada frase de exemplo e sintetiza um MP3 por voz,
salvando em audio/<id>__<i>__<voice>.mp3 — exatamente o nome que o app procura
(StaticAudioProvider). Frases já geradas são puladas.

Provider padrão: ElevenLabs (mais natural; conteúdo é pequeno, cabe no plano free).
Para trocar por Azure/OpenAI/Google, basta reescrever synth_one().

USO:
    export ELEVENLABS_API_KEY="sua-chave"
    python3 tools/generate-audio.py            # gera o que falta
    python3 tools/generate-audio.py --force    # regenera tudo
    python3 tools/generate-audio.py --dry       # só lista, não chama a API

Conteúdo finito: ~28 frases ≈ 2k caracteres ≈ centavos (ou grátis no free tier).
"""
import os
import re
import sys
import json
import urllib.request
import urllib.error

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CONTENT = os.path.join(ROOT, "data", "content.js")
AUDIO_DIR = os.path.join(ROOT, "audio")

# === ElevenLabs ===
API_KEY = os.environ.get("ELEVENLABS_API_KEY", "")
MODEL = "eleven_multilingual_v2"
# IDs de vozes "premade" da ElevenLabs. CONFIRME/ajuste no painel
# (Voices -> a voz -> botão "ID"). Aqui: 2 britânicas + 2 americanas, ♂/♀.
VOICES = {
    "uk_male":   "JBFqnCBsd6RMkjVDRZzb",  # George (British)
    "uk_female": "pFZP5JQG7iQjIQuC4Bku",  # Lily   (British)
    "us_male":   "nPczCjzI2devNBz1zQrb",  # Brian  (American)
    "us_female": "EXAVITQu4vr4xnSDxMaL",  # Sarah  (American)
}

MANIFEST = os.path.join(AUDIO_DIR, "manifest.json")


def parse_examples():
    """Lê audio/manifest.json (gerado por build-content) -> (id, indice, voice, text).

    O nome do arquivo no manifest é '<id>__<i>__<voice>.mp3' — devolvemos as
    partes para casar com o que o app procura (StaticAudioProvider)."""
    out = []
    with open(MANIFEST, encoding="utf-8") as f:
        entries = json.load(f)
    for e in entries:
        base = e["file"][:-4] if e["file"].endswith(".mp3") else e["file"]
        iid, idx, voice = base.rsplit("__", 2)
        out.append((iid, int(idx), e["voice"], e["text"]))
    return out


def synth_one(text, voice_profile, out_path):
    voice_id = VOICES[voice_profile]
    url = "https://api.elevenlabs.io/v1/text-to-speech/" + voice_id
    body = json.dumps({"text": text, "model_id": MODEL}).encode("utf-8")
    req = urllib.request.Request(url, data=body, method="POST", headers={
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    })
    with urllib.request.urlopen(req) as resp:
        audio = resp.read()
    with open(out_path, "wb") as f:
        f.write(audio)


def main():
    force = "--force" in sys.argv
    dry = "--dry" in sys.argv
    items = parse_examples()
    os.makedirs(AUDIO_DIR, exist_ok=True)
    print("Frases encontradas: %d" % len(items))
    print("Caracteres totais : %d" % sum(len(t) for _, _, _, t in items))
    if dry:
        for iid, i, v, t in items:
            print("  %s__%d__%s.mp3  [%s]  %s" % (iid, i, v, v, t))
        return
    if not API_KEY:
        sys.exit("ERRO: defina ELEVENLABS_API_KEY no ambiente antes de rodar.")
    done = skip = fail = 0
    for iid, i, v, t in items:
        name = "%s__%d__%s.mp3" % (iid, i, v)
        path = os.path.join(AUDIO_DIR, name)
        if os.path.exists(path) and not force:
            skip += 1
            continue
        try:
            synth_one(t, v, path)
            done += 1
            print("  ✓ %s" % name)
        except urllib.error.HTTPError as e:
            fail += 1
            print("  ✗ %s  (HTTP %s: %s)" % (name, e.code, e.read().decode("utf-8", "ignore")[:160]))
        except Exception as e:  # noqa
            fail += 1
            print("  ✗ %s  (%s)" % (name, e))
    print("\nGerados: %d · pulados: %d · falhas: %d" % (done, skip, fail))
    print("Pronto. O app passa a tocar os MP3 automaticamente (com fallback p/ voz do sistema).")


if __name__ == "__main__":
    main()
