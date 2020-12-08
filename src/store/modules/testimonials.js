  import api from '../config'
  const testimonialsService='testimonials'
  const state = {
    testimonials: null
  }
  const mutations={
    TESTIMONIALS_RESPONSE(state, testimonials) {
      state.testimonials = testimonials
    }
  }
  const actions = {
    getTestimonials({commit}){
      return new Promise((resolve,reject)=>{
        api
          .get(`${testimonialsService}`)
          .then((response) => {
            commit('TESTIMONIALS_RESPONSE', response.data)
            resolve(response);
          })
          .catch(error=>{
            reject(error)
          })
      })
    }
  }

 export default {
   namespaced: true,
   state,
   mutations,
   actions
 }
