FROM node:14.18.3

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/. .

EXPOSE 80

CMD npm run start
