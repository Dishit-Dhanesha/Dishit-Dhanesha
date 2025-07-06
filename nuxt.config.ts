// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  ogImage: {enabled:true },
  site: { 
    url: 'https://dishit.royalegroup.io', 
    name: 'Dishit Dhanesha' 
    }, 
    
  nitro: {
    compressPublicAssets: true,
    minify: true
},
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
   image: {
    // Optional: Configure global options
    format: ['webp'], // Prioritize modern formats
    screens: { // Define breakpoints for responsive images
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },
  gtag: {
    id: 'G-ZLWCQYSXKN'
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@morev/vue-transitions/nuxt',
    'nuxt-gtag'
  ]
})