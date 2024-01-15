FROM node:lts-alpine AS build

WORKDIR /knowly
COPY . .
 
RUN npm install
RUN npm run build

FROM nginx:alpine

COPY ./nginx/default.conf etc/nginx/conf.d 
COPY --from=build /knowly/dist/ /usr/share/nginx/html 

EXPOSE 80