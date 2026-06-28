/* Adivinha a Imagem — substantivos CONCRETOS e ilustráveis (jogo de produção).
   Dataset próprio e separado dos ITEMS (que são abstratos: colocações/expressões).
   Campos:
     id        identificador
     word      forma canônica (exibida ao revelar e usada na correção/áudio)
     accept    respostas válidas (sinônimos/plural) — comparação normalizada e tolerante
     article   "a"/"an" (aceita com ou sem artigo)
     pt        tradução
     clue_en   dica em inglês (penúltimo degrau da dica)
     svg       ilustração inline (viewBox 0 0 100 100, fill="currentColor" → herda o azul
               do tema; cortes em #eef3f8 = cor fixa do quadro pic-frame, funciona claro/escuro)
   IMPORTANTE: o <svg> é sempre a string fixa do dataset; nunca renderizar SVG vindo de input. */
const PICTURE_WORDS = [
  { id:'pic-sun', word:'sun', accept:['sun'], article:'a', pt:'sol', clue_en:'the star that lights up the day',
    svg:'<circle cx="50" cy="50" r="20" fill="currentColor"/><g stroke="currentColor" stroke-width="7" stroke-linecap="round"><line x1="50" y1="9" x2="50" y2="21"/><line x1="50" y1="79" x2="50" y2="91"/><line x1="9" y1="50" x2="21" y2="50"/><line x1="79" y1="50" x2="91" y2="50"/><line x1="22" y1="22" x2="30" y2="30"/><line x1="70" y1="70" x2="78" y2="78"/><line x1="70" y1="30" x2="78" y2="22"/><line x1="22" y1="78" x2="30" y2="70"/></g>' },

  { id:'pic-star', word:'star', accept:['star'], article:'a', pt:'estrela', clue_en:'it twinkles in the night sky',
    svg:'<path d="M50 8 L61 38 L93 39 L68 59 L78 92 L50 73 L22 92 L32 59 L7 39 L39 38 Z" fill="currentColor"/>' },

  { id:'pic-heart', word:'heart', accept:['heart'], article:'a', pt:'coração', clue_en:'the organ that pumps blood; the symbol of love',
    svg:'<path d="M50 85 C16 60 12 36 30 27 C41 21 50 29 50 38 C50 29 59 21 70 27 C88 36 84 60 50 85 Z" fill="currentColor"/>' },

  { id:'pic-house', word:'house', accept:['house','home'], article:'a', pt:'casa', clue_en:'a building where people live',
    svg:'<path d="M50 18 L88 50 L80 50 L80 84 L20 84 L20 50 L12 50 Z" fill="currentColor"/><rect x="43" y="60" width="14" height="24" fill="#eef3f8"/><rect x="28" y="56" width="12" height="12" fill="#eef3f8"/>' },

  { id:'pic-tree', word:'tree', accept:['tree'], article:'a', pt:'árvore', clue_en:'a tall plant with a trunk and leaves',
    svg:'<rect x="44" y="58" width="12" height="30" rx="2" fill="currentColor"/><g fill="currentColor"><circle cx="50" cy="36" r="18"/><circle cx="33" cy="48" r="14"/><circle cx="67" cy="48" r="14"/><circle cx="50" cy="52" r="17"/></g>' },

  { id:'pic-cloud', word:'cloud', accept:['cloud'], article:'a', pt:'nuvem', clue_en:'a white fluffy shape floating in the sky',
    svg:'<g fill="currentColor"><circle cx="34" cy="58" r="15"/><circle cx="52" cy="48" r="20"/><circle cx="68" cy="58" r="14"/><rect x="32" y="56" width="38" height="18" rx="9"/></g>' },

  { id:'pic-moon', word:'moon', accept:['moon'], article:'a', pt:'lua', clue_en:'it shines in the sky at night',
    svg:'<path d="M62 16 a36 36 0 1 0 0 68 a28 28 0 1 1 0 -68 Z" fill="currentColor"/>' },

  { id:'pic-key', word:'key', accept:['key'], article:'a', pt:'chave', clue_en:'you use it to open a lock',
    svg:'<circle cx="32" cy="40" r="17" fill="currentColor"/><circle cx="32" cy="40" r="6" fill="#eef3f8"/><rect x="44" y="36" width="40" height="8" rx="2" fill="currentColor"/><rect x="66" y="44" width="7" height="11" fill="currentColor"/><rect x="77" y="44" width="7" height="11" fill="currentColor"/>' },

  { id:'pic-cup', word:'cup', accept:['cup','mug'], article:'a', pt:'xícara / caneca', clue_en:'you drink coffee or tea from it',
    svg:'<path d="M28 34 L66 34 L62 78 L32 78 Z" fill="currentColor"/><path d="M66 42 q18 1 18 17 q0 15 -18 14" fill="none" stroke="currentColor" stroke-width="7"/>' },

  { id:'pic-book', word:'book', accept:['book'], article:'a', pt:'livro', clue_en:'you read it; it has pages',
    svg:'<path d="M50 30 C40 24 24 24 14 28 L14 76 C24 72 40 72 50 78 C60 72 76 72 86 76 L86 28 C76 24 60 24 50 30 Z" fill="currentColor"/><path d="M50 30 L50 78" stroke="#eef3f8" stroke-width="3"/><path d="M22 41 H40 M22 51 H40 M60 41 H78 M60 51 H78" stroke="#eef3f8" stroke-width="3"/>' },

  { id:'pic-umbrella', word:'umbrella', accept:['umbrella'], article:'an', pt:'guarda-chuva', clue_en:'it keeps you dry in the rain',
    svg:'<path d="M12 52 a38 38 0 0 1 76 0 Z" fill="currentColor"/><rect x="47" y="52" width="6" height="30" fill="currentColor"/><path d="M47 82 q0 9 -10 9" fill="none" stroke="currentColor" stroke-width="6"/>' },

  { id:'pic-balloon', word:'balloon', accept:['balloon'], article:'a', pt:'balão / bexiga', clue_en:'you fill it with air at parties',
    svg:'<ellipse cx="50" cy="40" rx="24" ry="28" fill="currentColor"/><path d="M46 67 L54 67 L50 76 Z" fill="currentColor"/><path d="M50 76 q9 13 -3 23" fill="none" stroke="currentColor" stroke-width="3"/>' },

  { id:'pic-fish', word:'fish', accept:['fish'], article:'a', pt:'peixe', clue_en:'an animal that lives and swims in water',
    svg:'<path d="M70 50 L92 34 L92 66 Z" fill="currentColor"/><ellipse cx="46" cy="50" rx="30" ry="18" fill="currentColor"/><circle cx="32" cy="44" r="4" fill="#eef3f8"/>' },

  { id:'pic-apple', word:'apple', accept:['apple'], article:'an', pt:'maçã', clue_en:'a round red or green fruit',
    svg:'<path d="M50 36 C42 27 22 31 22 52 C22 73 39 85 50 85 C61 85 78 73 78 52 C78 31 58 27 50 36 Z" fill="currentColor"/><rect x="48" y="20" width="4" height="14" rx="2" fill="currentColor"/><path d="M53 27 C62 19 72 22 70 31 C61 35 54 33 53 27 Z" fill="currentColor"/>' },

  { id:'pic-car', word:'car', accept:['car','automobile'], article:'a', pt:'carro', clue_en:'a vehicle with four wheels that you drive',
    svg:'<path d="M14 66 L24 48 L70 48 L84 64 L86 66 L86 74 L14 74 Z" fill="currentColor"/><path d="M30 51 L42 51 L42 61 L22 61 Z" fill="#eef3f8"/><path d="M48 51 L64 51 L74 61 L48 61 Z" fill="#eef3f8"/><circle cx="32" cy="74" r="10" fill="currentColor"/><circle cx="68" cy="74" r="10" fill="currentColor"/><circle cx="32" cy="74" r="4" fill="#eef3f8"/><circle cx="68" cy="74" r="4" fill="#eef3f8"/>' },

  { id:'pic-clock', word:'clock', accept:['clock'], article:'a', pt:'relógio (de parede)', clue_en:'it hangs on a wall and tells the time',
    svg:'<circle cx="50" cy="50" r="36" fill="currentColor"/><circle cx="50" cy="50" r="28" fill="#eef3f8"/><rect x="47" y="28" width="6" height="24" rx="3" fill="currentColor"/><rect x="50" y="47" width="20" height="6" rx="3" fill="currentColor"/><circle cx="50" cy="50" r="4" fill="currentColor"/>' },

  { id:'pic-gift', word:'gift', accept:['gift','present'], article:'a', pt:'presente', clue_en:'something wrapped that you give to someone',
    svg:'<rect x="24" y="46" width="52" height="38" rx="3" fill="currentColor"/><rect x="20" y="36" width="60" height="12" rx="3" fill="currentColor"/><rect x="45" y="36" width="10" height="48" fill="#eef3f8"/><circle cx="40" cy="32" r="8" fill="currentColor"/><circle cx="60" cy="32" r="8" fill="currentColor"/><circle cx="40" cy="32" r="3" fill="#eef3f8"/><circle cx="60" cy="32" r="3" fill="#eef3f8"/>' },

  { id:'pic-flower', word:'flower', accept:['flower'], article:'a', pt:'flor', clue_en:'a colorful part of a plant',
    svg:'<rect x="48" y="48" width="4" height="40" fill="currentColor"/><g fill="currentColor"><circle cx="50" cy="28" r="11"/><circle cx="72" cy="42" r="11"/><circle cx="63" cy="68" r="11"/><circle cx="37" cy="68" r="11"/><circle cx="28" cy="42" r="11"/></g><circle cx="50" cy="48" r="11" fill="#eef3f8"/><circle cx="50" cy="48" r="6" fill="currentColor"/>' },

  { id:'pic-boat', word:'boat', accept:['boat','ship','sailboat'], article:'a', pt:'barco / veleiro', clue_en:'it floats and carries you on water',
    svg:'<rect x="48" y="14" width="3" height="50" fill="currentColor"/><path d="M50 16 L50 60 L80 60 Z" fill="currentColor"/><path d="M44 24 L44 60 L20 60 Z" fill="currentColor"/><path d="M16 64 L84 64 L74 80 L26 80 Z" fill="currentColor"/>' },

  { id:'pic-envelope', word:'envelope', accept:['envelope','letter'], article:'an', pt:'envelope / carta', clue_en:'you put a letter inside it to mail it',
    svg:'<rect x="18" y="32" width="64" height="40" rx="3" fill="currentColor"/><path d="M18 34 L50 56 L82 34" fill="none" stroke="#eef3f8" stroke-width="4"/><path d="M20 70 L44 51 M80 70 L56 51" stroke="#eef3f8" stroke-width="3"/>' }
];
