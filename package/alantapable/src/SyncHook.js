
// 同步钩子，顺序执行注册的钩子

class SyncHook {

  constructor (args) {
    this._args = args
    this._callbackList = []
  }

  tap (type, fn) {
    this._callbackList.push(fn)
  }

  call (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    this._callbackList.forEach(fn => {
      fn(...newArgs)
    })
  }
}

module.exports = SyncHook