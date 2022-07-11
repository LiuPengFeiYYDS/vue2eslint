const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  devServer:{
    port:8080,
    host:'localhost',
    https:false,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:VUE_APP_BASE_URL,
        changeOrigin:true,
        pathWrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  }
})
