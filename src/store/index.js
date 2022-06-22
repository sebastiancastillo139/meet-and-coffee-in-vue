import Vue from 'vue'
import Vuex from 'vuex'
import PreviousEvents from '../assets/PreviousEvents'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    previousEvents: PreviousEvents
  },
  getters: {
    getPreviousEvents(state){
      return state.previousEvents
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
