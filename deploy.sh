cd /~
mkdir CIRCLE-CI-OAUTH-SERVER || echo Directory Exists, Continuing...


cd CIRCLE-CI-OAUTH-SERVER
git clone https://github.com/cityofaustin/multimodal-login || echo Already Cloned, Continuing...

cd multimodal-login
git pull

npm install
npm run build

forever stop 0
forever start -c "node ./dist/app.js" ./

echo ~~FINISHED~~