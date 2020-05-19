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
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    }
  }
}
