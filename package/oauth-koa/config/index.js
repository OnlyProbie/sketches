// import axios from 'axios'

// 获取授权码地址
const getCodeUrl = 'https://github.com/login/oauth/authorize?client_id=675882c46a375958dd8b&redirect_uri=http://127.0.0.1:3000/callback/github/uccess'
// 获取访问令牌地址
const getTokenUrl = 'https://github.com/login/oauth/access_token'
// GitHub生成的客户端ID
const clientId = '675882c46a375958dd8b'
// 客户端秘钥
const clientSecret = 'e12bca1f2cab9b8bd72e1e30c987b01e49d38573'
// 重定向地址
const redirectUri = 'http://127.0.0.1:3000/callback/github'
// GitHub获取用户信息地址
const getUserInfo = 'https://api.github.com/user'

// const requestCodeParams = {
//   client_id,
//   redirect_uri,
//   scope: 'read'
// }

// const requestTokenParams = {
//   client_id,
//   client_secret,
//   redirect_uri
// }

//  default async function getGithubAuthorize () {
  // 获取授权码
  // const codeData = await axios({
  //   url: githubGetCodeUrl,
  //   method: 'GET',
  //   params: requestCodeParams
  //   // timeout: 10000
  // })

  // console.log(' codeData ------- ', codeData)

  // 获取访问令牌
  // const accessTokenData = await axios({
  //   url: githubGetTokenUrl,
  //   method: 'POST',
  //   params: Object.assign({}, requestTokenParams)
  // })

  // console.log('accessTokenData ===== ', accessTokenData)
  // return codeData.data
// }

module.exports = {
  getCodeUrl,
  getTokenUrl,
  clientId,
  clientSecret,
  redirectUri,
  getUserInfo
}
