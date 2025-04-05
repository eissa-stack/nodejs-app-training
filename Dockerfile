FROM node:18-alpine

WORKDIR /APP

COPY package-json.json ./APP

RUN npm install express

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node" , "nodejs-app.js"]
