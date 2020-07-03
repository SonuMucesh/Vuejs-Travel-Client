import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router'
import SearchPage from './components/SearchPage';
import Results from './components/Results';
import FlightBooking from './components/FlightBooking';
import BookingItinerary from './components/BookingItinerary';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
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
    {
        path: '/FlightBooking',
        name: 'FlightBooking',
        component: FlightBooking
    },
    {
        path: '/BookingItinerary',
        name: 'BookingItinerary',
        component: BookingItinerary
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

