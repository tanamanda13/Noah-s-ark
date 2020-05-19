self.__precacheManifest = [].concat(self.__precacheManifest || [])
// permet d'acceder au precacheManifest

workbox.setConfig({
  debug: true
})


// eslint-disable-next-line no-undef 
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// eslint-disable-next-line no-undef 
workbox.routing.registerRoute(
  // new RegExp(`http://(.*)`),
  new RegExp(`http://localhost:8887/list`),
  // new RegExp(`http://localhost:8080/species/(.*)`),
  // stratégie de mise en cache. Exemple avec CacheFirst
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
      new workbox.expiration.Plugin({
        // 30 requete max (après ca supprime)
        maxEntries: 30
      })
    ]
  })
)
