
// 类似于 SyncHook，执行过程中注册的回调返回非 undefined 时就停止不再执行

class SyncBailHook {
  constructor (args) {
    this._args = args
    this._taps = []
  }

  tap (type, fn) {
    this._taps.push(fn)
  }

  call (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    for (let i = 0; i < this._taps.length; i++) {
      let result = this._taps[i](...newArgs)
      if (result !== undefined) {
        break
      }
    }
  }

}

module.exports = SyncBailHook