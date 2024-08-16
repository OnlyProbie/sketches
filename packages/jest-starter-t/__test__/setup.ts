
import 'jest-location-mock'
import mockConsole from 'jest-mock-console'

mockConsole()

// // 全局 mock localStorage 的实现
// Object.defineProperty(global, 'localStorage', {
//   value: {
//     store: {} as Record<string, string>,
//     getItem (key: string) {
//       return this.store[key]
//     },
//     setItem (key: string, value: string) {
//       this.store[key] = value
//     },
//     clear () {
//       this.store = {}
//     },
//     removeItem (key: string) {
//       delete this.store[key]
//     }
//   },
//   configurable: true,
//   writable: true,
//   enumerable: true
// })