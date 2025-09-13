# Use Nginx as the base image
FROM nginx:alpine

# Copy game files to nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]

