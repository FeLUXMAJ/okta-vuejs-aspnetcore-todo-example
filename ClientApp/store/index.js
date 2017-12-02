import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
