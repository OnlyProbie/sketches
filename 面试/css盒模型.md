# CSS 盒模型

## 基本概念：

### 标准模型 + IE 模型

### 区别：

标准模型：宽度指的是内容区的宽度

- width = content

IE 模型：宽度包含了内容区，边框，内边距

- width = border + padding + content

### css 如何设置这两种模型

- box-sizing: content-box --> 标准模型（浏览器默认）
- box-sizing: border-box --> IE 模型

### js 如何设置及获取盒模型对应的宽和高

- dom.style.width/height 取出的是内联样式的宽和高
- dom.currentStyle.width/height 得到的是即时渲染之后的（IE 支持）
- window.getComputedStyle(dom).width/height
- dom.getBoundingClientRect().width/height

### 实例题：(根据盒模型解释边距重叠)

### BFC(边距重叠解决方案)

基本概念：块级格式化上下文

原理：

- 垂直边距重叠
- 不会与浮动元素重叠
- 外面的元素不会影响内部的元素，内部元素不会影响外部元素
- 计算高度时，浮动元素也会被计算

创建 BFC：

- 父级元素添加 overflow：hidden
- float 值不为 none
- position 的值不为 static 或 relative
- display 属性为 table 及相关属性
