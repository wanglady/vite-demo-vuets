import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0,
    }
  },
  getters: {
    getCount(state: any) {
      return state.count
    },
  },
  mutations: {
    increment(state: any) {
      state.count++
    },
  },
  actions: {},
  modules: {},
})
