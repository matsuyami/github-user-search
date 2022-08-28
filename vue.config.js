const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/github-user-search/',
  pwa: {
    iconPaths: {
      favicon32: "./public/favicon.ico",
      favicon16: "./public/favicon.ico",
      appleTouchIcon: "./public/favicon.ico",
      maskIcon: "./public/favicon.ico",
      msTileImage: "./public/favicon.ico"
    }
  }
})

