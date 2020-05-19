/**
 * Documentation PWA :
 * https://cli.vuejs.org/core-plugins/pwa.html#configuration
 */
module.exports = {
  pwa: {
    name: 'Vue PWA',
    themeColor: '#2450d7',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen'
    },

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    }
  }
}
