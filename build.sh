#!/bin/sh

rm -rf includes
rm -rf templates
rm -rf data
rm -rf dist
wget https://github.com/maverickengine/headline-engine/archive/refs/heads/main.zip
unzip main.zip
rm main.zip
rm headline-engine-main/README.md
mv headline-engine-main/* .
rm -rf headline-engine-main
npm install
npm run build
rm -rf src
rm -rf node_modules