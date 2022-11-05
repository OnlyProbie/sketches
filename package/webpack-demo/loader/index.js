function cssloader (content) {
  // 处理导入的资源，例如图片等
  return content
}

function styleloader (content) {
  let style = document.createElement('style')
  style.innerHTML = content
  document.appendChild(style)
}