/* Estudar Inglês — service worker (PWA)
   Estratégia pensada para um app que muda com frequência e NÃO pode travar atualização:
   - Navegação (abrir o app): network-first -> sempre pega o index.html mais novo quando online;
     offline, cai no cache (o app abre mesmo sem internet).
   - Supabase (dados do usuário): NUNCA passa pelo cache. Sempre rede.
   - Código próprio do app same-origin (data/*.js, engine/*.js, .json, .css):
     network-first com fallback pro cache. Assim um deploy novo nunca serve JS velho;
     offline, ainda funciona pelo cache.
   - Áudio estático (pasta audio/, .m4a/.mp3): cache-first (arquivos imutáveis, nomeados por
     item+voz), SEM interferir na atualização do app (navegação e código já são network-first).
     É o "no máximo cache-first" combinado. Obs.: o iOS pede mídia com Range (resposta 206), que
     não é cacheada; então offline o áudio normalmente cai no Web Speech do app (degradação ok).
   - Demais GET (CDNs externos: supabase-js, etc.): stale-while-revalidate.
   Suba a versão do CACHE quando quiser forçar limpeza do cache antigo. */
var CACHE = 'ingles-v2';
var SHELL = ['./', './index.html', './manifest.json',
             './apple-touch-icon.png', './icon-192.png', './icon-512.png',
             './icon-maskable-512.png',
             './data/content.js', './data/conversations.js', './data/test.js',
             './data/spelling.js', './engine/srs.js'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // add individual tolerante: se 1 recurso falhar, não derruba a instalação inteira.
      return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
    })
    // NÃO chama skipWaiting aqui: a versão nova fica "esperando" e só assume quando o
    // usuário toca "Atualizar o app" (evita recarregar a tela de surpresa no meio do uso).
  );
});

// O app pede a ativação imediata da versão nova (botão/aviso "Atualizar o app").
self.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;                        // não toca em POST/PUT/etc.
  var url = new URL(req.url);
  var sameOrigin = (url.origin === self.location.origin);

  // Dados do usuário (Supabase): deixa passar direto, sem cache.
  if (/supabase\.(co|in)/.test(url.hostname)) return;

  // Abrir o app: network-first com fallback pro cache (offline).
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        // Só cacheia o shell se a resposta for boa: evita gravar 404/5xx do CDN
        // durante um deploy (fetch resolve mesmo com erro) e envenenar o offline.
        if (res && res.ok && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
        }
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (m) { return m || caches.match('./'); });
      })
    );
    return;
  }

  // Áudio estático (pasta audio/): cache-first. Imutável -> serve do cache, busca na rede só se faltar.
  if (sameOrigin && /\/audio\/[^?]*\.(m4a|mp3|aac|wav)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (res) {
          if (res && res.status === 200) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        });
      })
    );
    return;
  }

  // Código próprio do app (same-origin, não-áudio): network-first com fallback pro cache.
  // Evita servir data/*.js ou engine/*.js velhos após um deploy.
  if (sameOrigin) {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return caches.match(req); })
    );
    return;
  }

  // CDNs externos: stale-while-revalidate.
  e.respondWith(
    caches.match(req).then(function (cached) {
      var net = fetch(req).then(function (res) {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || net;
    })
  );
});
