import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    usersProfile: '',
    allCourses: '',
    learningCourses: '',
    completedCourses: '',
    currentNote: '',
    login: true,
    logout: false
  },
  getters: {
        // getSingleProject: (state, getters) => (id) => {
        //   return state.projects.find(project => project.id === id)
        // }
  },
  mutations: {
      login: state => {
      state.login = false
      state.logout = true
      },
      logout: state => {
            state.login = true
            state.logout = false
      }
  },
  actions: {
      login: context => {
      context.commit('login');
      },
      logout: context => {
      context.commit('logout');
      }
  }
})
