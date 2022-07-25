
// let dep = new Set()
// let depMap = new Map()
let targetMap = new WeakMap()
// 副作用
let activeEffect = null
function effect (eff) {
  activeEffect = eff
  activeEffect()
  activeEffect = null
}

// 跟踪依赖
function track (target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
  }
}

// 更新依赖
function trigger (target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) { return }
  let dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}

// V3 响应式
function reactive (target) {
  const handler = {
    get (target, key, receiver) {
      let result = Reflect.get(target, key, receiver)
      track(target, key)
      return result
    },
    set (target, key, value, receiver) {
      let oldValue = target[key]
      let result = Reflect.set(target, key, value, receiver)
      if (oldValue != result) {
        trigger(target, key)
      }
      return result
    }
  }
  return new Proxy(target, handler)
}

function ref (raw) {
  const r = {
    get value () {
      track(r, 'value')
      return raw
    },
    set value (newValue) {
      if (raw !== newValue) {
        raw = newValue
        trigger(r, 'value')
      }
    }
  }
  return r
}

module.exports = {
  reactive,
  ref,
  effect,
  track,
  trigger
}