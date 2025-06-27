FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# List files in the dist directory
RUN ls -l dist

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "run", "start"]