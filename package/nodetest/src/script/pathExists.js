

const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, './src/files/2.txt')
const dirname = path.resolve(__dirname, './src/dir/1')

async function exists (filename) {
  // const buffer = Buffer.from('hello', 'utf-8')
  try {
    const result = await fs.promises.stat(filename)
    // console.log(result)
    return true
  } catch (err) {
    // 文件不存在
    if (err.code === 'ENOENT') {
      return false
    }
    throw err
  }
}

async function pathExists () {
  const result = await exists(dirname)
  if (result) {
    console.log('目录已经存在！')
  } else {
    await fs.promises.mkdir(dirname)
    console.log('目录创建成功！')
  }
}

test()

module.exports = {
  pathExists
}