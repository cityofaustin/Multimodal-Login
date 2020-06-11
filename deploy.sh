cd /~
mkdir CIRCLE-CI-OAUTH-SERVER || echo Directory Exists, Continuing...


cd CIRCLE-CI-OAUTH-SERVER
git clone https://github.com/cityofaustin/multimodal-login || echo Already Cloned, Continuing...

cd multimodal-login
git pull

npm install
forever start -c "npm start" ./

echo ~~FINISHED~~