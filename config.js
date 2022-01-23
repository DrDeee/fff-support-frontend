export default {
    apiHost: process.env.API_HOST || 'https://mr-api.messenger.fridaysforfuture.dev',
    keycloakInstance: process.env.KC_INSTANCE || 'auth.messenger.fridaysforfuture.dev',
    keycloakRealm: process.env.KC_REALM || 'dev',
    keycloakClient: process.env.KC_CLIENT || 'regio'
}