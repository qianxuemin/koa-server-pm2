const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(async(ctx, next) => {
        console.log(`请求的URL${ctx.request.url}`)
        await next()
    })
    // 使用路由处理get请求
router.get('/', async(ctx, next) => {
    ctx.response.body = `
    <h1>index ci自动部署测试</h1>
    <form action="/sign" method="post">
        <p>Name: <input name="name"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `
})

router.post('/sign', async(ctx, next) => {
    var name = ctx.request.body.name || ``
    var password = ctx.request.body.password || ``
    console.log(`用户${name}请求登录,密码是${password}`)
    if (name === `qianxuemin` && password === `123456`) {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`
    } else {
        ctx.response.body = `
        <h1>Login failed!</h1>
        <p>u:qianxuemin  <br/> p:123456</p>
        <p><a href="/">Try again</a></p>`
    }
})
router.get('*', async(ctx, next) => {
        ctx.response.body = `<h1>这是404页面!</h1>`
        await next()
    })
    // 进行requestbody解析
app.use(bodyParser())
    // 加入路由
app.use(router.routes())

app.listen(3001)

console.log(`服务器已经启动`)