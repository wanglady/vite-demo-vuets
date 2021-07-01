import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count:2,
    }
  },
  getters: {
    getCount(state: any) {
      return  state.count * 2;
    },
  },
  mutations: {
    increment(state: any) {
      state.count++
      // state.count = count
    },
  },
   // 异步任务 不会改变state 通过 $store.dispath('doubleCount') 使用
  actions: {
    doubleCount(context) {
      context.commit("doubleCount");
    },
  },
  modules: {},
})
