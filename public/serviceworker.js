const CACHE_NAME = "version-1";
const urlsToCache = [ '/','index.html', 'offline.html', '/images/bg.jpg' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html', '/images/bg.jpg'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});


    navigator.serviceWorker.controller.postMessage({ 
   type: `IS_OFFLINE`
   // add more properties if needed
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'IS_OFFLINE') {
    // take relevant actions
  }


});
