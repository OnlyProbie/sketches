
import json from 'rollup-plugin-json'

function a () {
  console.log('a -> plugins >>>>>> ')
}

export default {
  // 核心选项
  input: 'src/index.js',     // 必须
  external: [], // 外链
  plugins: [a(), json()], // 插件

  // 额外选项
  // onwarn,

  // danger zone
  // acorn,
  // context,
  // moduleContext,
  // legacy,

  // banner: '',
  // footer: '',


  output: {  // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    // dir: 'dist/',
    file: 'bundle.js',    // 必须
    format: 'cjs',  // 必须
    paths: '', // 路径
    globals: {},
    name: 'rollupBundle', // 打包名称
    plugins: [], // 插件
  },
};
