const CACHE_NAME = "followlens-static-v1";
const BASE_PATH = "https://im-mohid.github.io/Followlens/";
const CORE = [
  BASE_PATH, BASE_PATH + "index.html", BASE_PATH + "bangla.html",
  BASE_PATH + "about.html", BASE_PATH + "privacy.html", BASE_PATH + "terms.html",
  BASE_PATH + "news.html", BASE_PATH + "favicon.svg", BASE_PATH + "manifest.webmanifest"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match(BASE_PATH + "index.html"))));
});
