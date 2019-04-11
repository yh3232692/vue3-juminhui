module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            //配置跨域
            '/api': {
                target: 'https://cshop.jminhui.com/Api/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}