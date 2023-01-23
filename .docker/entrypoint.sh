#!/bin/sh

npm install --legacy-peer-deps

npm run build

npx typeorm migration:run

npm run start:dev