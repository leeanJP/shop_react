const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        "/shop_react/master/src/**",
        createProxyMiddleware( {
            target: 'https://raw.githubusercontent.com/leeanJP',
            changeOrigin: true
        })
    )

};