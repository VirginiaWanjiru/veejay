<template>
    <section class="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <blockquote>{{ testimonial.quote }}</blockquote>
        <p>- {{ testimonial.author }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Testimonials",
    data() {
      return {
        testimonials: [
          { id: 1, quote: "Amazing project manager!", author: "Client A" },
          { id: 2, quote: "Exceptional data analyst.", author: "Client B" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .testimonials {
    padding: 40px;
    text-align: center;
  }
  blockquote {
    font-style: italic;
    color: #555;
  }
  </style>
  