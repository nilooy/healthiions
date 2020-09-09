echo 'Installing all the dependencies... Might take a while'

npm i concurrently -g
npm i nodemon -g

cd server
npm install 
rm -r .env


echo "PORT=8000
DATABASE_URL=mongodb://localhost/healthiions
API_INIT_PATH=/api
JWT_SECRET=healthiionssecretcode2020" >> .env

echo '.env have been made in ./server'

cd ../client/web
npm install
rm -r .env

echo "API_URL=http://localhost:8000/api" >> .env

echo -e "\e[1;31;42m mWelcome to Healthiions \e[0m"

cd ../../
npm run dev



