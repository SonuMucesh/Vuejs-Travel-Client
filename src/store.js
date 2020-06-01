import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        flights: [],
        flightID: 0
    },
    mutations: {
        change(state, flights) {
            state.flights = flights
        },
        change2(state2, flightID){
            state2.flightID = flightID
        }
    },
    getters: {
        flights: state => state.flights,
        flightID: state2 => state2.flightID
    }
})
