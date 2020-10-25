import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBx7rD7_o6cdM8dGxPTBYbd06ZQ-XCQcYE",
  authDomain: "vue-event-manager.firebaseapp.com",
  databaseURL: "https://vue-event-manager.firebaseio.com",
  projectId: "vue-event-manager",
  storageBucket: "vue-event-manager.appspot.com",
  messagingSenderId: "350039260371",
  appId: "1:350039260371:web:8a49521b44434d29b86826"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
