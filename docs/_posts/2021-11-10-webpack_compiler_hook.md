---
layout: post
title: tapable sync hooks                              # Title of the
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
bootstrap: true                                   # Add bootstrap to the page
tags: [webpack, markdown, tapable]
---

**tapable同步钩子简单实现**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [tapable同步钩子简单实现](#tapable%E5%90%8C%E6%AD%A5%E9%92%A9%E5%AD%90%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0)
  - [SyncHook](#synchook)
  - [SyncBailHook](#syncbailhook)
  - [SyncLoopHook](#syncloophook)
  - [SyncWaterfallHook](#syncwaterfallhook)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## tapable同步钩子简单实现

### SyncHook

同步钩子，顺序执行注册的钩子

```js
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
```

### SyncBailHook

类似于 SyncHook，执行过程中注册的回调返回非 undefined 时就停止不再执行

```js
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
```

### SyncLoopHook

类似 SyncBailHook，在执行过程中回调返回非 undefined 时继续再次执行当前的回调

```js
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
```

### SyncWaterfallHook

接受至少一个参数，上一个注册的回调返回值会作为下一个注册的回调的参数

```js
class SyncWaterfallHook {

  constructor (args) {
    this._args = args
    this._taps = []
  }

  tap (type, fn) {
    this._taps.push(fn)
  }

  call (...args) {
    if (args.length < 1) {
      return
    }
    let newArgs = Array.from(args).slice(0, this._args.length)
    let result = null
    let post = newArgs[0]
    this._taps.forEach(fn => {
      result = fn(post, ...newArgs.slice(1))
      post = result || post
    })
  }

}

module.exports = SyncWaterfallHook
```

