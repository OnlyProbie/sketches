---
layout: post
title: Hello World                                # Title of the page
hide_title: true                                  # Hide the title when displaying the post, but shown in lists of posts
feature-img: assets/img/sample.png              # Add a feature-image to the post
thumbnail: assets/img/thumbnails/sample-th.png  # Add a thumbnail image on blog view
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
bootstrap: true                                   # Add bootstrap to the page
tags: [sample, markdown, html]
---

**excerpt**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Compiler Hook 执行顺序](#compiler-hook-%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Compiler Hook 执行顺序

Compiler environment
> - 钩子类型： SyncHook
> -  作用： 设置node环境变量

Compiler afterEnvironment
> - 钩子类型： SyncHook
> - 作用：设置环境变量完成

Compiler entryOption
> - 钩子类型：SyncBailHook
> - 作用: 解析入口文件

Compiler afterPlugins
> - 钩子类型：SyncHook
> - 作用：挂载插件结束（webpack.config.js上会挂载很多插件）

Compiler afterResolvers
> - 钩子类型：SyncHook
> - 作用：在路径解析器初始化之后触发，核心作用是提供路径，这样就能以此找到绝对路径

Compiler initialize
> - 钩子类型：SyncHook
> - 作用：当编译器对象被初始化时调用

Compiler beforeRun
> - 钩子类型：AsyncSeriesHook
> - 作用：在开始执行一次构建之前调用，compiler.run 方法开始执行后立刻进行调用

Compiler run
> - 钩子类型：AsyncSeriesHook
> - 作用：开始编译

Compiler normalModuleFactory
> - 钩子类型：SyncHook
> - 作用： 创建普通模块工厂

Compiler contextModuleFactory
> - 钩子类型：SyncHook
> - 作用：创建上下文模块工厂

Compiler beforeCompile
> - 钩子类型：AsyncSeriesHook
> - 作用：开始编译前

Compiler compile
> - 钩子类型：SyncHook
> - 作用：编译，beforeCompile 之后立即调用，但在一个新的 compilation 创建之前。这个钩子不会被复制到子编译器

Compiler thisCompilation
> - 钩子类型：SyncHook
> - 作用：开始启动编译

Compiler compilation
> - 钩子类型：SyncHook
> - 作用： 创建一个 compilation

Compiler make
> - 钩子类型：AsyncParallelHook
> - 作用：最核心的代码，从入口文件开始编译

Compiler finishMake
> - 钩子类型：AsyncSeriesHook
> - 作用：完成编译

Compiler afterCompile
> - 钩子类型：AsyncSeriesHook
> - 作用：所有的编译完成之后

Compiler shouldEmit
> - 钩子类型：SyncBailHook
> - 作用：询问是否要生成文件

Compiler emit
> - 钩子类型：AsyncSeriesHook
> - 作用：生成文件

Compiler afterEmit
> - 钩子类型：AsyncSeriesHook
> - 作用：资源文件已经生成完成

Compiler done
> - 钩子类型：AsyncSeriesHook
> - 作用：编译完成

Compiler afterDone
> - 钩子类型：SyncHook
> - 作用：编译完成之后

