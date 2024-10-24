# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed dependencies (none for this simple app)
RUN npm install

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the app
CMD ["node", "server.js"]

