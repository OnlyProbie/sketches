# 网络

## IP 地址

1. IP 地址的格式：
   IP 地址分为四个段：XXX.XXX.XXX.XXX，每段 0~255，每个段都是由 8 个 0、1 组成
2. IP 地址的分类：
   一个 IP 地址分为两个部分：网络 ID，主机 ID

   A 类：0.0.0.0 ~ 127.255.255.255 （一个网络有 1600+万台）
   B 类：128.0.0.0 ~ 192.255.255.255（172.16.0.0 ~ 172.31.255.255）
   C 类：192.0.0.0 ~ 223.255.255.255（192.168.XXX.XXX）
   D 类：（多播地址）
   E 类：

### 扩展：

0.0.0.0 表示不知道 IP，但是会匹配到本机

## 域名与 DNS 解析

### 域名解析过程：

首先，计算机是不知道域名对应的 IP 的，先去路由器查找，是否认识这个域名，如果认识，就返回 IP，然后计算机访问这个 IP
如果路由器不认识，就访问上一层的路由器。
如果问到城市级别的路由器的时候，还没有找到，则通过 DNS 服务器查找。
如果 DNS 服务器不认识，继续向上级 DNS 服务器查找。

### 扩展：

用域名和 IP 形成对应关系

路由器保存了域名和 IP 地址的映射表

互联网建立的时候，一共有 13 台总的 DNS 服务器

### 经典一问：当浏览器的地址栏中输入一个 URL 按回车之后，网络中会发生什么？

1. 看浏览器的缓存，在浏览器的缓存中找是否有
2. 如果浏览器不认识，看本机 host 文件（不会缓存，可以自己修改）
3. 如果没有，则访问路由器 -> 上级路由器
4. 继续上级 DNS 服务器上查找
5. 全球 DNS 服务器上查找

## 五层网络模型

应用层 -> HTTP 协议、DNS 协议
传输层 -> TCP 协议（可靠传输）、UDP 协议
网络层 -> IP 地址（IP 协议）
数据链路层 -> mac 地址
物理层 -> 数据传输

## HTTP 协议

请求：request

1. 分为两个部分：
   请求头
   数据体

2. 请求方式 URL 协议版本
   请求方式：GET、POST、HEAD、PUT、DELETE 等

### 经典一问：GET 和 POST 请求有什么区别？

1. 基于什么前提？如果什么前提都没有，不使用任何规范，只考虑语法和理论上的 HTTP 协议，几乎没有什么区别

2. 如果基于 RFC 规范的。
   ##### 理论上：
   - GET 和 POST 具有相同的语法，有不同的语义
   - GET 获取数据，POST 提交数据
   ##### 实现上：各种浏览器就是这个规范的实现者
   常见的不同：
   - GET 的数据在 URL 是可见的，POST 请求不显示在 URL 中
   - GET 对长度是有限制的，POST 是无限的
   - GET 请求的数据可以被收藏，POST 请求的数据不可收藏
   - GET 请求后，按后退按钮，刷新按钮无影响，POST 会重新提交数据
   - GET 只能进行 URL 编码，POST 支持多种编码方式
   - GET 历史参数会被保留在浏览器中，POST 不会保存在浏览器中
   - GET 只接受 ASC||字符，POST 没有限制，允许发二进制
   - GET 与 POST 相比，GET 安全性较差，因为所发的数据是 URL 的一部分
   - GET 参数通过 URL 传递，POST 放在 request body 中

响应：response

1. 分为两个部分：
   响应头
   数据体
2. 协议版本 状态码 message

## Cookie

-- 如果我们用 JS 的变量存储数据，那么页面在关闭的时候，数据就消失了
-- 保持登录状态是怎么做到的？
-- 所以在前端页面上，有可以持久化存储数据的东西，一旦登录成功，就存储在里面

##### 特点：

1. Cookie 是有限制的
2. Cookie 是存储在浏览器中，不是存储在某个页面上的，是可以长期储存的。
3. Cookie 即使是保存在浏览器中，也是存放在相应的域名下的

###### 百度登录过程：

1. 初始状态：没有登录
2. 访问百度的登录，输入用户名密码
3. 如果用户名密码是正确的，百度的后端会向这个域名下设置一个 Cookie，写入用户的基本信息（加密）
4. 以后每向百度发送请求，浏览器都会自动带上这个 Cookie
5. 服务端看到了带有 ID 的 cookie，就可以解析这个加密的 ID，来获取到这个用户本身的 ID
6. 如果能获取到本身的 ID，那么就证明这个用户已经登录过了，所以服务端可以继续保留用户的信息

