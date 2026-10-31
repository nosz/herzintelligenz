/* Herzintelligenz - Service Worker. VERSION muss mit VERSION in index.html uebereinstimmen. */
const VERSION = "1.2.18";
const CACHE = "herzintelligenz-" + VERSION;
const CORE = ["./", "index.html", "manifest.webmanifest"];
const OPTIONAL = ["favicon.png", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "herzi-launch-favicon.png", "herzi-launch-apple.png", "herzi-launch-192.png", "herzi-launch-512.png", "herzi-launch-maskable-512.png", "herzintelligenz_vorschau.jpg", "flags/at.svg", "flags/bay.svg", "flags/ber.svg", "flags/bn.svg", "flags/ch.svg", "flags/cs.svg", "flags/de.svg", "flags/el.svg", "flags/en.svg", "flags/es.svg", "flags/esar.svg", "flags/fr.svg", "flags/hes.svg", "flags/hr.svg", "flags/hu.svg", "flags/it.svg", "flags/kk.svg", "flags/ja.svg", "flags/mo.svg", "flags/nds.svg", "flags/nl.svg", "flags/no.svg", "flags/pl.svg", "flags/pt.svg", "flags/ptbr.svg", "flags/ru.svg", "flags/sax.svg", "flags/sq.svg","flags/sv.svg", "flags/swg.svg", "flags/tr.svg", "flags/uk.svg", "flags/vi.svg", "flags/vls.svg", "flags/zh.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).then(() => Promise.allSettled(OPTIONAL.map(u => c.add(u)))))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n.startsWith("herzintelligenz-") && n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener("message", e => { if(e.data === "SKIP_WAITING") self.skipWaiting(); });
const timeout = (p, ms) => new Promise((res, rej) => { const t = setTimeout(() => rej(new Error("timeout")), ms); p.then(v => { clearTimeout(t); res(v); }, e => { clearTimeout(t); rej(e); }); });
self.addEventListener("fetch", e => {
  const r = e.request; if(r.method !== "GET") return; const u = new URL(r.url); if(u.origin !== location.origin) return;
  if(r.mode === "navigate"){
    e.respondWith(timeout(fetch(r), 4000).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put("index.html", cp)); return res; }).catch(() => caches.match("index.html", {ignoreSearch:true}).then(x => x || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(r, {ignoreSearch:true}).then(hit => {
    const net = fetch(r).then(res => { if(res && res.ok){ const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});