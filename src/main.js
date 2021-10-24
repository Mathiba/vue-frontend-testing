import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue';
import ClientsList from './components/ClientList.vue';
import ContactForm from './components/ClientForm.vue';
//import Auth from './components'

const routes = [
  { path: '/clients', component: ClientsList },
  { path: '/contacts', component: ContactForm }
  
]

/*const routes = [
  { path: '/clients', component: Dashboard, 
    redirect_url: 'http://localhost:8080/implicit/callback'
  },

]*/

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')
