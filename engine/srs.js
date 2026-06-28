/**
 * srs.js — Motor de Repetição Espaçada (SRS)
 * -------------------------------------------------------------
 * Funções PURAS, sem DOM e sem localStorage. Recebem estado, devolvem
 * estado novo. Isso deixa o motor testável isolado (node) e fácil de
 * confiar — é o coração do app.
 *
 * Modelo: ladder de graduação com os intervalos do brief [1,3,7,16] dias,
 * e depois fator de facilidade (ease, estilo SM-2) para itens maduros.
 *
 * Estado de um item (um "card"), por perfil:
 *   { itemId, status, due, intervalDays, ease, reps, lapses,
 *     lastReviewed, lastGrade }
 *   status: 'new' | 'learning' | 'review' | 'lapsed'
 *   due:    data ISO 'YYYY-MM-DD' do próximo encontro
 */

const LEARNING_STEPS = [1, 3, 7, 16]; // dias (fase de aprendizado)
const EASE_START = 2.5;
const EASE_MIN = 1.3;

const GRADES = {
  AGAIN: 'again', // errou
  HARD: 'hard',   // acertou com dificuldade
  GOOD: 'good',   // acertou normal
  EASY: 'easy',   // acertou e foi fácil
};

/* ---------- Datas (ISO 'YYYY-MM-DD', sem surpresa de timezone) ---------- */

function toUTC(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
}

function addDays(iso, n) {
  return new Date(toUTC(iso) + n * 86400000).toISOString().slice(0, 10);
}

function daysBetween(a, b) {
  return Math.round((toUTC(b) - toUTC(a)) / 86400000);
}

function isDue(dueISO, todayISO) {
  return toUTC(dueISO) <= toUTC(todayISO);
}

/** Data de hoje no fuso local, como 'YYYY-MM-DD'. (Único ponto que lê o relógio.) */
function todayISO(now = new Date()) {
  const off = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - off).toISOString().slice(0, 10);
}

/* ---------------------------- Estado do card --------------------------- */

function newCardState(itemId, today) {
  return {
    itemId,
    status: 'new',
    due: today,
    intervalDays: 0,
    ease: EASE_START,
    reps: 0,
    lapses: 0,
    lastReviewed: null,
    lastGrade: null,
  };
}

const clampEase = (e) => Math.max(EASE_MIN, e);
const stepIndexFromInterval = (intervalDays) => LEARNING_STEPS.indexOf(intervalDays); // -1 se ainda novo

/**
 * deriveGrade — traduz o desempenho do mini-quiz numa nota do SRS.
 * Baixa fricção: erro => again; acerto => good; acerto + "foi fácil" => easy.
 * (HARD fica disponível para uso manual futuro, se quisermos.)
 */
function deriveGrade({ correct, markedEasy = false }) {
  if (!correct) return GRADES.AGAIN;
  return markedEasy ? GRADES.EASY : GRADES.GOOD;
}

/**
 * applyGrade — aplica uma nota e devolve um NOVO card (imutável).
 */
function applyGrade(card, grade, today) {
  const c = { ...card };
  c.lastReviewed = today;
  c.lastGrade = grade;

  // Errou: volta para o primeiro passo, perde ease, conta lapso.
  if (grade === GRADES.AGAIN) {
    if (c.status === 'review') c.lapses += 1;
    c.status = 'learning';
    c.reps = 0;
    c.intervalDays = LEARNING_STEPS[0];
    c.ease = clampEase(c.ease - 0.2);
    c.due = addDays(today, c.intervalDays);
    return c;
  }

  // Item maduro (review): intervalo cresce pelo ease.
  if (c.status === 'review') {
    let factor;
    if (grade === GRADES.HARD) { factor = 1.2; c.ease = clampEase(c.ease - 0.15); }
    else if (grade === GRADES.EASY) { factor = c.ease * 1.3; c.ease = c.ease + 0.15; }
    else { factor = c.ease; } // good
    c.intervalDays = Math.max(1, Math.round(c.intervalDays * factor));
    c.reps += 1;
    c.due = addDays(today, c.intervalDays);
    return c;
  }

  // Item novo/aprendendo: caminha pela ladder [1,3,7,16].
  let step = stepIndexFromInterval(c.intervalDays); // -1 se nunca visto
  if (grade === GRADES.GOOD) step += 1;
  else if (grade === GRADES.EASY) step += 2;       // "fácil" pula um passo
  else if (grade === GRADES.HARD) step = Math.max(0, step); // repete (ou entra no passo 0)

  if (grade === GRADES.HARD) c.ease = clampEase(c.ease - 0.15);
  if (grade === GRADES.EASY) c.ease = c.ease + 0.15;

  if (step < LEARNING_STEPS.length) {
    c.status = 'learning';
    c.intervalDays = LEARNING_STEPS[step];
    c.reps = Math.max(c.reps, step + 1);
    c.due = addDays(today, c.intervalDays);
  } else {
    // Graduou: vira "review". Primeiro intervalo = último passo × ease.
    c.status = 'review';
    const base = LEARNING_STEPS[LEARNING_STEPS.length - 1];
    const factor = grade === GRADES.EASY ? c.ease * 1.3 : c.ease;
    c.intervalDays = Math.max(1, Math.round(base * factor));
    c.reps += 1;
    c.due = addDays(today, c.intervalDays);
  }
  return c;
}

