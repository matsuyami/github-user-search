set -e

yarn build

cd dist

git init 
git add -A
git commit -m 'New Deployment'
git push -f 'git@github.com:matsuyami/github-user-search.git' master:gh-pages
cd -
