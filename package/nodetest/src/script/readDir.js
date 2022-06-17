const fs = require('fs')
const path = require('path')

class File {
  constructor(name, ext, isFile, size, createTime, updateTime) {
    this.name = name
    this.ext = ext
    this.isFile = isFile
    this.size = size
    this.createTime = createTime
    this.updateTime = updateTime
  }

  static async getFileObj(filname) {
    await fs.promises.stat(filename)
    return new File()
  }
}

async function readDir () {

}

async function test () {
  const filename = path.resolve(__dirname, '../files/1.txt')
  const file = await File.getFileObj(filename)
}

async function test () {
  const dirname = path.resolve(__dirname, './files')
  const result = await readDir(dirname)
}

test()