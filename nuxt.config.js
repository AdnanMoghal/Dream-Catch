export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',
    env: {
        baseUrl: "https://dev.khuwahish.is/api"
    },
    router: {
        middleware: 'auth'
    },
    head: {
        title: 'Khuwahish',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon-logo.svg'
        }],
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