<template>
  <el-row v-if="showTestimonialCards">
   <div class="testimonials-overview" >
      <testimonial-card
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        :testimonial-id="testimonial.id"
        :full-name="testimonial.fullName"
        :graduation-status="testimonial.graduationStatus"
        :quote="testimonial.quote"
        :description="testimonial.description"
        :icon="testimonial.icon"/>
   </div>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Testimonial from '@/components/Pages/Testimonials/Testimonial-Components/Testimonial'
export default {
  name: 'TestimonialOverview',
  components: {
    'testimonial-card': Testimonial
  },
  data () {
    return {
      showTestimonialCards: false
    }
  },
  computed: {
    ...mapState({
      testimonials: state => state['testimonials'].testimonials
    })
  },
  methods: {
    ...mapActions({
      getTestimonials:'testimonials/getTestimonials'
    })
  },
  created () {
    this.getTestimonials()
      .then(() => {
        this.showTestimonialCards = true
      })
  }
}
</script>

<style>
.testimonials-overview {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 25px;
}
@media only screen and (max-width: 375px) {
  .testimonials-overview {
    display: flex;
    flex-direction: column;
  }
}
</style>
