FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY ./tsconfig*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . .

# passo 6 - definir os envs
ENV PORT=4001
# ENV MONGO_URI=mongodb://mongo:mongo123@localhost:28017/admin

RUN npm i -g bcrypt
RUN npm link bcrypt
RUN apt-get update && apt-get install -y wget

EXPOSE 4001

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# RUN node src/database/seed.js

# Specify the command to run when the container starts

# CMD [ "npm", "start" ]

# docker build -t pront-back-image -f Dockerfile .
# docker run -d -p 4001:4001 --rm --name pront-back-container pront-back-image
# npx nodemon src/server.js