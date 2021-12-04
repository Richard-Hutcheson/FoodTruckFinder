FROM node:12

WORKDIR /ftf-frontend

COPY . .

RUN npm install

RUN npm run build

#WORKDIR /ftf-frontend/node_modules/.bin

#RUN yarn add env-cmd

#WORKDIR /ftf-frontend

EXPOSE 3000

RUN chmod +x ./frontend-entrypoint.sh

ENTRYPOINT ./frontend-entrypoint.sh