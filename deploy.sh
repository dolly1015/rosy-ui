#!/bin/env bash

# 构建
npm run build:docs


git checkout gh-pages

rm -rf ./gh-pages/

mv ./docs/.vuepress/dist/* ./gh-pages

git add . 
&&
git commit -m 'feat: deploy'
&&
git push origin gh-pages -f
