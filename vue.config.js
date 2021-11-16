module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  assetsDir: 'assets',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // proxy: 'http://localhost:7002',
  },
  configureWebpack: () => {

  },
};
