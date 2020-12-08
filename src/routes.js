import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const asyncComponent = (path) => import(`@/components/Pages/${path}`)
const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect:'/testimonials'
    },
    {
      path:'/testimonials',
      name:'Testimonials',
      component: ()=>asyncComponent('Testimonials/TestimonialsOverview.vue')
    }
  ]
})

export default router