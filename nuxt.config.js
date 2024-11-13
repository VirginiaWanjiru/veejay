export default {
    css: [
      'bootstrap/dist/css/bootstrap.css',
      'bootstrap-vue/dist/bootstrap-vue.css',
      'aos/dist/aos.css', // Add AOS styles
    ],
    build: {
      transpile: ['bootstrap-vue'],
    },
    plugins: [
      { src: '~/plugins/aos.js', ssr: false }, // Import AOS plugin
      { src: '~/plugins/vue-scrollto.js', mode: 'client' }, // Import Vue Scrollto
    ],
  };
  