##### 缺点：当别人拿到你的 Cookie 登录信息，就可以以你的账号进行登录

## Session

存在于服务器端的

##### 缺点：如果用户量非常大，上亿的用户，服务端很耗费资源（存储在内存中）

解决：因为后端可能不止一台服务器，用户的登录信息，一般只存在一台服务器上。
因为用户的登录操作在哪个机器上执行的，就一般存在哪台机器上。
需要进行反向代理。（轮询，IP 哈希）

## 跨域

-- js 文件，css 文件，jpg，png 等都是可以被跨域请求的
-- src 属性的资源都是可以被跨域请求的
-- href 资源大部分都是可以被跨域请求的

##### 哪些资源算跨域请求的资源？

1. 后端接口的数据
2. 其它域的 Cookie
3. 其它域的缓存

##### 什么是其它域？怎么样才算跨域？

页面本身：有协议（http/https)，域名，端口
要请求的数据：http://www.baidu.com:80

协议，域名，端口这三个，有任意一个不一样就算是跨域

##### 跨域行为发生在哪里？

1. 即使跨域了（协议，域名，端口号有不一样的），请求也可以发出
2. 服务端也是可以接收的
3. 服务端也是可以正常处理的
4. 服务端也是可以正常处理数据的
5. 浏览器也能接收到这些数据
6. 但是，接收代码之后，发现当前页面的域和请求的域不同，所以判定为跨域

##### 如何解决跨域问题？

1. 后端是否配合进行跨域
   ① jsonp 解决跨域
   正常情况下，返回的数据都是 json 格式，jsonp 是一种特殊的格式
   ② 后端设置 Access-Control-Allow-Origin 属性以支持跨域
2. 后端不配合我们进行跨域
   ① iframe（只能显示，不能控制）
   ② 通过后端代理（自己的后端）

##### JSONP 原理

1.  判断请求与当前页面的域是否同源，如果同源，发送正常的 ajax，就没有跨域的事情了
2.  如果不同源，创建一个 script 标签
3.  生成一个随机的 callback 名字
4.  设置 script 标签的 src 属性，设置为要请求的接口
5.  将 callback 作为参数拼接在后面
6.  后端接收到请求之后，开始准备要返回的数据
7.  后端拼接数据，将要返回的数据用 callback 的值和括号包裹起来

        eg: callback=asd，

    要返回的数据为

        {a: 1, b: 2}

    就拼接为：

        asd({a: 1, b: 2})

8.  将内容返回。
9.  浏览器接收到内容，会当做 js 代码来执行
10. 执行名为 asd 的方法。

##### 具体实现如下：

```javascript
var $ = {
  ajax: function(options) {
    var url = options.url;
    var type = options.type;
    var dataType = options.dataType;
    // 判断是否同源
    // 获取目标URL的域
    var targetProtocol = ""; // 目标接口的协议
    var targetHost = ""; // 目标接口的host
    if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
      var targetUrl = new URL(url);
      targetProtocol = targetUrl.protocol;
      targetHost = targetUrl.host;
    } else {
      targetProtocol = location.protocol;
      targetHost = location.host;
    }
    if (dataType == "jsonp") {
      // 看是否同源
      // 同源  通过ajax直接请求数据
      if (location.protocol == targetProtocol && location.host == targetHost) {
        var xhr = null;
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
        } else {
          xhr = ActiveXObject("Microsoft.XMLHTTP");
        }
        // console.log(xhr.readyState);
        // open方法，的第三个参数为true或者不传，为异步模式，如果传入false，为同步模式
        xhr.open(type, url, true);
        // console.log(xhr.readyState);
        xhr.onreadystatechange = function() {
          // readyState == 4表示请求完成，已经接收到数据
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById("app").innerHTML = data.msg;
          }
        };
        xhr.send();
      }
      // 不同源
      else {
        var callback = "cb" + Math.floor(Math.random() * 1000000);
        window[callback] = options.success;
        // 生成script标签
        var script = document.createElement("script");
        if (url.indexOf("?") > 0) {
          script.src = url + "&callback=" + callback;
        } else {
          script.src = url + "?callback=" + callback;
        }
        script.id = callback;
        document.head.appendChild(script);
      }
    }
  }
};

$.ajax({
  url: "https://developer.duyiedu.com/edu/testJsonp",
  type: "get",
  dataType: "jsonp",
  success: function(data) {
    console.log(data);
  }
});
```
