#!/bin/sh

npm install 
npm run build
npx typeorm migration:run -d dist/databse.providers.js
npm run start:dev