<<<<<<< HEAD
FROM node:20
=======
FROM node:20.18.1
>>>>>>> 7758929347caae3fa0f4fa1efdda310be0785170

# Installing libvips-dev for sharp Compatibility

RUN apt-get update && apt-get install libvips-dev -y

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

COPY ./package.json  ./

ENV PATH /opt/node_modules/.bin:$PATH

RUN yarn config set network-timeout 600000 -g && yarn install

WORKDIR /opt/app

COPY ./ .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]        
