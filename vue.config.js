module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/growth-js/'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
