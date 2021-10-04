#!/bin/env bash

# 构建
npm run build:docs


git checkout gh-pages

rm -rf *.html
rm -rf asseets/
rm -rf component/
rm -rf guide/

mv ./docs/.vuepress/dist/* ./

git add . && git commit -m 'feat: deploy' && git push origin gh-pages -f
