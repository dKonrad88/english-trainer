# English Trainer — C1/C2 (MVP)

App pessoal de treino de inglês para conversação (viagem aos EUA/Orlando), modo
foco com SRS. Perfis Diego e Débora, cada um com **nível, biblioteca e agenda
próprios**. Vanilla JS + localStorage, sem build. Mobile-first.

## Como rodar

- **Simples:** duplo-clique em `index.html` (scripts clássicos rodam em `file://`).
- **Servindo (recomendado p/ áudio):** `python3 -m http.server 8753` dentro da
  pasta e abra `http://localhost:8753/`. No celular: mesma URL na rede local.

## Status — ✅ verificado de ponta a ponta (mobile)

Teste de nível, sessão de estudo completa (8 blocos, incl. mini-conversa), SRS
gravando por perfil, e tela de evolução — todos testados no preview.

## Funcionalidades

- **Teste de nível B2→C2** (21 questões, distratores difíceis verificados um a um).
  Calcula o nível, mostra **revisão dos erros com a "pegadinha"** de cada um, e
  **grava histórico** (base da evolução). Atualiza a faixa de estudo do perfil.
- **Biblioteca grande compartilhada:** 79 itens lexicais B2/C1/C2, marcados por
  **tema** (8 temas) e nível. ~40% são gírias/idioms/expressões.
- **Estudo por perfil diferente:** Diego puxa B2–C1, Débora C1–C2 (definido pelo
  teste), com SRS separado → **palavras diferentes** para cada um.
- **Tema do dia:** Compras, Hotel, Restaurante, Parques/Disney, Transporte,
  Passeios, Small talk, Saúde — ou Misto.
- **Sessão modo foco (ordem por eficiência, base em `DESIGN.md`):**
  Novas palavras → Escuta → Produção → **Gírias & expressões** → **Conversa
  imersiva** (chat com escolhas) → Fixação (jogo) → Quiz → Nota + reagendamento.
- **Evolução:** nível ao longo do tempo, domínio de itens (vistos / em revisão /
  consolidados), acerto recente (sparkline), itens por tema, streak.
- **Áudio plugável:** 4 vozes (2🇬🇧+2🇺🇸, ♂/♀). Tenta MP3 neural, cai na voz do
  sistema se faltar.

## Arquitetura

```
english-trainer/
├─ index.html             # app completo (UI + áudio + telas)
├─ data/
│  ├─ content.js          # 79 itens (GERADO; ver tools/build-content)
│  ├─ conversations.js    # 8 mini-conversas por tema
│  └─ test.js             # 21 questões do teste
├─ engine/srs.js          # motor SRS — funções PURAS
├─ audio/
│  ├─ manifest.json       # frases -> MP3 (gerado)
│  └─ *.mp3               # gerados sob demanda
├─ tools/
│  ├─ generate-audio.py   # gera MP3 neurais (ElevenLabs) lendo o manifest
│  └─ server.py           # servidor estático p/ preview
└─ DESIGN.md              # base pedagógica (pesquisa) que guiou o design
```

Conteúdo (`content.js`/`conversations.js`/`test.js`) e o `manifest.json` foram
gerados por um workflow multi-agente com **revisão adversarial de um nativo** e
montados por `tools/build-content.py` (em `/tmp` na geração; reexecutável).

### Motor de SRS (`srs.js`)

Ladder `[1,3,7,16]`d + ease (SM-2). `applyGrade` (puro), `selectSessionFiltered`
(novos respeitam nível+tema; revisão ignora o filtro), `masteryStats`, `dueCount`.

## Áudio — como gerar

O app tenta `audio/<chave>.mp3` → `.m4a` → voz do sistema (fallback).

**Grátis, já rodado (macOS `say`, 2 vozes boas — Daniel 🇬🇧♂ / Samantha 🇺🇸♀):**

```bash
python3 tools/generate-audio-local.py   # gera .m4a (80 frases); o Mac não tem
                                        # boa 🇬🇧♀/🇺🇸♂ — essas ficam na voz do aparelho
```

**Premium neural, 4 vozes (ElevenLabs — precisa de chave):**

```bash
export ELEVENLABS_API_KEY="sua-chave"
python3 tools/generate-audio.py --dry   # confere as 158 frases (não chama API)
python3 tools/generate-audio.py         # gera os MP3 que faltam
```

- 158 frases ≈ **12,3k caracteres** (ligeiramente acima dos 10k/mês do free tier
  do ElevenLabs — o plano Starter resolve, ou gere por partes).
- Confirme os `voice_id` premade no painel (Voices → ID). Conversas usam a voz do
  sistema por ora.

## Próximos passos

- Gerar os MP3 com a chave do ElevenLabs.
- Expandir a biblioteca (reexecutar o workflow → `build-content.py`).
- Versionar/deploy em `~/Documents/GitHub` quando quiser.
