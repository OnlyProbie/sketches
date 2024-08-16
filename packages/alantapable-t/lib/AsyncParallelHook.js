
// 异步并行：回调函数中可以写异步代码，并且多个回调之间是并行执行的

class AsyncParallelHook {
  constructor (args) {
    this._args = args
    this._taps = []
  }

  tapPromise(name, fn) {
    this._taps.push(fn)
  }

  tapAsync (name, fn) {
    this._taps.push(fn)
  }

  callAsync (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    let i = 0, length = args.length
    let finalCallback = args[length - 1]
    function done(...doneArgs) {
      if (++i === length) {
        finalCallback(...doneArgs)
      }
    }
    this._taps.forEach(_tap => _tap(...newArgs, done))
  }

  promise (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    return Promise.all(this._taps.map(fn => fn(...newArgs)))
  }
}

module.exports = AsyncParallelHook


