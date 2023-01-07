@echo off

cd out

git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git master:gh-pages

cd ..