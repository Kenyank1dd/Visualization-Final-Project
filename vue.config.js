const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir:'static',
  parallel:false,
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) 
  },
  devServer:{
    port:5000,//端口号
    open:true, //是否自启动
  },
}