const Koa = require('koa')
// const Cors = require('koa2-cors')
const router = require('./router/index')
const views = require('koa-views')
const staticFiles = require('koa-static')
const path = require('path')
const app = new Koa()

// {
//   origin: ctx => {
//     return ctx.header.origin
//   },
//   allowMethods: ['GET', 'POST'],
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
//   credentials: true,
//   maxAge: 5
// }
// app.use(Cors())
// app.use(async (ctx, next)=>{
// 	ctx.set("Access-Control-Allow-Origin", "*");
//   ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
// 	await next()
// })

// 静态web资源托管中间件
app.use(staticFiles(path.resolve(__dirname, './public')))
app.use(views('views', {
  map: {
    html: 'ejs'
  }
}))

app.use(router.routes()).listen(3000, () => {
  console.log('服务已启动!!!')
})

