import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './store'
import vuetify from './plugins/vuetify'
import Calendario from './components/Calendario'

Vue.use(VueRouter);

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'events',
      component: Calendario
    }
  ]
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
