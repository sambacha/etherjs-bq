#!/bin/bash
yarn install 
cd node_modules/ethers
cp dist/ethers-all.esm.min.js dist/ethers.js
cd -
yarn run build
