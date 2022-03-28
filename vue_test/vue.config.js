const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  // 开启代理服务器， 
  // (方式一)缺点：
  // 一、这种方式只能指向一台，二、不能灵活走代理，只有在public没有需要的东西才会走代理
  // devServer: {
  //   proxy:'http://localhost:5000'
  // }
  // (方式二)
  devServer: {
    proxy: {
      // 请求前缀'/api',想走代理，就在前面加上api，这就是灵活控制，也可以写其他'/aiguigu'
      '/atguigu': {
        // 当加上前缀后，请求的资源将会变成/atguigu/students，而不是原来那个
        target: 'http://localhost:5000',
        // 所以，需要这个配置将atguigu变为空
        pathRewrite: {'^/atguigu':''},
        // ws: true,//用于支持websocket,默认真
        // changeOrigin: true//用于控制请求头中的host值，默认真
      },
      '/demo': {
        // 当加上前缀后，请求的资源将会变成/atguigu/students，而不是原来那个
        target: 'http://localhost:5001',
        // 所以，需要这个配置将atguigu变为空
        pathRewrite: {'^/demo':''},
        // ws: true,//用于支持websocket,默认真
        // changeOrigin: true//用于控制请求头中的host值，默认真
      }
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
