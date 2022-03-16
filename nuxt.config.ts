import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    builder: 'webpack',
    webpack: {
        extractCSS: {
            ignoreOrder: true
        },
    },
    css: ['~/assets/app.css']
})
