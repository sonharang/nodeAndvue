const { defineConfig } = require("@vue/cli-service");
const target = "http://localhost:3001";

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      "^/": {
        target,
        changeOrigin: true,
        ws: false,
      },
    },
  },
});
