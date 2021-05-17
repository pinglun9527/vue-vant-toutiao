import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
  },
  modules: {
  }
})
