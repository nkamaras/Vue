<template>
 <div :class="`testimonial-card-${testimonialId}`">
    <div :class="`testimonial-header-${testimonialId}`">
      <div :class="`testimonial-badge-${testimonialId}`">
        <img :class="`testimonial-icon-${testimonialId}`" :src="require(`@/assets/${icon}`)"/>
      </div>
      <div :class="`testimonial-graduate-${testimonialId}`">
        <p :class="`testimonial-graduate-name-${testimonialId}`">{{fullName}}</p>
        <p :class="`testimonial-graduate-status-${testimonialId}`">{{graduationStatus}}</p>
      </div>
    </div>
    <h5 :class="`testimonial-quote-${testimonialId}`">{{quote}}</h5>
    <p :class="`testimonial-description-${testimonialId}`">{{description}}</p>
  </div>
</template>

<script>
export default {
  name:'TestimonialCard',
  props: {
    testimonialId: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true   
    },
    graduationStatus: {
      type: String,
      required: true
    },
    quote: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
[class*="testimonial-card-"] {
  padding: 1.5em 2em;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px 0 lightgrey;
}
[class*="testimonial-header-"] {
  display: flex;
  flex-direction: row;
} 
[class*="testimonial-graduate-"] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
}
[class*="testimonial-header-"] [class*="testimonial-quote-"] {
  margin-top: 2em; 
  line-height: 1.25;
  font-weight: bold;
}
[class*="testimonial-header-"] [class*="testimonial-description-"] {
  margin-top: 1.25em;
  line-height: 1.75;
}
[class*="testimonial-icon-"] {
  border-radius: 50%
}
.testimonial-card-1 {
  background-color:hsl(263, 55%, 52%);
  background-image: url("~@/assets/bg-pattern-quotation.svg");
  background-repeat: no-repeat;
  background-position: 85% 0;
  background-size: 9rem;
  grid-column-start: 1;
  grid-column-end: 3;
}
.testimonial-graduate-name-1{
  color: white;
}
.testimonial-graduate-status-1{
  color: white;
  opacity: 50%;
}
.testimonial-quote-1 {
  color: white;
}
.testimonial-description-1 {
  color: white;
  opacity: 70%;
}
.testimonial-icon-1 {
  border: 3px solid white;
}
.testimonial-card-2 {
  background-color: hsl(217, 19%, 35%);
  grid-column-start: 3;
  grid-column-end: 4;
}
.testimonial-graduate-name-2{
  color: white;
}
.testimonial-graduate-status-2{
  margin-top: -10px;
  color: white;
  opacity: 50%;
}
.testimonial-quote-2 {
  color: white;
}
.testimonial-description-2 {
  color: white;
  opacity: 70%;
}
.testimonial-card-3 {
  grid-row-start: 2;
}
.testimonial-graduate-status-3{
  margin-top: -10px;
  opacity: 50%;
}
.testimonial-description-3 {
  opacity: 70%;
}
.testimonial-card-4 {
  background-color: hsl(219, 29%, 14%);
  grid-column-start: 2;
  grid-column-end: 4;
}
.testimonial-graduate-name-4{
  color: white;
}
.testimonial-graduate-status-4{
  margin-top: -10px;
  color: white;
  opacity: 50%
}
.testimonial-quote-4 {
  color: white;
}
.testimonial-description-4 {
  color: white;
  opacity: 70%;
}
.testimonial-icon-4 {
  border: 4px solid purple;
}
.testimonial-card-5 {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
}
.testimonial-graduate-status-5{
  margin-top: -10px;
  opacity: 50%;
}
.testimonial-description-5{
  opacity: 70%;
}
</style>
