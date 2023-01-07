@echo off

cd out

git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:chenchiaho/react-personal-portfolio.git main:gh-pages

cd ..