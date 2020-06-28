import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import VueClipboard from 'vue-clipboard2'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

Vue.use(VueClipboard)
 
const config = {
  apiKey: "AIzaSyDNE0rfWAmOOiratBy4uTCv1mI4fGpZEzA",
    authDomain: "chordapp-14409.firebaseapp.com",
    databaseURL: "https://chordapp-14409.firebaseio.com",
    projectId: "chordapp-14409",
    storageBucket: "chordapp-14409.appspot.com",
    messagingSenderId: "236558959893",
    appId: "1:236558959893:web:0beb16a5da1515ad98551c",
    measurementId: "G-8QH3HHQ0JR"
};

firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
