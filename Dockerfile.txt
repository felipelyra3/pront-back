FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# passo 6 - definir os envs
ENV PORT=4000

# passo 7 - export a port da aplicação
EXPOSE 4000
CMD [ "node", "src/server.js" ]

# docker build -t pront-back-image -f Dockerfile .
# docker run -d -p 4000:4000 --rm --name pront-back-container pront-back-image
# npx nodemon src/server.js