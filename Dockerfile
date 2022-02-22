FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN yarn


COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]
