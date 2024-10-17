export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',
    env: {
        baseUrl: "https://dev.dream_catch.is/api"
    },
    router: {
        middleware: 'auth'
    },
    head: {
        title: 'dream_catch',
        meta: [

            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'title', name: 'title', content: 'Dream Catch' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' },
            
            // Open Graph meta tags for social media sharing
            { hid: 'og:title', property: 'og:title', content: 'Dream Catch' },
            { hid: 'og:description', property: 'og:description', content: '' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: '' },
            { hid: 'og:image', property: 'og:image', content: '' },
        
            // Twitter Card meta tags
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Dream Catch' },
            { hid: 'twitter:description', name: 'twitter:description', content: '' },
            { hid: 'twitter:image', name: 'twitter:image', content: '' },
            
        ],
        link: [
            // Favicon for various devices
            { rel: 'icon', type: 'image/x-icon', href: '/favicon-logo.svg' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },

            // SVG favicon for modern browsers
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon-logo.svg' },

            // Apple Touch Icon for iOS devices
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },

            // Android and Chrome app manifest for PWA compatibility
            { rel: 'manifest', href: '/site.webmanifest' },

            // Additional icon sizes for Android
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },

            // Mask icon for Safari on macOS with a color (useful for dark/light modes)
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },

        ],
        script: [
            { src: `https://unpkg.com/vue-clazy-load/dist/vue-clazy-load.min.js`}
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
            src: "~/plugins/elementary-components"
        },
        {
            src: "~/plugins/services.plugin",
            mode: 'client'
        },
        {
            src: "~/plugins/custom-components"
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        'portal-vue/nuxt',
        'nuxt-i18n',
    ],


    i18n: {
        locales: [{
                name: "English",
                code: "en",
                file: "english.js",
            },
            {
                name: "Russian",
                code: "ru",
                file: "russian.js",
            },
            {
                name: "Ukrainian",
                code: "uk",
                file: "ukrainian.js",
            }

        ],
        lazy: true,
        langDir: 'assets/lang/',
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
        parsePages: false,
        vueI18n: {
            fallbackLocale: 'ru',
        }
    },




    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'ru',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    // server: {
    //   port: 8000, // default: 3000
    //   host: '0.0.0.0', // default: localhost
    // }
}