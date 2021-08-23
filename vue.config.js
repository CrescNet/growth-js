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
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Growth JS";
        return args;
      })
  }
}
