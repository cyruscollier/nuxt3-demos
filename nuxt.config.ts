import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    builder: 'webpack',
    build: {
        extractCSS: true,
    },
    css: ['~/assets/app.css']
})
