<template>
    <div>
      <!-- Header with Navigation -->
      <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
        <b-navbar-brand href="#">My Luxury Portfolio</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-scroll-to="'#about'">About</b-nav-item>
          <b-nav-item v-scroll-to="'#skills'">Skills</b-nav-item>
          <b-nav-item v-scroll-to="'#portfolio'">Portfolio</b-nav-item>
          <b-nav-item v-scroll-to="'#contact'">Contact</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
  
      <!-- Hero Section with Image on the Right -->
      <section id="hero" class="hero bg-dark text-white d-flex align-items-center py-5" data-aos="fade-up">
        <div class="container d-flex justify-content-between">
          <div class="hero-text">
            <h1 class="display-4 font-weight-bold">Welcome to My Luxury Portfolio</h1>
            <p class="lead">Creating premium digital experiences with style and sophistication</p>
            <b-button v-scroll-to="'#about'" variant="light" size="lg" class="mt-3">Learn More</b-button>
          </div>
          <div class="hero-image" data-aos="fade-left">
            <img src="@/assets/images/photo.png" alt="Luxury portfolio showcase" class="img-fluid rounded" />
          </div>
        </div>
      </section>
  
      <!-- About Me Section -->
      <section id="about" class="py-5" data-aos="fade-left">
        <div class="container">
          <h2 class="text-center mb-4">About Me</h2>
          <p class="lead text-center">
            I am a passionate developer with an eye for elegance and precision. I specialize in creating high-end digital experiences, blending technical expertise with a luxurious design ethos. Let's work together to make your ideas a reality.
          </p>
        </div>
      </section>
  
      <!-- Skills Section -->
      <section id="skills" class="bg-light py-5" data-aos="zoom-in-up">
        <div class="container">
          <h2 class="text-center mb-4">Skills</h2>
          <div class="row text-center">
            <div class="col-md-4" data-aos="fade-up">
              <b-card title="Web Development">
                <p>Expert in front-end development using modern frameworks like Vue.js, React, and Nuxt.js.</p>
              </b-card>
            </div>
            <div class="col-md-4" data-aos="fade-up">
              <b-card title="UI/UX Design">
                <p>Skilled in designing seamless and intuitive user interfaces with a strong focus on user experience.</p>
              </b-card>
            </div>
            <div class="col-md-4" data-aos="fade-up">
              <b-card title="Project Management">
                <p>Experienced in leading teams and managing projects to ensure timely delivery and quality results.</p>
              </b-card>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Portfolio Section -->
      <section id="portfolio" class="py-5" data-aos="flip-left">
        <div class="container">
          <h2 class="text-center mb-4">Portfolio</h2>
          <b-carousel :interval="3000" controls indicators background="#000" class="text-center" data-aos="fade-up">
            <b-carousel-slide>
              <img src="https://via.placeholder.com/800x400" alt="Project 1">
              <h3>Project 1</h3>
              <p>Luxury website redesign for a premium client.</p>
            </b-carousel-slide>
            <b-carousel-slide>
              <img src="https://via.placeholder.com/800x400" alt="Project 2">
              <h3>Project 2</h3>
              <p>UI/UX design for a high-end mobile app.</p>
            </b-carousel-slide>
            <b-carousel-slide>
              <img src="https://via.placeholder.com/800x400" alt="Project 3">
              <h3>Project 3</h3>
              <p>Branding and web development for a luxury service.</p>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section id="contact" class="bg-dark text-white py-5" data-aos="fade-right">
        <div class="container">
          <h2 class="text-center mb-4">Contact Me</h2>
          <b-form @submit.prevent="submitForm">
            <b-form-group label="Your Name" label-for="name">
              <b-form-input id="name" v-model="name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Your Email" label-for="email">
              <b-form-input type="email" id="email" v-model="email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Your Message" label-for="message">
              <b-form-textarea id="message" v-model="message" required></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Send Message</b-button>
          </b-form>
          <b-alert v-if="successMessage" variant="success" dismissible>{{ successMessage }}</b-alert>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-primary text-white text-center py-3">
        <p>&copy; 2024 Luxury Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        successMessage: '', // Store success message here
      };
    },
    methods: {
      submitForm() {
        // Placeholder submission functionality
        this.successMessage = 'Thank you for reaching out! Your message has been sent successfully.';
        this.name = this.email = this.message = ''; // Reset form fields
      }
    }
  };
  </script>
  
  <style scoped>
  .hero {
    background: linear-gradient(145deg, #f5a9c0, #f1b2a2);
  }
  
  .hero-image img {
    width: 300px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.5rem;
  }
  
  .b-carousel {
    background: #f1b2a2;
  }
  
  footer {
    background-color: #2c3e50;
  }
  
  footer p {
    margin: 0;
  }
  
  b-button {
    transition: background-color 0.3s ease;
  }
  
  b-button:hover {
    background-color: #f5a9c0;
  }
  </style>
  