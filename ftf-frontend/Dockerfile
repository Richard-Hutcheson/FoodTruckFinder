FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN npm install
RUN npm run build
COPY . .
FROM nginx:1.17.1-alpine as dev
ENV npm dev
EXPOSE 3000
CMD ["npm", "start"]