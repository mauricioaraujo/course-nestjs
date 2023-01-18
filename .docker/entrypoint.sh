#!/bin/bash

npm install
npm run bild
npx typeorm migration:run
npm run start:dev