# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose port (change if needed)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
