type AnyFunction = (...args: any[]) => any

const after1000ms = (fn?: AnyFunction) => {
  console.log('开始计时')
  setTimeout(() => {
    console.log('1000ms后执行')
    fn && fn()
  }, 1000);
}

export default after1000ms;