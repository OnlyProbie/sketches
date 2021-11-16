
// 类似于 SyncHook，执行过程中注册的回调返回非 undefined 时就停止不再执行

class SyncBailHook {
  constructor (args) {
    this._args = args
    this._callbackList = []
  }

  tap (type, fn) {
    this._callbackList.push(fn)
  }

  call (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    for (let i = 0; i < this._callbackList.length; i++) {
      let result = this._callbackList[i](...newArgs)
      if (result !== undefined) {
        break
      }
    }
  }

}

module.exports = SyncBailHook