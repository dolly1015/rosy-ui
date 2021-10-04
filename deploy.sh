#!/bin/env bash

# 构建
npm run build:docs


git checkout gh-pages

rm -rf !(docs/)

mv ./docs/.vuepress/dist ./