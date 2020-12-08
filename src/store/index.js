import Vue from 'vue'
import Vuex from 'vuex'
import testimonials from './modules/testimonials'

Vue.use(Vuex)

export const store=new Vuex.Store({
  state: {}, 
  modules: {
    testimonials
  }
})