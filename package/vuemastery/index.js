const { reactive, ref, effect } = require("./reactive")

let total = 0
let salePrice = ref(0)
let product = reactive({ price: 5, quantity: 2 })

effect(() => { total = salePrice.value * product.quantity })

effect(() => { salePrice.value = product.price * 0.9 })

// track('quantity')
// track(product, 'price')
// effect()
console.log(total, salePrice.value)
product.quantity = 3
product.price = 3
// trigger(product, 'price')
console.log(total, salePrice.value)