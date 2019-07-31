import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: '',
    blogId: ''
  },
  actions: {},
  mutations: {
    setStatus (state, flag) {
      state.isLogin = flag
    },
    setUserName (state, name) {
      state.userName = name
    },
    setBlogId (state, id) {
      state.blogId = id
    }
  }
})
