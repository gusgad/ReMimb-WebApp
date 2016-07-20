// Name of the cache that we install
var CACHE_NAME = 'my-site-cache-v1';

// Array of files needed to be cached
var urlsToCache = [
  '/assets/css/main.css',
  '/app/',
  '/',
  '/node_modules/angular/angular.min.js',
  '/node_modules/firebase/firebase.min.js'
];

// Waiting for install event from app.js
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
    // Opening the cache method
    caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            // Caching the files
            return cache.addAll(urlsToCache);
        })
    );
});

// Waiting for fetch event to fire
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});