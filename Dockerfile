# base image
FROM node:12.4-alpine

#not sure
RUN mkdir -p /src/app

# set working directory
WORKDIR /app
#copy the package.json into the created app folder
COPY package.json /app
#not sure
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies

RUN npm install
COPY . /app
RUN npm run build

#specify what commands to run when running the container
CMD [ "npm", "start" ]
# start app
# CMD ["npm", "start"]