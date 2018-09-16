const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const proxy = require('koa-server-http-proxy')

const app = new Koa()
// 静态资源目录
const staticPath = './static'
// 代理
app.use(proxy('/api', {
    target: 'https://news-at.zhihu.com',
    pathRewrite: {
        '^/api': 'api/4/'
    },
    changeOrigin: true
}))
app.use(static(
    path.join(__dirname, staticPath)
))
app.use(async (ctx) => {
    ctx.body = 'hello world'
})
app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})