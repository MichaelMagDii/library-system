# Dockerfile
# Node Version
FROM node:18.17.0

# Expose the port
EXPOSE 3055

# Source
WORKDIR /src

RUN npm install -g npm@latest

# Copy package and package-lock (No NodelModule)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Command to run your application
CMD ["node", "app/index.js"]