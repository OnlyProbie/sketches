let data = { price: 5, quanitity: 2 }
let target, total, salePrice

class Dep {
  constructor () {
    this.subscribers = []
  }
  depend () {
    if (target && !this.subscribers.includes(target)) {
      console.log('target ', target)
      this.subscribers.push(target)
    }
  }
  notify () {
    this.subscribers.forEach(sub => sub())
  }
}


let deps = new Map()

Object.keys(data).forEach(key => {
  // let internalValue = data[key]
  // const dep = new Dep()
  // Object.defineProperty(data, key, {
  //   get() {
  //     dep.depend()
  //     return internalValue
  //   },
  //   set (newVal) {
  //     internalValue = newVal
  //     dep.notify()
  //   }
  // })
  deps.set(key, new Dep())
})

let data_without_proxy = data

data = new Proxy(data_without_proxy, {
  get (obj, key) {
    console.log('proxy get...')
    deps.get(key).depend()
    return obj[key]
  },
  set (obj,key, newVal) {
    console.log('proxy set...')
    obj[key] = newVal
    deps.get(key).notify()
    return true
  }
})

function watcher(myFunc) {
  console.log('run watcher...')
  target = myFunc
  target()
  target = null
}

watcher(() => {
  console.log('total watcher...')
  total = data.price * data.quanitity
})

watcher(() => {
  console.log('salePrice watcher...')
  salePrice = data.price * 0.9
})

deps.set('discount', new Dep())
data['discount'] = 5

watcher(() => {
  console.log('salePrice watcher2...')
  salePrice = data.price - data.discount
})
