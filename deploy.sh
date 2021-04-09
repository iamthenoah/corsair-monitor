!/usr/bin/env sh

set -e

cd dist

git init
git remote add origin https://git.heroku.com/corsair-monitor.git
git add -A
git commit -m 'deploy'
git push heroku HEAD:master -f