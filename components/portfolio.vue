<template>
    <section class="portfolio">
      <h2>Portfolio</h2>
      <div class="portfolio-grid">
        <div v-for="project in projects" :key="project.id" class="portfolio-item">
          <img :src="project.image" alt="Project Thumbnail" />
          <h3>{{ project.title }}</h3>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Portfolio",
    data() {
      return {
        projects: [
          { id: 1, title: "UX/UI Design", image: "/path/to/image1.jpg" },
          { id: 2, title: "Data Dashboard", image: "/path/to/image2.jpg" },
          { id: 3, title: "IT Management", image: "/path/to/image3.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .portfolio {
    padding: 40px;
  }
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .portfolio-item {
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
  }
  </style>
  