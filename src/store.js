import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        flights: [],
        flightID: 0,
        flightbooking: [],
    },
    mutations: {
        change(state, flights) {
            state.flights = flights
        },
        change2(state2, flightID){
            state2.flightID = flightID
        },
        change3(state3, flightbooking){
            state3.flightbooking = flightbooking
        }
    },
    getters: {
        flights: state => state.flights,
        flightID: state2 => state2.flightID,
        flightbooking: state3 => state3.flightbooking
    }
})
