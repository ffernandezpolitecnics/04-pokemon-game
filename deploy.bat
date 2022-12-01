cd dist
git init
git checkout -B master
git add -A
git commit -m 'deploy2'
git remote add origin https://github.com/ffernandezpolitecnics/04-pokemon-game.git
git push -f origin master:gh-pages