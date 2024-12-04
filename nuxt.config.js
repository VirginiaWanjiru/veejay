export default {
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/styles/main.css'],
  build: {
    outDir: 'dist' // Ensure this is 'dist' or your custom directory
  },

  nitro: {
    preset: 'vercel',
  },
  

}
