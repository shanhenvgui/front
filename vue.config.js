// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false,
  
  
   
  
  
// })
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    /\/node_modules\/vue\//  // 正确地转译 Vue 内部的类型定义文件
  ],
  lintOnSave: false,
  
    // 其他配置项...
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:9096',
          changeOrigin: true,
          //重写路径
          // pathRewrite: {
          //   '^/api': ''
          // }
        }
      }
    }
  
  

  
})