/* --------------------------- Seleção da sessão -------------------------- */

/**
 * selectSession — monta os itens do dia.
 *   reviews: cards vencidos (due <= hoje), mais atrasados primeiro, até maxReview.
 *   news:    itens que ainda não têm card, até newPerSession.
 *
 * @param {object[]} cards        cards existentes do perfil
 * @param {string[]} allItemIds   ids de TODOS os itens aprovados do pool
 */
function selectSession({ cards, allItemIds, today, newPerSession = 5, maxReview = 20 }) {
  const hasCard = new Set(cards.map((c) => c.itemId));

  const reviews = cards
    .filter((c) => c.status !== 'new' && isDue(c.due, today))
    .sort((a, b) => toUTC(a.due) - toUTC(b.due))
    .slice(0, maxReview)
    .map((c) => c.itemId);

  const news = allItemIds.filter((id) => !hasCard.has(id)).slice(0, newPerSession);

  return { reviews, news };
}

/** Quantos itens estão vencidos hoje (para o badge "X pra hoje" na Home). */
function dueCount(cards, today) {
  return cards.filter((c) => c.status !== 'new' && isDue(c.due, today)).length;
}

/**
 * selectSessionFiltered — como selectSession, mas os itens NOVOS respeitam
 * filtro de nível (levels) e tema. A REVISÃO ignora o filtro (você revê o que
 * vence, independente do tema do dia). É isso que faz Diego (B2-C1) e Débora
 * (C1-C2) receberem itens diferentes do mesmo pool compartilhado.
 *
 * @param {object[]} items  itens completos do pool (com .id, .cefr, .theme, .status)
 * @param {string[]|null} levels  ex.: ['C1','C2']; null = todos
 * @param {string|null} theme  ex.: 'hotel'; null/'mixed' = qualquer tema
 */
function selectSessionFiltered({ cards, items, today, newPerSession = 5, maxReview = 20, levels = null, theme = null }) {
  const hasCard = new Set(cards.map((c) => c.itemId));
  const reviews = cards
    .filter((c) => c.status !== 'new' && isDue(c.due, today))
    .sort((a, b) => toUTC(a.due) - toUTC(b.due))
    .slice(0, maxReview)
    .map((c) => c.itemId);
  let pool = items.filter((it) => it.status === 'approved' && !hasCard.has(it.id));
  if (levels && levels.length) pool = pool.filter((it) => levels.includes(it.cefr));
  if (theme && theme !== 'mixed') pool = pool.filter((it) => it.theme === theme);
  const news = pool.slice(0, newPerSession).map((it) => it.id);
  return { reviews, news };
}

/** Estatísticas de domínio para a tela de evolução. */
function masteryStats(cards) {
  let learning = 0, review = 0, mature = 0;
  for (const c of cards) {
    if (c.status === 'learning' || c.status === 'lapsed') learning++;
    if (c.status === 'review') review++;
    if (c.intervalDays >= 21) mature++; // ~3 semanas+ de intervalo = consolidado
  }
  return { total: cards.length, learning, review, mature };
}
