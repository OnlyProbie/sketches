---
layout: post
title: Color Post
tags: [Test, Color]
color: brown
author: sylhare
excerpt_separator: <!--more-->
---


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [What a colorful post!](#what-a-colorful-post)
  - [How does it work?](#how-does-it-work)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# What a colorful post!

This is an idea that came from [xukimseven/HardCandy-Jekyll](https://github.com/xukimseven/HardCandy-Jekyll)
looking at this cheerful and colorful theme, I wanted to enable something similar for Type-on-Strap.

You can go fork and star _HardCandy-Jekyll_ too! 😉

<!--more-->

## How does it work?

Basically you need to add just one thing, the color:

```yml
---
layout: post
title: Color Post
color: brown
---
```

It can either be a html color like `brown` (which look like red to me). Or with the rgb:

```yml
---
layout: post
title: Color Post
color: rgb(165,42,42)
---
```

The background used is `lineart.png` from [xukimseven](https://github.com/xukimseven) you can edit it in the config file.
If you want another one, put it in `/assets/img` as well.

> ⚠️ It's a bit hacking the css in the `post.html`
