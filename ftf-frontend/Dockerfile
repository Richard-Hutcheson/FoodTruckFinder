FROM node:12

WORKDIR /ftf-frontend

COPY . .

RUN yarn install

RUN yarn run build

#WORKDIR /ftf-frontend/node_modules/.bin

#RUN yarn add env-cmd

#WORKDIR /ftf-frontend

RUN chmod +x ./frontend-entrypoint.sh

ENTRYPOINT ./frontend-entrypoint.sh