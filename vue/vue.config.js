const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: true,
  lintOnSave: true,

  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@views": path.resolve(__dirname, "src/views"),
      },
    },
  },
});
