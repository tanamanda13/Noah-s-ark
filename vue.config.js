/**
 * Documentation PWA :
 * https://cli.vuejs.org/core-plugins/pwa.html#configuration
 */
module.exports = {
  pwa: {
    name: 'Help animals',
    themeColor: '#062f11',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen',
      icons: [
        {
            'src': 'img/icons/wildlife192.png',
            'sizes': '192x192',
            'type': 'image/png',
        },
        {
            'src': 'img/icons/wildlife512.png',
            'sizes': '512x512',
            'type': 'image/png',
        },
      ],
    },

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    },

    iconPaths:{
      favicon32: 'img/icons/wildlife32.png',
      favicon16: 'img/icons/wildlife16.png',
      appleTouchIcon: 'img/icons/wildlife152.png',
      maskIcon: 'img/icons/wildlife-svg.svg',
      msTileImage: 'img/icons/wildlife144.png'
    } 

  }
}
