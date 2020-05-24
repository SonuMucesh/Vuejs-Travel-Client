import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router'
import SearchPage from './components/SearchPage';
import Results from './components/Results';

Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {
    path: '/',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/Results',
    name: 'Results',
    component: Results
  },
]

const  router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

