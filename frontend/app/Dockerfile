# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@0.9.5 -g --silent

# start app
CMD ["npm", "start"]