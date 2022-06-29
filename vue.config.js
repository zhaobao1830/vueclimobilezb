const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 公共路径(必须有的)
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "assets",
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin 引入的样式可以直接在组件里使用
        // 7.x版本的param是data
        // 8.x版本的param是prependData
        // 9.x版本的param是additionalData
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.132:8086/', // 代理跳转的地址
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false // 接受 运行在 https 上的服务
      }
    }
  }
})
