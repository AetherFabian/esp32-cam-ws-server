FROM node:18-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY src/ ./src
COPY index.js index.js
COPY entrypoint.sh entrypoint.sh

RUN chmod a+x entrypoint.sh
CMD ./entrypoint.sh
