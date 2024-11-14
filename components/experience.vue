<template>
    <section class="experience-skills">
      <h2>Experience & Skills</h2>
      <ul>
        <li v-for="item in experience" :key="item.id">
          <strong>{{ item.year }}</strong>: {{ item.title }}
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: "ExperienceSkills",
    data() {
      return {
        experience: [
          { id: 1, year: "2023", title: "Project Manager at XYZ Corp" },
          { id: 2, year: "2022", title: "Data Analyst at ABC Inc" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .experience-skills {
    padding: 40px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 10px 0;
  }
  </style>
  