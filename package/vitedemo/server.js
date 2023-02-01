const koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new koa()

app.use( async (ctx) => {
  console.log('ctx ===== ', ctx.request, ctx.response)
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html'))
    console.log('index content', indexContent)
    ctx.response.body = indexContent
    ctx.response.set("Content-Type", "text/html")
  }
  if (ctx.request.url === '/main.js') {
    const mainContent = await fs.promises.readFile(path.resolve(__dirname, './main.js'))
    console.log('main content', mainContent)
    ctx.response.body = mainContent
    ctx.response.set("Content-Type", "text/javascript")
  }
})


app.listen(5175, () => {
  console.log('server is running!!!')
})