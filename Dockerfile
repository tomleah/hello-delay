FROM node:12

WORKDIR /server

COPY package* /server/
COPY server.js /server/

RUN npm install --production

ENTRYPOINT ["npm", "start"]
