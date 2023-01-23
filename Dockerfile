
FROM node:18.12-alpine3.16

WORKDIR /home/node/app

RUN apk add

RUN npm install -g @nestjs/cli

USER node

COPY . /home/node/app

RUN chmod +x .docker/entrypoint.sh