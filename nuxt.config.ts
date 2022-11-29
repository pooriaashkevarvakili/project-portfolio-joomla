// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/iransans.css'],
    nitro: {
        prerender: {
            crawlLinks: true
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt']
})
