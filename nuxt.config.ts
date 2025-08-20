// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  target: 'static',

  devServer: {
    port: 5555
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/import.scss" as *;'
        }
      }
    }
  },

  css: [
    '@/assets/css/modern-normalize.css',
    '@/assets/css/base.scss'
  ],

  app: {
    head: {
      title: 'Bitcoin Design is 5 years old!',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#f2a900' },
        { name: 'theme-color', content: '#f2a900' },
  
        { property: 'og:title', content: 'Bitcoin Design is 5 years old!' },
  
        { hid: 'description', name: 'description', content:"Celebrating 5 years of the Bitcoin Design Community - showcasing our journey of creating open-source design resources, mentoring programs, and collaborative projects that improve bitcoin UX for everyone." },
        { name: 'description', content: "Celebrating 5 years of the Bitcoin Design Community - showcasing our journey of creating open-source design resources, mentoring programs, and collaborative projects that improve bitcoin UX for everyone." },
        { property: 'og:description', content: "Celebrating 5 years of the Bitcoin Design Community - showcasing our journey of creating open-source design resources, mentoring programs, and collaborative projects that improve bitcoin UX for everyone." },
  
        { property: 'og:url', content: 'https://five.bitcoin.design' },
        { property: 'og:site_name', content: 'Bitcoin Design is 5 years old!' },
        { property: 'og:image', content: 'https://five.bitcoin.design/images/preview.jpg' },
  
        { name: 'twitter:card', content: 'summary' },
        { property: 'twitter:image', content: 'https://five.bitcoin.design/images/preview.jpg' },
        { property: 'twitter:title', content: 'Bitcoin Design is 5 years old!' },
        { name: 'twitter:site', content: '@bitcoin_design' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', size: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        { defer: true, src:"https://info.bitcoin.design/script.js", "data-website-id": "4ca72544-76fd-4e34-9597-13d4ea41e517" }
      ]
    }
  }
})
