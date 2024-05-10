const cacheName = 'my-app-cache-v1';
const filesToCache = ['/', '/index.html', '/styles.css', '/script.js', '/icons/we-72.png', '/icons/we-96.png', '/icons/we-128.png', '/icons/we-142.png', '/icons/we-152.png', '/icons/we-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(filesToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
