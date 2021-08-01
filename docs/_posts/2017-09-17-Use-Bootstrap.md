---
layout: post
title: "Bootstrap"
bootstrap: true
tags: [Test]
---


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

    - [
            Project One
          ](#project-one)
    - [
            Project Two
          ](#project-two)
    - [
            Project Three
          ](#project-three)
    - [
            Project Four
          ](#project-four)
    - [
            Project Five
          ](#project-five)
    - [
            Project Six
          ](#project-six)
- [Use bootstrap](#use-bootstrap)
  - [Snippet example](#snippet-example)
  - [Mix it with Markdown](#mix-it-with-markdown)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



This theme is compatible with Bootstrap if you choose to use it in your pages or posts.
Here is a little demo with a code snippet, look at the source to see how the HTML and markdown get tangled.

## Use bootstrap

Add some custom Bootstrap in the custom layout!

<img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="startbootstrap" width="500">

### Snippet example

If you are new to Bootstrap you can  always check the [documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/).<br>
Here is an example from [startbootstrap.com](https://startbootstrap.com/snippets/portfolio-two-column).

<!-- Page Content -->
<div class="container">

  <div class="row">
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project One</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Two</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Three</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Four</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Five</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Six</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- /.row -->

</div>
<!-- /.container -->

### Mix it with Markdown

All the above was custom HTML with Bootstrap.
You can also mix it up with some markdown.

You can use the bootstrap's build in javascript API to control your event.
Here is a code snippet for the [documentation](https://getbootstrap.com/docs/4.0/getting-started/javascript/):

```js
$('#myModal').on('show.bs.modal', function (e) {
    if (!data) return e.preventDefault() // stops modal from being shown
})
```

That's just for demo though, you would need to properly integrate your javascript in your page.
Usually you would put any custom javascript script in the _assets_ folder under js and reference it in your page from there.

So try it out using the `bootstrap: true` flag! 😉
