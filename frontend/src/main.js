import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

import routes from './routes'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(VueRouter)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');

Vue.use(VueCookies)



const router = new VueRouter({
  mode: 'history',
  routes
});


Vue.prototype.$eventBus = new Vue(); /* Global event bus */

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
