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
let hook = new AsyncSeriesHook(['name'])

console.time('cost');


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
hook.tapAsync('hello', (name) => {
  setTimeout(() => {
    console.log(`hello ${name}`);
    // console.log(`age ${age}`);
    // cb();
  }, 2000);
});
hook.tapPromise('hello again', (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`hello ${name}, again`);
      // console.log(`age ${age}, again`);
      resolve();
    }, 1000);
  });
});

hook.intercept({
  call (source, target, routeList) {
    console.log('intercept => ', source, target, routeList)
  },
  register ({ type, fn, name }) {
    console.log('register => ', type, fn, name)
    return { type, fn, name }
  }
})

hook.promise('ahonn').then(() => {
  console.log('promise done')
  console.timeEnd('cost');
})

  // hook.callAsync('ahonn', () => {
  //   console.log('done');
  //   console.timeEnd('cost');
  // });

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

  // (function anonymous (name
  // ) {
  //   "use strict";
  //   var _context;
  //   var _x = this._x;
  //   var _taps = this.taps;
  //   var _interceptors = this.interceptors;
  //   return new Promise((function (_resolve, _reject) {
  //     var _sync = true;
  //     function _error (_err) {
  //       if (_sync)
  //         _resolve(Promise.resolve().then((function () { throw _err; })));
  //       else
  //         _reject(_err);
  //     };
  //     _interceptors[0].call(name);
  //     function _next0 () {
  //       var _fn1 = _x[1];
  //       var _hasResult1 = false;
  //       var _promise1 = _fn1(name);
  //       if (!_promise1 || !_promise1.then)
  //         throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
  //       _promise1.then((function (_result1) {
  //         _hasResult1 = true;
  //         _resolve();
  //       }), function (_err1) {
  //         if (_hasResult1) throw _err1;
  //         _error(_err1);
  //       });
  //     }
  //     var _fn0 = _x[0];
  //     _fn0(name, (function (_err0) {
  //       if (_err0) {
  //         _error(_err0);
  //       } else {
  //         _next0();
  //       }
  //     }));
  //     _sync = false;
  //   }));

  // })
