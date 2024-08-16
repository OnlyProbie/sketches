---
layout: post
title: 小程序测试用例编写                              # Title of the page
hide_title: true                                  # Hide the title when displaying the post, but shown in lists of posts
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
bootstrap: true                                   # Add bootstrap to the page
tags: [sample, markdown, jest]
---

**excerpt**

<!-- START doctoc -->
<!-- END doctoc -->

## 测试用例编写示例:
测试用例目录 src/__test__/components，不同组件测试用例可以在该目录下新建文件夹，方便维护，命令和组件保持一致
### 注意事项：
编写过程中发现的问题，可以在这里记录下
#### 用例编写
1、需要前置对组件内部引用的 usingComponents 进行mock，不然可能导致组件解析报错
beforeEach(() => {
  // 进行 usingComponents 组件 mock
  testUtils.mockComponents(['cube-button'])
})
#### 事件测试
1、最基本的测试方法是通过实例进行直接调用，如果涉及属性变更，则可以在 nextTick 之后进行属性值断言
2、可以通过 jest mock 函数的方式，对函数进行调用断言，具体参考 jest 文档
#### 生成快照
1、同一个测试用例如果会生成多个模版快照，可以在改组件用例目录下，编写不同的测试用例文件，命名规则【组件名+场景.spec.js】
