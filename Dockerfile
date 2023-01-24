FROM node:18.12-alpine3.16

RUN apk add

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

COPY . /home/node/app

RUN chmod +x .docker/entrypoint.sh