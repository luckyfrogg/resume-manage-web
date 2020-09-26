import { createStore } from 'vuex'

export default createStore({
  state: {
    collapse: false,
  },
   getters : {
    collapse: (state) => state.collapse,
  },
  mutations: {
    toggleCollapse: (state) => {
      state.collapse = !state.collapse;
      console.log(state.collapse)
    },
  },
  actions: {
    toggleCollapse({ commit }) {
      commit("toggleCollapse");
    },
  },
  modules: {
  }
})
