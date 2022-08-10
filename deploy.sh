#!/usr/bin/env sh

# abort on errors
set -e

# build
# npm run build

# navigate into the build output directory
cd public

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://ufollettu.github.io
git push -f git@github.com:ufollettu/ufollettu.github.io.git main

# if you are deploying to https://ufollettu.github.io/destitatest
# git push -f git@github.com:ufollettu/desitatest.git main:gh-pages

cd -
