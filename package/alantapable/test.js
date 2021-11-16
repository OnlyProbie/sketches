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

let hook = new AsyncParallelHook(['name'])
let counter1 = 0
let counter2 = 0
let counter3 = 0

console.time('cost');

// 同步
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
hook.tapAsync('hello', (name, cb) => {
  setTimeout(() => {
    console.log(`hello ${name}`);
    cb();
  }, 2000);
});
hook.tapPromise('hello again', (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`hello ${name}, again`);
      resolve();
    }, 1000);
  });
});

// hook.promise('ahonn').then(() => {
//   console.log('promise done')
// })

hook.callAsync('ahonn', () => {
  console.log('done');
  console.timeEnd('cost');
});

// hook.call('hahahh', 10)

// var _fn0 = _x[0];
// var _result0 = _fn0(name, age);
// if (_result0 !== undefined) {
//   _loop = true;
// } else {
//   var _fn1 = _x[1];
//   var _result1 = _fn1(name, age);
//   if (_result1 !== undefined) {
//     _loop = true;
//   } else {
//     var _fn2 = _x[2];
//     var _result2 = _fn2(name, age);
//     if (_result2 !== undefined) {
//       _loop = true;
//     } else {
//       if (!_loop) {
//       }
//     }
//   }
// }


// var _loop;
// do {
//   _loop = false;
//   var _fn0 = _x[0];
//   var _result0 = _fn0(name, age);
//   if (_result0 !== undefined) {
//     _loop = true;
//   } else {
//     var _fn1 = _x[1];
//     var _result1 = _fn1(name, age);
//     if (_result1 !== undefined) {
//       _loop = true;
//     } else {
//       var _fn2 = _x[2];
//       var _result2 = _fn2(name, age);
//       if (_result2 !== undefined) {
//         _loop = true;
//       } else {
//         if (!_loop) {
//         }
//       }
//     }
//   }
// } while (_loop);