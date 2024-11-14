<template>
    <section class="contact">
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: "Contact",
    methods: {
      submitForm() {
        alert("Message sent!");
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 40px;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
  }
  input,
  textarea {
    margin-bottom: 10px;
    padding: 10px;
  }
  button {
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
  }
  </style>
  