const KoaRouter = require('koa-router')
const axios = require('axios')
const qs = require('qs')
const { getCodeUrl, getTokenUrl, clientId, clientSecret, getUserInfo } = require('../config/index')

const router = new KoaRouter()

let userInfo = {}

// 路由处理
router.get('/', async ctx => {
  await ctx.render('login')
})
router.get('/user', async ctx => {
  await ctx.render('user', { userInfo })
})

// 处理前端请求
router.get('/loginGitHub', async ctx => {
  const path = getCodeUrl
  // ctx.body = {
  //   errno: 0,
  //   errmsg: 'success',
  //   data: {
  //     code_url: path
  //   }
  // }
  // 重定向到获取授权页面
  ctx.redirect(path)
})

// 处理重定向请求
router.get('/callback/github', async ctx => {
  const { code } = ctx.query

  // 请求访问令牌
  const resData = await axios.post(getTokenUrl, {
    client_id: clientId,
    client_secret: clientSecret,
    code
  })
  // console.log('access_token ===> ', qs.parse(resData.data))
  const accessToken = qs.parse(resData.data).access_token

  // 获取用户信息
  const userInfoData = await axios.get(getUserInfo, {
    headers: {
      Authorization: 'token ' + accessToken
    }
  })

  // 同步用户信息
  userInfo = userInfoData.data
  // console.log('user_info ====> ', userInfo)

  // 重定向到用户页面
  ctx.redirect('/user')
})

module.exports = router