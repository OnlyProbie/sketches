
// 同步钩子，顺序执行注册的钩子

// class SyncHook {

//   constructor (args) {
//     this._args = args
//     this._taps = []
//   }

//   tap (type, fn) {
//     this._taps.push(fn)
//   }

//   call (...args) {
//     let newArgs = Array.from(args).slice(0, this._args.length)
//     this._taps.forEach(fn => {
//       fn(...newArgs)
//     })
//   }

// }

// module.exports = SyncHook

const { SyncHook } = require('tapable')

let hook = new SyncHook(['name', 'age'])

hook.tap('1', (name, age) => {
  console.log('1 ', name, age)
})
hook.tap('2', (name, age) => {
  console.log('2 ', name, age)
})

hook.call('test', 101)