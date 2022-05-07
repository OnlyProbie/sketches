const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesLoopHook,
  AsyncSeriesWaterfallHook
  // } = require('./src/index')
} = require('tapable')

debugger
let hook = new SyncHook(['name', 'age'])

console.time('cost');

hook.tap('1', (name) => {
  console.log(1, name)
})

hook.tap('2', (name) => {
  console.log(2, name)
})

// hook.intercept({
//   // context: true, // 指定当前使用上下文
//   call (source, target, name) { // 每次call之前触发
//     console.log('------ intercept call')
//     context.call = true
//     console.log(source, target, name)
//   },
//   register ({type, fn, name}) {
//     console.log('register')
//     console.log({type, fn, name})
//     return {type, fn, name}
//   }
// })

hook.call('alan')

// hook.tapPromise('1,', (name, age) => {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       console.log('1 ---', name, age)
//       res()
//     }, 1000)
//   })
// })

// hook.tapPromise('2,', (name, age) => {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       console.log('2 ---', name, age)
//       rej()
//     }, 2000)
//   })
// })

// hook.tapPromise('3,', (name, age) => {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       console.log('3 ---', name, age)
//       res()
//     }, 3000)
//   })
// })

// hook.promise('alan', 10).then((result) => {
//   console.log(result)
//   console.timeEnd('cost')
// }).catch(err => {
//   console.log('失败了')
// })

// 同步

// let counter1 = 0
// let counter2 = 0
// let counter3 = 0

// hook.tap('sync', (args1, args2) => {
//   console.log('sync ==> : ', args1, args2)
//   if (++counter1 === 3) {
//     counter1 = 0
//     return
//   }
//   return true
// })

// hook.tap('async1', (args1, args2) => {
//   console.log('async1 ==> : ', args1, args2)
//   if (++counter2 === 2) {
//     counter2 = 0
//     return
//   }
//   return true
// })

// hook.tap('async2', (args1, args2) => {
//   console.log('async2 ==> : ', args1, args2)
//   if (++counter3 === 1) {
//     counter3 = 0
//     return
//   }
//   return false
// })


// 异步
// hook.tapAsync('hello', (name) => {
//   setTimeout(() => {
//     console.log(`hello ${name}`);
//     // console.log(`age ${age}`);
//     // cb();
//   }, 2000);
// });
// hook.tapPromise('hello again', (name) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`hello ${name}, again`);
//       // console.log(`age ${age}, again`);
//       resolve();
//     }, 1000);
//   });
// });

// hook.intercept({
//   call (source, target, routeList) {
//     console.log('intercept => ', source, target, routeList)
//   },
//   register ({ type, fn, name }) {
//     console.log('register => ', type, fn, name)
//     return { type, fn, name }
//   }
// })

// hook.promise('ahonn').then(() => {
//   console.log('promise done')
//   console.timeEnd('cost');
// })

  // hook.callAsync('ahonn', () => {
  //   console.log('done');
  //   console.timeEnd('cost');
  // });

  // hook.call('hahahh', 10)

