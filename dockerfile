FROM node:16

WORKDIR /usr/node/restify

COPY package.json /usr/node/restify

RUN npm install

COPY . /usr/node/restify
EXPOSE 3000

CMD ["npm", "start", "server.js"]