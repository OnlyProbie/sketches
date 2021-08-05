#!/bin/bash

# dir path
path=./docs/_posts
# current time
date=$(date +%F)
# get filename
filename=$date"-"$1
# get new file path
createPath=$path/$filename
# check folder
if [ ! -d $path ]
then
  echo "The folder does not exist, please check!"
else
  if [ ! -f $path ]
  then
    # echo
    echo $filename
    echo "Create file "$createPath
    # create file
    touch $createPath
    # echo content to file
    echo "---
layout: post
title: Hello World                                # Title of the page
hide_title: true                                  # Hide the title when displaying the post, but shown in lists of posts
feature-img: "assets/img/sample.png"              # Add a feature-image to the post
thumbnail: "assets/img/thumbnails/sample-th.png"  # Add a thumbnail image on blog view
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
bootstrap: true                                   # Add bootstrap to the page
tags: [sample, markdown, html]
---

**excerpt**

<!-- START doctoc -->
<!-- END doctoc -->

    " > $createPath

    echo "File created successfully!"
  else
    echo "File already exists!"
  fi
fi
