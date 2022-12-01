// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'narmesh',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },

    css: ['@/assets/iransans.css'],
    nitro: {
        prerender: {
            crawlLinks: true
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt']
})
