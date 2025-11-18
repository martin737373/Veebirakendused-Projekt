const { defineConfig } = require('@vue/cli-service')
const path = require('path')  // ← required import

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views')
      }
    }
  }
})
