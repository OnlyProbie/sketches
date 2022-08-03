let timer: any = null
export default {
  getEventCount (str: string) {
    return new Promise((res, rej) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        res(str.length)
      }, 300)
    })
  }
}