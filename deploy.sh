cd ~/PROD/MYPASS-OAUTH/multimodal-login

git pull

npm install
npm run build

# need to do a couple extra steps to get dist correct for node
cd dist
cp ../.env ./
cp ../package.json ./
npm install --production


cd ~/PROD/MYPASS-OAUTH/multimodal-login

pm2 stop oauth
pm2 start --name oauth npm -- start

echo ~~FINISHED~~