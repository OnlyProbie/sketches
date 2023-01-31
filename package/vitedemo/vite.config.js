import { defineConfig } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const viteResolver = {
  'build': () => {
    console.log('生产环境')
    return Object.assign({}, viteBaseConfig, viteProdConfig)
  },
  'serve': () => {
    console.log('开发环境')
    return Object.assign({}, viteBaseConfig, viteDevConfig)
  }
}

/** @type import('vite').UserConfig */
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log('command ---> ', command, mode, ssrBuild)
  return viteResolver[command]()
})