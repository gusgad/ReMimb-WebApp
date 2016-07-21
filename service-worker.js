// Name of the cache that we install
var CACHE_NAME = 'my-site-cache-v1';

// Array of files needed to be cached
var urlsToCache = [
  '/app/',
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
  var dataUrl = 'https://remimb-webapp-855cc.firebaseio.com/';
  if (event.request.url.indexOf(dataUrl) === 0) {  
    event.respondWith(  
      fetch(event.request)  
        .then(function(response) {  
          return caches.open(CACHE_NAME).then(function(cache) {  
            cache.put(event.request.url, response.clone());  
            console.log('[ServiceWorker] Fetched&Cached Data');  
            return response;  
          });  
        })  
    );
  } else {
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
     )
    }
});

// Purging the cache of unused data.
self.addEventListener('activate', function(event) {  
  console.log('ServiceWorker Activated');  
  event.waitUntil(  
    caches.keys().then(function(keyList) {  
      return Promise.all(keyList.map(function(key) {  
        console.log('ServiceWorker is removing old cache', key);  
        if (key !== CACHE_NAME) {  
          return caches.delete(key);  
        }  
      }));  
    })  
  );  
});
