import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, data) {
      state.user = data;
      localStorage.setItem('user', JSON.stringify(data))
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    },
    CLEAR_USER_DATA(state) {
      localStorage.removeItem('user');
      location.reload()
    }
  },
  actions: {
    register ({ commit }, credential) {
      return axios.post('//localhost:3000/register', credential).then(({ data }) => {
        console.log('user register data is: ', data)
        commit('SET_USER_DATA', data)
      })
    },
    login ({ commit }, credential) {
      return axios.post('//localhost:3000/login', credential).then(({ data }) => {
        console.log('user login data is: ', data)
        commit('SET_USER_DATA', data)
      })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})
