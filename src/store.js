import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: {
      latitude: 47.41322,
      longitude: -1.219482
    },
    // myLocation: {
    //   latitude: 0,
    //   longitude: 0
    // }
  },
  mutations: {
    SAVE_BEER(state, payload) {
      state.beers = payload
    },
    // GET_MY_LOCATION(state, payload) {
    //   state.myLocation = payload
    // }
  },
  actions: {
    beer_saved({
      commit,
      state
    }, payload) {
      commit('SAVE_BEER', payload)
    },

    // getMyLocation({
    //   commit,
    //   state
    // }, payload) {
    //   commit('GET_MY_LOCATION', payload)
    // }
  }
})