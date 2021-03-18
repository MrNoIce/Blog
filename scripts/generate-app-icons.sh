#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/favicon-16x16.png resize 16
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/favicon-32x32.png resize 32
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/favicon-96x96.png resize 96
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-512x512.png resize 512
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-384x384.png resize 384
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-256x256.png resize 256
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-192x192.png resize 192
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-144x144.png resize 144
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-96x96.png resize 96
npx sharp -i ./src/images/app-icons/avatar.png -o ./static/icons/avatar-48x48.png resize 48