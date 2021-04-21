const staticLove = "❤bitcoin"
const assets = [
  "/",
  "/index.html",
  "/js/app.js"
  ]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticLove).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('fetch', function(event) {});

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/service-worker.js') }
