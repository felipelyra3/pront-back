FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . .

# passo 6 - definir os envs
ENV PORT=4001

# Specify the command to run when the container starts
EXPOSE 4001
CMD [ "npm", "start" ]

# docker build -t pront-back-image -f Dockerfile .
# docker run -d -p 4001:4001 --rm --name pront-back-container pront-back-image
# npx nodemon src/server.js