/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )

      Notification.requestPermission().then( (result) => {
        
        if( result == 'granted') {
          console.log('notification accepté');


          // const subscription = await serviceWorker.pushManager.subscribe({ userVisibleOnly: true,       applicationServerKey: urlBase64ToUint8Array(window.publicKey) });
          // let keys = subscription.toJSON().keys;
        } else {
          console.log('refusé');
        }
        // console.log(result)
      })
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
