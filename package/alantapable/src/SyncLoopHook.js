
// 类似 SyncBailHook，在执行过程中回调返回非 undefined 时继续再次执行当前的回调

class SyncLoopHook {
  constructor (args) {
    this._args = args
    this._taps = []
  }

  tap (type, fn) {
    this._taps.push(fn)
  }

  call (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    let result = null
    let length = this._taps.length
    let i = 0
    let _loop = false
    do {
      _loop = false
      i = 0
      do {
        result = this._taps[i](...newArgs)
        if (result !== undefined) {
          _loop = true
        } else {
          i++
        }
      } while (i < length && !_loop)
    } while (_loop)

  }

}

module.exports = SyncLoopHook