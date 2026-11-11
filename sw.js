const CACHE='followlens-static-v3';
const CORE=['https://im-mohid.github.io/Followlens/','https://im-mohid.github.io/Followlens/index.html','https://im-mohid.github.io/Followlens/favicon.svg','https://im-mohid.github.io/Followlens/manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim();});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith(fetch(request).then(response=>{
   if(response.ok && request.destination!=='document'){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}
   return response;
 }).catch(()=>caches.match(request).then(cached=>cached||caches.match('https://im-mohid.github.io/Followlens/'))));
});
