
// 异步钩子

class AsyncSeriesHook {

  constructor (args) {
    this._args = args
    this._taps = []
    this.interceptors = []
  }

  _tap (type, options, fn) {
    switch (type) {
      case 'sync':
      case 'async':
        if (typeof options === "string") {
          options = {
            name: options.trim()
          };
        }
        options = Object.assign({ type, fn }, options);
        this._taps.push(options)
        break
      case 'promise':
        if (typeof options === "string") {
          options = {
            name: options.trim()
          };
        }
        options = Object.assign({ type, fn }, options);
        this._taps.push(options)
        break
    }
  }

  tap (options, fn) {
    this._tap('sync', options, fn)
  }

  tapAsync (options, fn) {
    this._tap('async', options, fn)
  }

  tapPromise (options, fn) {
    this._tap('promise', options, fn)
  }

  callAsync (...args) {
    let newArgs = Array.from(args).slice(0, this._args.length)
    this._taps.forEach(_tap => {
      if (_tap.call) {
        _tap.call(...newArgs)
      }
      _tap.fn(...newArgs,)
    })
  }

  promise (...args) {
    let newArgs = Array.from(args.slice(0, this._taps.length))
    return Promise.all(this._taps.map(item => item.fn(...newArgs)))
  }

  intercept (interceptors) {
    this.interceptors.push(interceptors)
    if (interceptors.register) {
      for (let i = 0; i < this._taps.length; i++) {
        this._taps[i] = interceptors.register(this._taps[i])
      }
    }
  }

}

module.exports = AsyncSeriesHook