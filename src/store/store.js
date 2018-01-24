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
    notes: ''
  },
  getters: {
        // getSingleProject: (state, getters) => (id) => {
        //   return state.projects.find(project => project.id === id)
        // }
  },
  mutations: {
        // addNode: state => {
        //   state.projectNode.push({
        //     x:100, y:100, r:40, stroke:'green', strokeWidth:4, fill:'yellow'
        //   });
        // }
        // reducePrice: (state, payload) => {
        //     state.products.forEach( product => {
        //         product.price -= payload
        //     });
        // }
  },
  actions: {
        // addNode: context => {
        //   context.commit('addNode');
        // }
        // reducePrice: (context, payload) => {
        //     setTimeout(function(){ // reach out for data
        //         context.commit('reducePrice', payload);
        //     }, 2000);
        // }
  }
})
