/** @type import('vite').UserConfig */
export default {
  optimizeDeps: {
    exclude: ['lodash-es']
  },
  server: {
    port: 8080
  }
}