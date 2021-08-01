---
layout: post
title: Structure
tags: [Katex, Markdown]
---


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**简单数据结构的JavaScript实现**

- [数组](#%E6%95%B0%E7%BB%84)
  - [数组定义时，确定数组的长度（数组定长）](#%E6%95%B0%E7%BB%84%E5%AE%9A%E4%B9%89%E6%97%B6%E7%A1%AE%E5%AE%9A%E6%95%B0%E7%BB%84%E7%9A%84%E9%95%BF%E5%BA%A6%E6%95%B0%E7%BB%84%E5%AE%9A%E9%95%BF)
  - [定义数组时，声明的变量，是数组的第一个元素的存储地址，](#%E5%AE%9A%E4%B9%89%E6%95%B0%E7%BB%84%E6%97%B6%E5%A3%B0%E6%98%8E%E7%9A%84%E5%8F%98%E9%87%8F%E6%98%AF%E6%95%B0%E7%BB%84%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E5%AD%98%E5%82%A8%E5%9C%B0%E5%9D%80)
  - [数组的优点：](#%E6%95%B0%E7%BB%84%E7%9A%84%E4%BC%98%E7%82%B9)
    - [1. 查询性能好，指定查询的某个位置](#1-%E6%9F%A5%E8%AF%A2%E6%80%A7%E8%83%BD%E5%A5%BD%E6%8C%87%E5%AE%9A%E6%9F%A5%E8%AF%A2%E7%9A%84%E6%9F%90%E4%B8%AA%E4%BD%8D%E7%BD%AE)
  - [数组的缺点：](#%E6%95%B0%E7%BB%84%E7%9A%84%E7%BC%BA%E7%82%B9)
    - [1. 数组空间是连续的](#1-%E6%95%B0%E7%BB%84%E7%A9%BA%E9%97%B4%E6%98%AF%E8%BF%9E%E7%BB%AD%E7%9A%84)
    - [2. 数组定长](#2-%E6%95%B0%E7%BB%84%E5%AE%9A%E9%95%BF)
  - [chrome v8引擎 对数组进行了优化](#chrome-v8%E5%BC%95%E6%93%8E-%E5%AF%B9%E6%95%B0%E7%BB%84%E8%BF%9B%E8%A1%8C%E4%BA%86%E4%BC%98%E5%8C%96)
- [栈](#%E6%A0%88)
- [排序](#%E6%8E%92%E5%BA%8F)
  - [插入排序](#%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F)
  - [选择排序](#%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)
  - [冒泡排序](#%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F)
  - [归并排序](#%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F)
  - [简单快速排序](#%E7%AE%80%E5%8D%95%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F)
  - [标准快速排序](#%E6%A0%87%E5%87%86%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F)
  - [希尔排序](#%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F)
- [查找](#%E6%9F%A5%E6%89%BE)
  - [二分查找](#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE)
  - [插值查找](#%E6%8F%92%E5%80%BC%E6%9F%A5%E6%89%BE)
    - [14基于有序序列和二分查找，是对二分查找的优化](#14%E5%9F%BA%E4%BA%8E%E6%9C%89%E5%BA%8F%E5%BA%8F%E5%88%97%E5%92%8C%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E6%98%AF%E5%AF%B9%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%9A%84%E4%BC%98%E5%8C%96)
  - [顺序查找](#%E9%A1%BA%E5%BA%8F%E6%9F%A5%E6%89%BE)
- [链表](#%E9%93%BE%E8%A1%A8)
  - [双向链表](#%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8)
  - [链表的遍历](#%E9%93%BE%E8%A1%A8%E7%9A%84%E9%81%8D%E5%8E%86)
  - [链表的逆置](#%E9%93%BE%E8%A1%A8%E7%9A%84%E9%80%86%E7%BD%AE)
  - [树的广度优先搜索](#%E6%A0%91%E7%9A%84%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
  - [树的深度优先搜索](#%E6%A0%91%E7%9A%84%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
- [二叉树](#%E4%BA%8C%E5%8F%89%E6%A0%91)
  - [满二叉树：](#%E6%BB%A1%E4%BA%8C%E5%8F%89%E6%A0%91)
  - [完全二叉树：](#%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91)
  - [二叉树的遍历](#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86)
    - [构造二叉树](#%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91)
    - [递归遍历](#%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86)
      - [前序遍历](#%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86)
      - [中序遍历](#%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86)
    - [非递归实现遍历](#%E9%9D%9E%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%E9%81%8D%E5%8E%86)
      - [前序遍历](#%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86-1)
      - [中序遍历](#%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86-1)
      - [后序遍历](#%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86)
    - [层序遍历](#%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86)
  - [二叉树的比较](#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%AF%94%E8%BE%83)
  - [二叉树的单旋操作](#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%8D%95%E6%97%8B%E6%93%8D%E4%BD%9C)
  - [二叉树的搜索](#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%90%9C%E7%B4%A2)
    - [深度优先搜索](#%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
    - [广度优先搜索](#%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
  - [二叉搜索树](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91)
  - [二叉平衡搜索树](#%E4%BA%8C%E5%8F%89%E5%B9%B3%E8%A1%A1%E6%90%9C%E7%B4%A2%E6%A0%91)
  - [还原二叉树](#%E8%BF%98%E5%8E%9F%E4%BA%8C%E5%8F%89%E6%A0%91)
    - [给出前序中序还原二叉树，写出后序遍历](#%E7%BB%99%E5%87%BA%E5%89%8D%E5%BA%8F%E4%B8%AD%E5%BA%8F%E8%BF%98%E5%8E%9F%E4%BA%8C%E5%8F%89%E6%A0%91%E5%86%99%E5%87%BA%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86)
    - [给出后序中序还原二叉树，写出前序遍历](#%E7%BB%99%E5%87%BA%E5%90%8E%E5%BA%8F%E4%B8%AD%E5%BA%8F%E8%BF%98%E5%8E%9F%E4%BA%8C%E5%8F%89%E6%A0%91%E5%86%99%E5%87%BA%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86)
- [图](#%E5%9B%BE)
  - [图的创建](#%E5%9B%BE%E7%9A%84%E5%88%9B%E5%BB%BA)
  - [最小生成树](#%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91)
  - [图的广度优先搜索](#%E5%9B%BE%E7%9A%84%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
  - [图的深度优先遍历](#%E5%9B%BE%E7%9A%84%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86)
  - [克鲁斯卡尔算法](#%E5%85%8B%E9%B2%81%E6%96%AF%E5%8D%A1%E5%B0%94%E7%AE%97%E6%B3%95)
  - [普利姆算法](#%E6%99%AE%E5%88%A9%E5%A7%86%E7%AE%97%E6%B3%95)
- [动态规划](#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)
  - [斐波那契数列](#%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)
  - [青蛙跳台阶问题：](#%E9%9D%92%E8%9B%99%E8%B7%B3%E5%8F%B0%E9%98%B6%E9%97%AE%E9%A2%98)
  - [变态青蛙跳台阶问题（升级版）](#%E5%8F%98%E6%80%81%E9%9D%92%E8%9B%99%E8%B7%B3%E5%8F%B0%E9%98%B6%E9%97%AE%E9%A2%98%E5%8D%87%E7%BA%A7%E7%89%88)
  - [最长公共子序列问题（LCS）](#%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97%E9%97%AE%E9%A2%98lcs)
- [贪心算法](#%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



# 数组
## 数组定义时，确定数组的长度（数组定长）
js数组扩容需要消耗CPU，影响性能（操作系统分配内存空间）
js的数组在底层是一个链表（哈希表），添加元素时，可以自动扩容
## 定义数组时，声明的变量，是数组的第一个元素的存储地址，
访问数组元素时，其中的[]中的数值代表了首元素存储地址的偏移
通过偏移量查询数据，性能最好

```js
eg: var arr = [1,2,3,4]
arr[1] // 访问数组的第二个元素，是arr变量所指向的存储地址偏移了一个位置
```
## 数组的优点：
### 1. 查询性能好，指定查询的某个位置
## 数组的缺点：
### 1. 数组空间是连续的
如果数组比较大时，当系统的空间碎片较多的时候，容易存不下
### 2. 数组定长
数组内容很难进行添加和删除操作

## chrome v8引擎 对数组进行了优化
让数组每个元素固定占用32位的空间（4个字节）
针对数字，如果这个空间不够的话，内部会转换为Double对象
针对对象，存储32位的地址
目前的js数组都是真正的数组
数组的长度不够的时候，会重新创建一个数组，新开辟的数组的长度 = 原数组长度 + 原数组长度的一半 + 16
> 原数组长度为6， 则新的数组的长度为 6 + 3 + 16 = 25；
如果空间不够，重复上述操作

# 栈

>先入后出

```js
function Stack() {
    this.arr = [];
    this.push = function (value) {
        this.arr.push(value);
    };
    this.pop = function () {
        return this.arr.pop();
    }
}
// test
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.arr);
stack.pop();
console.log(stack.arr);
```
# 队列

> 先入先出

```js
function Queue() {
    this.arr = [];
    this.push = function (value) {
        this.arr.push(value);
    }
    this.pop = function () {
        return this.arr.shift();
    }
}
// test
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);
queue.pop();
console.log(queue.arr);
```

# 排序

## 插入排序

将序列分为两个部分，一部分是无序的，一部分是有序的，要做的就是不断的从无序的部分取出数据，加入到有序的部分，直到整个序列有序

```js
function insertionSort(arr) {
    if (arr == null || arr.length == 0) return null;
    // 默认第一个是排好序的
    for (var i = 1; i < arr.length; i++) {
        // 判断当前的元素（未排序）是不是小于前一个元素（已经排序）
        if (arr[i] < arr[i - 1]) {
            // 使用一个变量记录当前未排序的元素
            var temp = arr[i];
            // 遍历已排序的元素，并向后移动
            for (var j = i; j >= 0; j--) {
                if (j > 0 && temp < arr[j - 1]) {
                    arr[j] = arr[j - 1];
                } else {
                    arr[j] = temp;
                    break;
                }
            }
        }
    }
    return arr;
}
```
## 选择排序

每一次选出的最大数（或者最小数），和后面（或者前面）的元素交换位置

```js
var arr = [4, 1, 6, 9, 3, 2, 8, 7, 5];

// 比较
// function compare(a, b) {
//     if (a < b) return true;
//     else return false;
// }
// 交换
function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
// 排序
function sort(arr) {
    if (arr == null || arr.length == 0) return;
    for (var j = 0; j < arr.length - 1; j++) {
        // 查找最大数排序
        // var maxIndex = 0;
        // for (i = 0; i < arr.length - j; i++) {
        //     if (arr[maxIndex] < arr[i]) {
        //         maxIndex = i;
        //     }
        // }
        // exchange(arr, maxIndex, arr.length - 1 - j);
        // 查找最小数排序
        var minIndex = j;
        for (var i = j + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        exchange(arr, j, minIndex);
    }
    return arr;
}
```

## 冒泡排序

每一次都是两两元素相比较，找到最大的数，放到数组的最后

```js
// 通过比较得出是否需要交换
function compare(a, b) {
    if (a > b) return true;
    else return false;
}
// 交换
function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
// 排序
function sort(arr) {
    if (arr == null || arr.length == 0) return;
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                exchange(arr, i, i + 1);
            }
        }
    }
    return arr;
}

```

## 归并排序

从中间开始，将数组通过二分法的形式，分为一个个单元素，然后两两比较，合并排序

```js
function sort(arr) {
    if (arr == null || arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sort(arr.slice(0, mid));
    let right = sort(arr.slice(mid, arr.length));
    return merge(left, right);

    function merge(arr1, arr2) {
        let result = [],
            left = 0,
            right = 0;
        while (left < arr1.length && right < arr2.length) {
            if (arr1[left] < arr2[right]) {
                result.push(arr1[left]);
                left++;
            } else {
                result.push(arr2[right]);
                right++;
            }
        }
        result = result.concat(arr1.slice(left, arr1.length), arr2.slice(right, arr2.length));
        return result;
    }
}
```

##  简单快速排序

> 创建了多个数组，性能有影响

```js
function quickSort(arr) {
    // 严谨性判断
    // 注意：此处因为有数组的push操作，所以返回值为一个空数组
    if (arr == null || arr.length == 0) return [];
    // 选班长
    var leader = arr[0];
    // 小左，大右
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < leader) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}
```

##  标准快速排序

- 指定两个指针left，right，分别指向数组的首元素和尾元素
- 两个指针分别向中间移动，同时和数组首元素进行比较
- 首先移动left指针，当left指针指向的元素大于首元素时，停止移动
- 接着移动right指针，当right指针指向的元素小于首元素时，停止移动，将 left指针指向的元素和right指针指向的元素进行交换
- 重复以上步骤，直到left == right;
- 将首元素和right指针指向的元素进行交换位置
- 分别对两侧的数组元素进行以上步骤（递归），最终实现排序

```js
function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSort2(arr, begin, end) {
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while (left < right && arr[right] > arr[begin]);
        if (left < right) exchange(arr, left, right);
    } while (left < right)
    var exchangePoint = left == right ? right - 1 : right;
    console.log(exchangePoint);
    exchange(arr, begin, exchangePoint);
    quickSort2(arr, begin, exchangePoint);
    quickSort2(arr, exchangePoint + 1, end);
    return arr;
}

function quickSort(arr) {
    // 严谨性判断
    if (arr == null || arr.length == 0) return;
    return quickSort2(arr, 0, arr.length);
}

```

##  希尔排序

```js
function shellSort(arr) {
    var len = arr.length,
        temp = null,
        gap = 1;
    while (gap < len / 5) {
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];
            for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}
```

# 查找

##  二分查找

 - 如果要查找的序列是一个已经排好序的序列
 - 查找中间的值，和目标值比较，如果比目标值大，则在较小数的区间查找
 - 找到中间的值，和目标值比较，……
 - 重复以上步骤

```js
var arr = [4, 1, 6, 9, 3, 2, 8, 7, 5];

function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 排序
function quickSort(arr, begin, end) {
    if (arr == null || arr.length == 0) return;
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin])
        do right--; while (left < right && arr[right] > arr[begin]);
        if (left < right) exchange(arr, left, right);
    } while (left < right);
    var exchangePoint = left == right ? right - 1 : right;
    exchange(arr, begin, exchangePoint);
    quickSort(arr, begin, exchangePoint);
    quickSort(arr, exchangePoint + 1, end);
    return arr;
}

// 查找
function binarySearch(arr, target) {
    if (arr == null || arr.length == 0) return false;
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    while (minIndex <= maxIndex) {
        var mid = Math.floor((minIndex + maxIndex) / 2);
        if (arr[mid] == target) {
            return true;
        } else if (arr[mid] > target) {
            maxIndex = mid - 1;
        } else {
            minIndex = mid + 1;
        }
    }
    return false;
}

// test
var newArr = quickSort(arr, 0, arr.length);
var result = binarySearch(newArr, 10);
console.log(result);
```

##  插值查找

###  14基于有序序列和二分查找，是对二分查找的优化

遵循以下公式：
 - （目标值 - 最小值）/ （最大值 - 最小值）≈（目标值下标 - 最小值下标）/（最大值下标 - 最小值下标）
 - 目标值下标 = （目标值 - 最小值）/ （最大值 - 最小值）* （最大值下标 - 最小值下标） + 最小值下标

```js
var arr = [4, 1, 6, 9, 3, 2, 8, 7, 5];

function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 排序
function quickSort(arr, begin, end) {
    if (arr == null || arr.length == 0) return;
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin])
        do right--; while (left < right && arr[right] > arr[begin]);
        if (left < right) exchange(arr, left, right);
    } while (left < right);
    var exchangePoint = left == right ? right - 1 : right;
    exchange(arr, begin, exchangePoint);
    quickSort(arr, begin, exchangePoint);
    quickSort(arr, exchangePoint + 1, end);
    return arr;
}

// 插值查找
function insertSearch(arr, target) {
    if (arr == null || arr.length == 0) return false;
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    while (minIndex <= maxIndex) {
        var mid = (target - arr[minIndex]) / (arr[maxIndex] - arr[minIndex]) * (maxIndex - minIndex) + minIndex;
        if (arr[mid] == target) {
            return true;
        } else if (arr[mid] > target) {
            maxIndex = mid - 1;
        } else {
            minIndex = mid + 1;
        }
    }
    return false;
}

// test
var newArr = quickSort(arr, 0, arr.length);
var result = insertSearch(arr, 10);
console.log(result);
```

##  顺序查找

```js
function inOrderSearch(arr, target) {
    if (arr == null || arr.length == 0) return null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === tartget) {
            return true;
        }
    }
    return false;
}
```

# 链表

特点
- 空间上不连续
- 没存放一个值，都要多开销引用空间
- 传递链表，必须传递链表的根节点
> 每一个节点都认为自己是根节点

优点：
- 只要内存足够大，就能存的下，不用担心空间碎片的问题
- 链表的添加和删除非常的容易
> 链表在一定程度上解决了数组的缺点

缺点：
- 查询的速度慢
- 链表每个节点都需要创建一个指向下一个节点的引用，浪费一些空间
> 当节点内数据越多的时候，引用所开销的影响越小

```js
// 链表结构创建
function Node(value) {
    this.value = value; // 当前节点的值
    this.next = null; // 当前节点指向的下一个节点
}
// 输出链表
function printLink(root) {
    if (root) {
        console.log(root.value);
        printLink(root.next);
    }
}
// 输出链表长度
function countLink(root) {
    if (root == null) return 0;
    return countLink(root.next) + 1;
}
// 获取链表某个下标的元素
function getValue(root, index) {
    function _getValue(root, i) {
        if (root == null) return null;
        if (i == index) return root;
        return _getValue(root.next, i + 1);
    }
    return _getValue(root, 0);
}

// 设置链表某个位置的数据
function setValue(root, index, value) {
    function _setValue(root, i) {
        if (root == null) return;
        if (i == index) root.value = value;
        else _setValue(root.next, i + 1);
    }
    return _setValue(root, 0);
}
// 给链表添加数据
function addNode(root, value) {
    if (root == null) {
        return;
    } else if (root.next == null) {
        root.next = new Node(value);
    } else {
        addNode(root.next, value);
    }
}
// 给链表插入数据
// node：表示要插入数据的前一个节点
function insertNode(node, value) {
    var newNode = new Node(value);
    newNode.next = root.next;
    root.next = newNode;
}
// 删除链表某个位置的数据
function delNode(root, index) {
    if (root == null) return null;
    if (getValue(root, index) == null) {
        return null;
    }

    function _delNode(i) {
        if (i == index) {
            var nextNode = getValue(root, i + 1);
            var preNode = getValue(root, i - 1);
            if (nextNode) {
                preNode.next = nextNode;
            } else {
                preNode.next = null;
            }
            return root;
        } else {
            return _delNode(i + 1);
        }
    }
    if (index == 0) {
        var newRoot = root.next;
        root.next = null;
        return newRoot;
    } else if (index < 0) {
        return null;
    } else {
        return _delNode(0);
    }
}

// test
var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
a.next = b;
b.next = c;
c.next = d;
d.next = null;
console.log(a.next.next.next.value);
console.log('========');
printLink(a);
console.log('========');
console.log(countLink(a));
console.log('========');
console.log(getValue(a, 3));
console.log('========');
setValue(a, 2, 'a');
console.log('========');
printLink(a);
console.log('========');
addNode(a, 90);
console.log('========');
printLink(a);
console.log('========');
console.log(delNode(a, -2));
```

##  双向链表
双向链表的优点：
 - 无论给出哪个节点，都可以对整个链表进行遍历
双向链表的缺点：
 - 多耗费一个引用的空间，而且构建双向链表比价复杂
> 双向链表可以实现的，都可以使用单链表实现

##  链表的遍历

```js
// 循环遍历
function bianliLink(root) {
    var temp = root;
    while (true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
}
bianliLink(node1);
// 递归遍历
// 注意：递归遍历必须有出口（书写递归时，先写递归出口）
function diGuiBianLiLink(root) {
    if (root == null) return;
    console.log(root.value);
    diGuiBianLiLink(root.next);
}
diGuiBianLiLink(node1);
```

##  链表的逆置

> 先找到最后的节点

```js
function nizhi(root) {
    // 代表当前是倒数第二个节点
    if (root.next.next == null) {
        root.next.next = root; // 让最后一个节点指向自己
        return root.next;
    } else {
        var result = nizhi(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}
```
# 树

> 有向无环图

- 树形结构有一个根节点
- 没有回路，树是图的一种
**节点：** 既不是根节点，又不是叶子节点的普通节点
**树的度：** 这棵树最多叉的节点有多少个叉，这棵树的度就为多少
**树的深度：** 树最深有几层，树的深度就为几

##  树的广度优先搜索
> 将所有的点都按照顺序添加到数组中，每一层都是一个新的数组

```js
function breathSearch(roots, target) {
    if (roots == null || roots.length == 0) return false;
    var childs = [];
    for (var i = 0; i < roots.length; i++) {
        if (roots[i].value == target) {
            return true;
        } else {
            childs = childs.concat(roots[i].childs);
        }
    }
    return breathSearch(childs, target);
}
// test
console.log(breathSearch([a], 'n'));
```

##  树的深度优先搜索
```js
function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var result = null;
    for (var i = 0; i < root.childs.length; i++) {
        // if (deepSearch(root.childs[i], target)) {
        //     return true;
        // }
        result |= deepSearch(root.childs[i], target);
    }
    // return false;
    return result ? true : false;
}
// deepSearch(a, 'c');
console.log(deepSearch(a, 'n'));
```

# 二叉树
 > 树的度最多为2的树形结构

##  满二叉树：

 - 所有的叶子节点都在最底层
 - 每个节点都有两个子节点

##  完全二叉树：
 - 国内定义：
   - 叶子节点都在最后一层或倒数第二层
   - 叶子节点都向左聚拢（靠左）
 - 国际定义：
   - 叶子节点都在最后一层或倒数第二层
   - 如果有叶子节点，就必然有两个叶子节点

##  二叉树的遍历

> 传递二叉树需要传递根节点

### 构造二叉树

```js
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
```
### 递归遍历

#### 前序遍历

> 当前的，左边的，右边的

```js
function f1(root) {
    if (root == null) return;
    console.log(root.value);
    f1(root.left);
    f1(root.right);
}
f1(a); // a, c, f, g, b, d, e
```
#### 中序遍历
> 左边的，当前的，右边的

```js
function f2(root) {
    if (root == null) return;
    f2(root.left);
    console.log(root.value);
    f2(root.right);
}
f2(a); // f, c, g, a, d, b, e
```
#### 后序遍历
> 左边的，右边的，当前的

```js
function f3(root) {
    if (root == null) return;
    f3(root.left);
    f3(root.right);
    console.log(root.value);
}
f3(a); // f, g, c, d, e, b, a
```

### 非递归实现遍历

#### 前序遍历
```js
function func1(root) {
    if (root === null) return [];
    const nodeArr = [];
    const res = [];
    nodeArr.push(root);

    while (nodeArr.length) {
        const node = nodeArr.pop();
        res.push(node.value);
        if (node.right) {
            nodeArr.push(node.right);
        }
        if (node.left) {
            nodeArr.push(node.left);
        }
    }
    return res;
}
console.log(func1(a));
```
#### 中序遍历
```js
function func2(root) {
    if (root === null) return [];
    const nodeArr = [];
    const res = [];
    while (root !== null || nodeArr.length > 0) {
        while (root !== null) {
            nodeArr.push(root);
            root = root.left;
        }
        root = nodeArr.pop();
        res.push(root.value);
        root = root.right;
    }
    return res;
}
// console.log(func2(a));
```

#### 后序遍历
```js
function func3(root) {
    if (root == null) return [];
    const nodeArr = [];
    const res = [];
    nodeArr.push(root);
    while (nodeArr.length > 0) {
        const node = nodeArr.pop();
        res.unshift(node.value);
        if (node.left) {
            nodeArr.push(node.left);
        }
        if (node.right) {
            nodeArr.push(node.right);
        }
    }
    return res;
}
console.log(func3(a));
```

### 层序遍历

```js
function f4(root) {
    if (root == null) return;
    let result = [],
        nodeList = [];
    nodeList.push(root);
    while (nodeList.length) {
        let node = nodeList.shift();
        result.push(node);
        if (node.left) {
            nodeList.push(node.left);
        }
        if (node.right) {
            nodeList.push(node.right);
        }
    }
    return result;
}

console.log(f4(a));
```

##  二叉树的比较

遇到二叉树比较的问题时，必须要确定，左右两棵子树如果交换位置，即左右互换算不算同一棵树

```js
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

var a2 = new Node('a');
var b2 = new Node('b');
var c2 = new Node('c');
var d2 = new Node('d');
var e2 = new Node('e');
var f2 = new Node('f');
var g2 = new Node('g');

a2.right = c2;
a2.left = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2

// 比较两个树是否相等
function compareTree1(root1, root2) {
    if (root1 == root2) return true; // 是同一棵树
    if (root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if (root1.value != root2.value) return false;
    var leftBool = compareTree1(root1.left, root2.left);
    var rightBool = compareTree1(root1.right, root2.right);
    return leftBool && rightBool;
}

console.log(compareTree1(a1, a2));

// 可以互换的情况
function compareTree2(root1, root2) {
    if (root1 == root2) return true;
    if (root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if (root1.value != root2.value) return true;
    return compareTree2(root1.left, root2.left) && compareTree2(root1.right, root2.right) || compareTree2(root1
        .left, root2.right) && compareTree2(root1.right, root2.left);
}

console.log(compareTree(a1, a2));
```

##  二叉树的单旋操作

某一节点不平衡
 - 如果左边浅，右边深，进行左单旋
 - 如果右边浅，左边深，进行右单旋

左单旋，右单旋
 - 旋转节点： 不平衡的节点为旋转节点
 - 新根： 旋转之后称为根节点的节点
 - 变化分支： 父级节点发生变化的那个分支
 - 不变分支： 父级节点不变的那个分支


>左单旋时
> - 旋转节点：当前不平衡的节点
> - 新根：右子树的根节点
> - 变化分支： 旋转节点的右子树的左子树
> - 不变分支： 旋转节点的右子树的右子树

>右单旋时
> - 旋转节点： 当前不平衡的节点
> - 新根： 左子树的根节点
> - 变化分支： 旋转节点的左子树的右子树
> - 不变分支： 旋转节点的左子树的左子树

```js
// 获取树的高度
function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 判断是否平衡
function isBalance(root) {
    if (root == null) return false;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

function leftRotate(root) {
    // 找到新根
    var newRoot = root.right;
    // 找到变化分支
    var changeTree = root.right.left;
    // 当前旋转节点的右孩子为变化分支
    root.right = changeTree;
    // 新根的左孩子为旋转节点
    newRoot.left = root;
    // 返回新的根节点
    return newRoot;
}

function rightRotate(root) {
    // 找到新根
    var newRoot = root.left;
    // 找到变化分支
    var changeTree = root.left.right;
    // 当前旋转节点的左孩子为变化分支
    root.left = changeTree;
    // 新根的右孩子为旋转节点
    newRoot.right = root;
    // 返回新的根节点
    return newRoot;
}

function change(root) {
    if (isBalance(root)) return root;
    if (root.left != null) root.left = change(root.left);
    if (root.right != null) root.right = change(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {
        return rightRotate(root);
    } else {
        return leftRotate(root);
    }
    return root;
}
// test
console.log(isBalance(node2));
var newRoot = change(node2);
console.log(newRoot);
console.log(isBalance(newRoot));
```

##  二叉树的搜索

### 深度优先搜索

对于二叉树来说，深度优先搜索，和前序遍历的顺序是一样的

```js
function deepSearch(root, target) {
    // 严谨性判断
    if (root == null) return false;
    // 判断值是否是目标值
    if (root.value == target) return true;
    // 递归调用
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}
// test
console.log(deepSearch(a, 'g'));
```
### 广度优先搜索

> 一层一层搜索，更适合探索局域

```js
function breadthSearch(rootList, target) {
    // 严谨性判断
    if (rootList == null || rootList.length == 0) return false;
    var NodeList = []; // 存放当前的所有节点对应的子节点（存放每层的节点）
    for (var i = 0; i < rootList.length; i++) {
        console.log(rootList[i]);
        if (rootList[i].value && rootList[i].value == target) {
            return true;
        } else {
            NodeList.push(rootList[i].left);
            NodeList.push(rootList[i].right);
        }
    }
    return breadthSearch(NodeList, target);
}
// test
console.log(breadthSearch([a], 'f'));
```

##  二叉搜索树

> 问题： 有一万个数，写一个方法进行查找，查找给定的数，返回存在还是不存在 （性能好）

二叉搜索树（二叉排序树）：有排序的效果，左子树的节点都比当前节点小，右子树的节点都比当前节点大

```js
var arr = [22, 3, 51, 16, 72, 8, 34, 54, 49, 34, 63, 64];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// 数组中的数和节点值进行比较
function compare(node, value) {
    if (node == null || value == null) return;
    if (node.value == value) return;
    if (value < node.value) {
        if (node.left == null) {
            node.left = new Node(value);
        } else {
            compare(node.left, value);
        }
    } else if (value > node.value) {
        if (node.right == null) {
            node.right = new Node(value);
        } else {
            compare(node.right, value);
        }
    }
}
// 构建二叉树
function buildSearchTree(arr) {
    // 严谨性判断
    if (arr == null || arr.length == 0) return null;
    var root = new Node(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        compare(root, arr[i]);
    }
    return root;
}
// test
var root = buildSearchTree(arr);
console.log(root);

// 二叉搜索树的使用
function SearchByTree(root, target) {
    if (root == null) return false;
    if (root.value == target) {
        return true;
    }
    if (root.value > target) {
        return SearchByTree(root.left, target);
    }
    if (root.value < target) {
        return SearchByTree(root.right, target);
    }
}
// test
var result = SearchByTree(root, 63);
console.log(result)
```

##  二叉平衡搜索树

1. 根节点的左右子树的高度相差不能超过1
2. 这课二叉树的每一个子树都符合第一条

```js
// 获取树的深度
function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 判断是不是平衡树
function isBalance(root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    // 判断子树的高度差
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}
console.log(getDeep(a));
console.log(isBalance(a));
```

##  还原二叉树

### 给出前序中序还原二叉树，写出后序遍历
```js
var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong1 = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node1(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function restore1(qian, zhong) {
    // 严谨性判断
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length)
        return null;
    var root = new Node1(qian[0]);
    var index = zhong.indexOf(root.value); // 找到根节点在中序遍历中的位置
    var qianLeft = qian.slice(1, index + 1); // 找到前序遍历的左子树
    var qianRight = qian.slice(index + 1, qian.length); // 找到前序遍历的右子树
    var zhongLeft = zhong.slice(0, index); // 找到中序遍历的左子树
    var zhongRight = zhong.slice(index + 1, zhong.length); // 找到中序遍历的右子树
    root.left = restore1(qianLeft, zhongLeft); // 根据前序中序的左子树，还原左子树
    root.right = restore1(qianRight, zhongRight); // 根据前序中序的右子树，还原右子树
    return root;
}
// test
console.log(restore1(qian, zhong1));

```

### 给出后序中序还原二叉树，写出前序遍历

```js
var zhong2 = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node2(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function restore2(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length)
        return null;
    var root = new Node2(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value);
    var houLeft = hou.slice(0, index);
    var houRight = hou.slice(index, hou.length - 1);
    var zhongLeft = zhong.slice(0, index);
    var zhongRight = zhong.slice(index + 1, zhong.length);
    root.left = restore2(zhongLeft, houLeft);
    root.right = restore2(zhongRight, houRight);
    return root;
}
// test
console.log(restore2(zhong2, hou));
```

# 图

##  图的创建

表示一个图可以使用点集合和边集合
- 点集合： [a, b, c, d, e]
- 边集合： [[], [], [], [], []]  ---> 二维数组

##  最小生成树

- 将所有的节点都联通，花费的时间或者距离最少
- 有向无环图

##  图的广度优先搜索

```js
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var node1 = new Node('1');
var node2 = new Node('2');
var node3 = new Node('3');
var node4 = new Node('4');
var node5 = new Node('5');

node1.neighbor.push(node2);
node1.neighbor.push(node3);
node1.neighbor.push(node4);
node2.neighbor.push(node1);
node2.neighbor.push(node4);
node3.neighbor.push(node1);
node3.neighbor.push(node4);
node3.neighbor.push(node5);
node4.neighbor.push(node1);
node4.neighbor.push(node2);
node4.neighbor.push(node3);
node5.neighbor.push(node3);

// 和树的广度优先搜索一样，每一层都重新创建一个新的数组
function breathSearch(nodes, target, path) {
    if (nodes == null || nodes.length == 0) return false;
    var nodeArr = [];
    for (var i = 0; i < nodes.length; i++) {
        if (path.indexOf(nodes[i]) > -1) continue;
        path.push(nodes[i]);
        if (nodes[i].value == target) {
            return true;
        } else {
            nodeArr = nodeArr.concat(nodes[i].neighbor);
        }
    }
    return breathSearch(nodeArr, target, path);
}
```

##  图的深度优先遍历

```js
function deepSearch(node, target, path) {
    if (node == null) return false;
    if (path.indexOf(node) > -1) return false;
    path.push(node);
    if (node.value == target) return true;
    var result = false;
    for (var i = 0; i < node.neighbor.length; i++) {
        // path.push(node.neighbor[i]);
        result |= deepSearch(node.neighbor[i], target, path);
    }
    console.log(path);
    return result ? true : false;
}
```

##  克鲁斯卡尔算法

1. 选择最短的边进行链接
2. 保证这个边链接的两端至少有一个点是新的点
3. 或者 这个边是将两个部落进行链接的
4. 重复1到3 直到所有的点都连接到一起

```js
// 对于两个节点之间没有边的用max来表示
var max = 1000000;
// 点集合
var pointSet = [];
// 边集合
var distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighboer = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function canLink(resultList, tempBegin, tempEnd) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    // 两个点都是新的点，可以连接
    // begin在A部落，end没有部落，可以连接
    // end在A部落，begin没有部落，可以连接
    // 两个分别是不同的部落，可以连接
    // 两个在同一个部落，不可以连接
    if (beginIn != null && endIn != null && beginIn == endIn) {
        return false;
    }
    return true;
}

function link(resultList, tempBegin, tempEnd) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    if (beginIn == null && endIn == null) {
        var newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        resultList.push(newArr);
    } else if (beginIn != null && endIn == null) {
        beginIn.push(tempEnd);
    } else if (beginIn == null && endIn != null) {
        endIn.push(beginIn);
    } else if (beginIn != null && endIn != null && beginIn != endIn) {
        var allIn = beginIn.concat(endIn);
        var needRemove = resultList.indexOf(endIn);
        resultList.splice(needRemove, 1);
        needRemove = resultList.indexOf(beginIn);
        resultList.splice(needRemove, 1);
        resultList.push(allIn);
    }
    tempBegin.neighboer.push(tempEnd);
    tempEnd.neighboer.push(tempBegin);
}

function kruskal(pointSet, distance) {
    var resultList = []; // 这里是二维数组，此数组代表的是有多少个部落
    while (true) {
        var minDis = max;
        var begin = null;
        var end = null;
        for (var i = 0; i < distance.length; i++) {
            for (var j = 0; j < distance[i].length; j++) {
                var tempBegin = pointSet[i];
                var tempEnd = pointSet[j];
                if (i != j // 去掉自己到自己
                    &&
                    distance[i][j] < minDis &&
                    canLink(resultList, tempBegin, tempEnd)
                ) {
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                }
            }
        }
        link(resultList, begin, end);
        if (resultList.length == 1 && resultList[0].length == pointSet.length) {
            break;
        }
    }
}
// test
kruskal(pointSet, distance);
console.log(pointSet);
```

##  普利姆算法

1. 任选一个点为起点
2. 找到以当前选中点为起点路径最短的边
3. 如果这个边的另一端没有被联通进来，那么就联结
4. 如果这个边的另一端已经被链接起来，则看倒数第二短的边
5. 重复上述过程，直到所有的点都联通为止

```js
// 对于两个节点之间没有边的用max来表示
var max = 1000000;
// 点集合
var pointSet = [];
// 边集合
var distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighboer = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

// 获取传递的节点在点集合中的位置
function getIndex(str) {
    for (var i = 0; i < pointSet.length; i++) {
        if (str == pointSet[i].value) return i;
    }
    return -1;
}

// 需要传入点的集合，边的集合，当前已经连接的集合
// 此方法，根据当前已经有的节点来进行判断，获取到距离最短的点
function getMinDisNode(pointSet, distance, nowPointSet) {
    var fromNode = null; // 线段的起点
    var minDisNode = null; //线段的终点
    var minDis = max;

    // 根据当前已有的这些点为起点，依次判断链接其他的点的距离是多少
    for (var i = 0; i < nowPointSet.length; i++) {
        // 获取当前节点的序号
        var pointIndex = getIndex(nowPointSet[i].value);
        for (var j = 0; j < distance[pointIndex].length; j++) {
            var thisNode = pointSet[j]
            if (nowPointSet.indexOf(thisNode) < 0 // 不能是已经链接的点
                &&
                distance[pointIndex][j] < minDis) // 点之间的距离是目前最短
            {
                // 线段的起点就是开始传入的点
                fromNode = nowPointSet[i];
                // 线段的终点就是当前对比找到的节点
                minDisNode = thisNode;
                // 最小的距离
                minDis = distance[pointIndex][j];
            }
        }
    }
    // 线段两端的节点互为邻居节点
    fromNode.neighboer.push(minDisNode);
    minDisNode.neighboer.push(fromNode);
    // 返回与线段终点相连的节点集合
    return minDisNode;
}

function prim(pointSet, distance, start) {
    var nowPointSet = [];
    nowPointSet.push(start);
    // 根据当前已有的节点，获取最小的边
    while (true) {
        var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        // 判断是否已经包含了所有的点
        // 即节点集合长度和最终生成的结果集合长度相等
        if (nowPointSet.length == pointSet.length) {
            break;
        }
    }
}
// test
prim(pointSet, distance, pointSet[2]);
console.log(pointSet);
```

# 动态规划

> 分治法

解题思路：
- 采用分治法的思想，将问题分解为一个个小问题解决
- 求解每一个小问题，合并问题结果

##  斐波那契数列

给出第n位，第n位的值为多少

```js
function fibo(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(20));
```
##  青蛙跳台阶问题：

> 一只青蛙，一次只能跳一级台阶，或者两级台阶
> 问： 这个青蛙跳上n级台阶一共有多少中跳法？

如果这种青蛙，跳上了第n级台阶，那么最后一次跳跃之前，他一定在n-1级台阶或者n-2级台阶上

所以，跳上n级台阶有多少种情况就变成了两个子问题:
 - 跳上n-1级台阶的跳法
 - 跳上n-2级台阶的跳法

按照此逻辑递推，跳上n-1级台阶可以拆解为两个子问题:
 - 跳上n-2级台阶的跳法
 - 跳上n-3级台阶的跳法

以此类推……可以发现 ``f(n) = f(n-1) + f(n-2)``

```js
function jump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return jump(n - 1) + jump(n - 2);
}
console.log(jump(5));


function jump2(n) {
    // 使用数组记录已经跳过的台阶的结果
    var table = [];

    function _jump2(n) {
        if (table[n]) return table[n];
        var newRecord;
        if (n == 1) newRecord = 1;
        else if (n == 2) newRecord = 2;
        else {
            newRecord = _jump2(n - 1) + _jump2(n - 2);
        }
        table[n] = newRecord;
        return newRecord;
    }

    var result = _jump2(n);
    console.log(table);
    return result;
}

console.log(jump2(10));
```

##  变态青蛙跳台阶问题（升级版）

这只青蛙，一次可以跳1级台阶，2级台阶，…… n级台阶

根据上述推理可得：``f(n) = f(n - 1) + f(n - 2) + f(n-3) + ... + f(3) + f(2) + f(1) + f(0)``

```js
function superJump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    var result = 0;
    for (var i = 1; i < n; i++) {
        result += superJump(n - i);
    }
    return result + 1;
}
console.log('bain', superJump(100));
```

## 最长公共子序列问题（LCS）

- 判断序列的首字符是否相同，相同，计算剩下的字符串中，首字符是否相同，记录相同的字符；
- 如果首字符不相同，将其中一个字符串去掉首字符在和另一个字符串进行比较，记录相同的字符

重复以上步骤

```js
function LCS(str1, str2) {
    // 记录已经计算过的序列
    var table = [];

    function _LCS(str1, str2) {

        var newResult; // 用于记录最终计算的结果
        if (!str1 || !str2) return "";
        // 判断输入值是否已经有对应的计算结果了
        for (var i = 0; i < table.length; i++) {
            if (table[i].str1 == str1 && table[i].str2 == str2) {
                return table[i].result;
            }
        }
        if (str1[0] == str2[0]) {
            // 两个子串的开头相同
            newResult = str1[0] + _LCS(str1.substr(1), str2.substr(1));
        } else {
            var s1 = _LCS(str1, str2.substr(1));
            var s2 = _LCS(str1.substr(1), str2);
            if (s1.length < s2.length) {
                newResult = s2;
            } else {
                newResult = s1
            }
        }
        table.push({
            str1: str1,
            str2: str2,
            result: newResult
        })
        return newResult;
    }
    return _LCS(str1, str2);
}
// test
var result = LCS('shdjfkalshdfkas', 'sjkljdflksjfklah');
console.log(result);
```

# 贪心算法

> 当遇到一个求解全局最优解的问题时，如果可以将全局问题切分为小的局部问题，并寻求局部最优解，同时，可以证明局部最优解累计的结果就是全局最优解，则可以使用贪心算法

找零问题：
  - 假设你有一间小店，需要找给客户46分钱的硬币，你的货柜里面只有面额为25分，10分，5分和1分的硬币，
  - 如何找零才能保证数额正确并且硬币数最少?

```js
var sale = [25, 10, 5, 1];

function tanxin(total, deno) {
    if (total <= 0 || deno == null || deno.length == 0) return;
    var result = [];
    while (total > 0) {
        var max = -1;
        for (var i = 0; i < deno.length; i++) {
            if (deno[i] <= total && deno[i] > max) {
                max = deno[i];
            }
        }
        result.push(max);
        total = total - max;
    }
    return result;
}
var result = tanxin(46, sale);
console.log(result);
```