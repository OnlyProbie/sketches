---
layout: post
title: 日常样式问题随记                               # Title of the page
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
tags: [JavaScript, Css, Web]
---

**日常样式问题随记**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [web](#web)
  - [标点符号不出现在行首且换行](#%E6%A0%87%E7%82%B9%E7%AC%A6%E5%8F%B7%E4%B8%8D%E5%87%BA%E7%8E%B0%E5%9C%A8%E8%A1%8C%E9%A6%96%E4%B8%94%E6%8D%A2%E8%A1%8C)
  - [多行文字处理](#%E5%A4%9A%E8%A1%8C%E6%96%87%E5%AD%97%E5%A4%84%E7%90%86)
  - [移动端android line-height不居中的问题解决方法](#%E7%A7%BB%E5%8A%A8%E7%AB%AFandroid-line-height%E4%B8%8D%E5%B1%85%E4%B8%AD%E7%9A%84%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95)
  - [ios键盘弹出导致表单input select等表单填写标签focus移位](#ios%E9%94%AE%E7%9B%98%E5%BC%B9%E5%87%BA%E5%AF%BC%E8%87%B4%E8%A1%A8%E5%8D%95input-select%E7%AD%89%E8%A1%A8%E5%8D%95%E5%A1%AB%E5%86%99%E6%A0%87%E7%AD%BEfocus%E7%A7%BB%E4%BD%8D)
  - [禁止微信自带的下拉弹性效果](#%E7%A6%81%E6%AD%A2%E5%BE%AE%E4%BF%A1%E8%87%AA%E5%B8%A6%E7%9A%84%E4%B8%8B%E6%8B%89%E5%BC%B9%E6%80%A7%E6%95%88%E6%9E%9C)
  - [css动画使用](#css%E5%8A%A8%E7%94%BB%E4%BD%BF%E7%94%A8)
  - [视频自动播放](#%E8%A7%86%E9%A2%91%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE)
  - [布局屏幕适配解决方案](#%E5%B8%83%E5%B1%80%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
  - [样式冲突问题](#%E6%A0%B7%E5%BC%8F%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98)
  - [flex布局下，子元素内容超出打点省略](#flex%E5%B8%83%E5%B1%80%E4%B8%8B%E5%AD%90%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9%E8%B6%85%E5%87%BA%E6%89%93%E7%82%B9%E7%9C%81%E7%95%A5)
  - [实现1px的边框](#%E5%AE%9E%E7%8E%B01px%E7%9A%84%E8%BE%B9%E6%A1%86)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# web

## 标点符号不出现在行首且换行

```css
word-break: normal;
word-wrap: break-word;
```
## 多行文字处理

```css
/* 限制文字显示行数 */
word-wrap: break-word;
word-break: normal;
overflow: hidden;
line-clamp: 2;
/* 控制文字超出显示省略号 */
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
/* 多行文字溢出打点 */
display: -webkit-box;
overflow:hidden;
text-overflow:ellipsis;
word-wrap: break-word;
-webkit-line-clamp: 2; /* 行数 */
-webkit-box-orient: vertical;
```

## 移动端android line-height不居中的问题解决方法

一般文本垂直居中都是通过line-height来实现的，但是有些时候在安卓端line-height是不生效的

```css
span {
  height: 30px;
  line-height: 30px;   /* 此处的line-height在Android上是不生效的 */
}
```
解决方法是给文本包裹元素的before伪元素添加以下css属性：

```css
span::before{
   content: '';
   display: inline-block;
   vertical-align: middle;
   width: 0;
   height: 100%;
   margin-top: 1px;
}
```

## ios键盘弹出导致表单input select等表单填写标签focus移位

原因：由于键盘弹出使得页面整体上移，键盘消失后，页面上移的元素不能回到原来的地方
解决方法：标签添加blur事件，通过window.scrollTo(0,0)使得页面回滚到原来的位置，有时候会有输入框点击不灵敏的情况出现，可以通过手动点击事件获取焦点

```html
<div @click="focus($event)">
  <textarea v-model="slogan.value"
            :placeholder="slogan.slogan_placeholder"
            @blur="blur" class="dialog-form-item"></textarea>
</div>
```
```js
focus(e){
  clearTimeout(this.blurTimer);
  e.target.focus();
}
blur(){
  this.blurTimer=setTimeout(()=>{
    window.scrollTo(0,0);
  },300);
}
```

## 禁止微信自带的下拉弹性效果

```js
document.body.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });
//安卓只有e.preventDefault就可以
//ios必须加上{ passive: false }才可以
//就不需要fixed定位了
```

## css动画使用

css控制dom元素的变换
Background-position 控制背景图片移动在手机端可能会有效果（卡顿）性能问题
使用transform:translate() 效果更佳
使用transform:translate3d(0,0,0)可开启GPU渲染

## 视频自动播放

安卓不能自动播放，需要有点击事件的触发，才可以调用video的play方法

## 布局屏幕适配解决方案

1、通过百分比设置宽高(vh, vw)
2、通过flex布局，给固定内容指定高度不变，其他部分可以通过自适应方式解决
例如对于页面分为两块的，上面自适应，下面高度固定：

```css
 div {
    display: flex;
    div {
       flex: 1;
    }
    div {
       height: 500px;
    }
 }
```

## 样式冲突问题

1、样式隔离
2、特殊命名

## flex布局下，子元素内容超出打点省略

在下面的左右两栏布局中，我们要实现的是在最外层父级元素自适应宽度（跟随屏幕宽度）的情况下，子元素不定宽实现内容自适应超出打点省略。即 container 自适应宽度（跟随屏幕宽度），right定宽，left自适应宽度。实现left下context内容不换行超出打点省略，则需要在left元素上添加`overflow: hidden`属性即可实现。

```html
<div class="container">
  <div class="wrap">
    <div class="left">
      <div class="title">我是一个title</div>
      <div class="sub-title">
        <div class="context">此处是需要打点省略的长文案</div>
      </div>
    </div>
    <div class="right">
      取消按钮
    </div>
  </div>
</div>
```

通过css实现如下：

```css
.container {
  display: inline-block;
  width: 240px; /* 此处宽度为模拟屏幕宽度（可理解为定宽） */
  background-color: #ccc;

}
.wrap {
  display: flex;
}
.left {
  border: 2px solid #f40;
  border-radius: 5px;
  overflow: hidden;
}
.left .title {
  font-size: 24px;
  font-weigth: 500;
}
.left .sub-title .context {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.right {
  width: 80px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: 2px solid #111;
  border-radius: 5px;
}
```

## 实现1px的边框

```html
<div class="border" >按钮</div>
```

```css
.border {
  position: relative;
  padding: 5px 10px;
  display: inline-block;
}
.border::after {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  display: inline-block;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  border: 1px solid #f40;
  border-radius: 4px;
  background-color: rgba(0,0,0,0);
  transform: scale(0.5);
  transform-origin: left top;
}
```