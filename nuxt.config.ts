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
    format: ['webp']
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@morev/vue-transitions/nuxt',
  ]
})