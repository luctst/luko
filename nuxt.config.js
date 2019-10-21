
export default {
  mode: 'universal',
  env: {
    CONSUMER: "V4uEBSXzSC2TcEYQ2sgA0uNX8",
    CONSUMER_SECRET: "IYBfuv5MKX5aok3LN4BEubne9wFhyvonEMfXFeK6jv85zXBOJP",
    TOKEN: "756155610224168960-aeg2l1GlGk6DyL1yw93wvACeeG8dHJS",
    TOKEN_SECRET: "7Cv2cn9HPmB5hOMKqJ1vtNrsD9R6EB0NAGFJFJkokQ2hi",
    BEARER:"AAAAAAAAAAAAAAAAAAAAANeh9gAAAAAAssgTDfhSKGltKAAkF6Ca6CXPXGc%3DvoIQa0aBc9dlEVczES3qQAJ36xXMvxTZ3fDefayFgCJi31E4yV"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    debug: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
  }
}
