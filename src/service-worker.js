self.__precacheManifest = [].concat(self.__precacheManifest || [])
// permet d'acceder au precacheManifest

// eslint-disable-next-line no-undef 
workbox.setConfig({
  debug: true
})


// eslint-disable-next-line no-undef 
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// eslint-disable-next-line no-undef 
workbox.routing.registerRoute(
  // new RegExp(`http://(.*)`),

  // new RegExp(`http://www.bloowatch.org/(.*)`),
  new RegExp(`/list`),
  // new RegExp(`http://localhost:8887/species/(.*)`),
  // stratégie de mise en cache. Exemple avec CacheFirst
  // eslint-disable-next-line no-undef 
  new workbox.strategies.CacheFirst({
    // Donner un nom au chache, c'est pour debug
    cacheName: 'species',
    // MISE EN CACHE SEUEMENT DES METHOD GET
    method: "GET",
    // seulement des statut entre 0 et 200
    cacheableResponse: { statuses: [0, 200]},
    // ajout de plugins
    plugins: [
      // Expiration de plugins. Gérer la durée de vie du chache d'expiration des page caché
      // Ici, on prépfère gérer plutot le nom de req max
      // eslint-disable-next-line no-undef 
      new workbox.expiration.Plugin({
        // 30 requete max (après ca supprime)
        maxEntries: 30
      })
    ]
  })
)
// eslint-disable-next-line no-undef 
workbox.routing.registerRoute(
  // new RegExp(`http://(.*)`),

  // new RegExp(`http://www.bloowatch.org/(.*)`),
  // new RegExp(`http://localhost:8887/list`),
  new RegExp(`/species/(.*)`),
  // stratégie de mise en cache. Exemple avec CacheFirst
  // eslint-disable-next-line no-undef 
  new workbox.strategies.CacheFirst({
    // Donner un nom au chache, c'est pour debug
    cacheName: 'species',
    // MISE EN CACHE SEUEMENT DES METHOD GET
    method: "GET",
    // seulement des statut entre 0 et 200
    cacheableResponse: { statuses: [0, 200]},
    // ajout de plugins
    plugins: [
      // Expiration de plugins. Gérer la durée de vie du chache d'expiration des page caché
      // Ici, on prépfère gérer plutot le nom de req max
      // eslint-disable-next-line no-undef 
      new workbox.expiration.Plugin({
        // 30 requete max (après ca supprime)
        maxEntries: 30
      })
    ]
  })
)
// eslint-disable-next-line no-undef 
workbox.routing.registerRoute(
  // new RegExp(`http://(.*)`),

  new RegExp(`http://www.bloowatch.org/(.*)`),
  // new RegExp(`http://localhost:8887/list`),
  // new RegExp(`http://localhost:8887/species/(.*)`),
  // stratégie de mise en cache. Exemple avec CacheFirst
  // eslint-disable-next-line no-undef 
  new workbox.strategies.CacheFirst({
    // Donner un nom au chache, c'est pour debug
    cacheName: 'species',
    // MISE EN CACHE SEUEMENT DES METHOD GET
    method: "GET",
    // seulement des statut entre 0 et 200
    cacheableResponse: { statuses: [0, 200]},
    // ajout de plugins
    plugins: [
      // Expiration de plugins. Gérer la durée de vie du chache d'expiration des page caché
      // Ici, on prépfère gérer plutot le nom de req max
      // eslint-disable-next-line no-undef 
      new workbox.expiration.Plugin({
        // 30 requete max (après ca supprime)
        maxEntries: 30
      })
    ]
  })
)

// let clickUrl

// event push n'est pas dans le DOm
// il s'active que ors que l'api notification ok
// notre service worker est comme un api (sur lequel on fait une requete)

// récupe notif de la part d'un serveur
self.addEventListener('push', (event) => {
  // console.log(event.data.text());
  let pushMessage = event.data.text();
  // on aurait pu json()

  // Option notification
  const options = {
    // body = message de la notif
    body: pushMessage,
    // basé du dossier public
    icon: './img/safari-pinned-tab.svg',
    image: './img/safari-pinned-tab.svg',
    vibrate: [200, 100, 200, 100],
    tag: 'vibration-sample'
  }

  //permet qu'une fois la notif recu, cela va lancé le code pour affiché une notif
  event.waitUntil(
    self.registration.showNotification(pushMessage, options)
  )
})

self.addEventListener('notificationclick', (event) => {
  // lsqon click sur la notifi, il se passe qqch

  // on la ferme
  event.notification.close()

  // rediriger vers un nouvel url
  // redirection au niveau serviceWorker. il faut utiliser clients
  const promiseChain = clients.openWindow('http://127.0.0.1:8887/')

  event.waitUntil(
    promiseChain
  )
})