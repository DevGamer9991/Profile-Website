FROM node:16.14.0

WORKDIR /app

COPY package*.json /app/

RUN npm install -g npm@8.5.2

RUN npm install

RUN mkdir ./Site/

COPY build/. /app/Site/.

EXPOSE 80

CMD [ "npx", "serve", "-s", "Site", "-p", "80" ]
