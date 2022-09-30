FROM node:16.17.0-alpine as builder
WORKDIR /app/example-app/
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY dist/entronica-academy /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf