
// 接受至少一个参数，上一个注册的回调返回值会作为下一个注册的回调的参数

class SyncWaterfallHook {

  constructor (args) {
    this._args = args
    this._callbackList = []
  }

  tap (type, fn) {
    this._callbackList.push(fn)
  }

  call (...args) {
    if (args.length < 1) {
      return
    }
    let newArgs = Array.from(args).slice(0, this._args.length)
    let result = null
    let post = newArgs[0]
    this._callbackList.forEach(fn => {
      result = fn(post, ...newArgs.slice(1))
      post = result || post
    })
  }

}

module.exports = SyncWaterfallHook