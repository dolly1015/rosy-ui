#!/bin/env bash

# 构建
npm run build:docs


git checkout gh-pages

rm -rf *.html
rm -rf assets/
rm -rf component/
rm -rf guide/
rm -rf favicon.ico

mv ./docs/.vuepress/dist/* ./