const isDev = process.env.NODE_ENV === 'development'
// const middleware = isDev?[]:['checkLogin', 'checkClient']
export default {
  mode: 'spa', // universal
  head: {
    title: 'WebApp',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['static/index.css'],
  plugins: [
    '@/plugins/axios',
    '@/plugins/vant-ui',
    { src: '@/plugins/flexible', ssr: false },
    { src: '@/plugins/stats.js', ssr: false }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: './assets/variables.scss'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://jd-mall-test.h5.sinreweb.com'
    }
  },
  build: {
    // publicPath: 'https://cdn.nuxtjs.org',//将dist文件上传到CDN来获得最快渲染性能
    analyze: false,
    devtools: isDev,
    loaders: {
      imgUrl: { limit: 1024 * 5 } //小于5k转为base64
    },
    extractCSS: true, // css从页面提取出来
    optimization: {
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        // minSize: 100000,
        // maxSize: 300000,
        cacheGroups: {}
      }
    },
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      presets: ['@nuxt/babel-preset-app'],
      plugins: [
        // 按需加载vant
        [
          'import',
          {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
          },
          'vant'
        ]
      ]
    }
  },
  router: {
    middleware: [],
    base: '/webapp'
  },
  server: {
    port: 4003,
    host: '0.0.0.0'
  }
}
