#!/bin/bash

# run production build
npm run build

# go to the dist/yourProjectName folder
cd ./dist/pipes-app/browser

# make a new directory named 'css' (you can name it anything)
mkdir css

# run PurgeCSS & make a new '.css' file inside the 'css' directory
purgecss --css ./*.css --content ./index.html ./*.js --output ./css

# replace the 'dist/yourProjectName/styles.css' file with the 'dist/yourProjectName/css/styles.css' file
mv ./css/*.css ./*.css

# delete the previously created 'css' directory
rm -r css
