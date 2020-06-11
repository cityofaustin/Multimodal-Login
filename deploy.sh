cd /~
mkdir CIRCLE-CI-OAUTH-SERVER || echo Directory Exists, Continuing...


cd CIRCLE-CI-OAUTH-SERVER
git clone https://github.com/cityofaustin/multimodal-login || echo Already Cloned, Continuing...

cd multimodal-login
git pull

npm install
npm run build

# need to do a couple extra steps to get dist correct for node
cd dist
cp ../.env ./
cp ../package.json ./
npm install --production

forever stop 0
# NOTE: going to run manually to test it first.
# forever start -c "node app.js" ./

echo ~~FINISHED~~