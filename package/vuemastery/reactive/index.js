// const { reactive, ref, effect, computed } = require("./reactive")

const { reactive, computed } = require('./reactivity.cjs')

// let total = 0
// let salePrice = ref(0)
let product = reactive({ price: 5, quantity: 2 })

let priceArr = reactive([])

// effect(() => { total = salePrice.value * product.quantity })

// effect(() => { salePrice.value = product.price * 0.9 })

let salePrice = computed(()=> {
  return product.price * 0.9
})

let total = computed(() => {
  return salePrice.value * product.quantity
})

// track('quantity')
// track(product, 'price')
// effect()
priceArr.push(total)
console.log(total.value, salePrice.value)
product.quantity = 3
product.price = 3
if (total > 10) {
  priceArr.shift()
}
// trigger(product, 'price')
console.log(total.value, salePrice.value)