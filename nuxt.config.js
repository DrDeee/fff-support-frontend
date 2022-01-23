import config from "./config"

export default {
    target: 'server',
    ssr: false,
    head: {
        title: 'MessageDesk',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [],

    plugins: [],

    components: true,

    buildModules: [
        '@nuxt/typescript-build',
    ],

    modules: [
        'nuxt-buefy',
        'nuxt-fontawesome',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/critters'
    ],

    axios: {},

    buefy: {
        materialDesignIcons: false,
        defaultIconPack: 'fas',
        defaultIconComponent: 'font-awesome-icon'
    },
    fontawesome: {
        imports: [{
                set: '@fortawesome/free-solid-svg-icons',
                icons: [
                    'faBookmark',
                    'faUser',
                    'faUsers',
                    'faPlusCircle',
                    'faArrowCircleLeft',
                    'faArrowUp',
                    'faEnvelope',
                    'faLock',
                    'faSignOutAlt',
                    'faSignInAlt'
                ]
            },
            {
                set: '@fortawesome/free-regular-svg-icons',
                icons: ['faBookmark']
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: [
                    'faTelegram',
                    'faDiscord',
                    'faWhatsapp'
                ]
            }
        ]
    },
    auth: {
        strategies: {
            local: false,
            cloud: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: 'https://' + config.keycloakInstance + '/auth/realms/' +
                        config.keycloakRealm + '/protocol/openid-connect/auth',
                    token: 'https://' + config.keycloakInstance + '/auth/realms/' +
                        config.keycloakRealm + '/protocol/openid-connect/token',
                    userInfo: 'https://' + config.keycloakInstance + '/auth/realms/' +
                        config.keycloakRealm + '/protocol/openid-connect/userinfo',
                },
                token: {
                    maxAge: 600,
                },
                responseType: 'code',
                grantType: 'authorization_code',
                clientId: config.keycloakClient,
                scope: ['openid'],
                codeChallengeMethod: 'plain',
            },
        }

    },
    router: {
        middleware: process.env.DEV_NO_AUTH === 'true' ? [] : ['auth']
    },
    publicRuntimeConfiguration: {
        DEV_NO_AUTH: process.env.DEV_NO_AUTH == 'true'
    }
}