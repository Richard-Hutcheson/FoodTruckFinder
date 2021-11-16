# Defines a base image as build and sets the
# working directory to /build
# Copies the files from the previous directory
# (the overarching project folder)
#FROM node:12 AS build
#WORKDIR /build

# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

#add '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Add app
COPY . ./

# Defines a base image, sets the path for COPY
# COPY is executed and copies the files from
#/build to the current directory
# The trailing '.' is necessary for commands
#FROM node:12
#WORKDIR /app
#COPY --from=build /build .

# Central executing directive for Dockerfiles
#RUN chmod +x ./frontend-entrypoint

# Running the app
#ENTRYPOINT ./frontend-entrypoint

# Start app
CMD ["npm", "start"]


# Probably irrelevant
#CMD tail -f /dev/null