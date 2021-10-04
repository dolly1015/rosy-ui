#!/bin/env bash

# 构建
npm run build:docs

# 进入生成的构建文件夹
mv ./docs/.vuepress/dist ./

git checkout gh-pages

