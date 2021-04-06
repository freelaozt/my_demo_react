/**
 * 处理跨域问题
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  //请求样式 http://localhost:3000/api/api/getData?p=1
  app.use(
    '/api', //`api`是需要转发的请求
    createProxyMiddleware({
      target: 'http://119.3.0.97:3000',// 这里是接口服务器地址
      changeOrigin: true,
      pathRewrite: {
          '^/api': ''
      }
    })
  );
};
