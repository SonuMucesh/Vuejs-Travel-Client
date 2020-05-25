import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        flights: []
    },
    mutations: {
        change(state, flights) {
            state.flights = flights
        }
    },
    getters: {
        flights: state => state.flights
    }
})
