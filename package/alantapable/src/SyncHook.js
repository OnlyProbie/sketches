
// 同步钩子，顺序执行注册的钩子

class SyncHook {

  constructor (args) {
    this._args = args
    this._taps = []
  }

  tap (type, fn) {
    this._taps.push(fn)
  }

  call (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    this._taps.forEach(fn => {
      fn(...newArgs)
    })
  }

}

module.exports = SyncHook