# Lightweight static file server for a vanilla JS app
FROM nginx:alpine

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy our static app files into nginx's web root
COPY app/ /usr/share/nginx/html/

# Nginx listens on port 80 by default
EXPOSE 80

# nginx:alpine already runs nginx in the foreground by default,
# but we declare it explicitly for clarity.
CMD ["nginx", "-g", "daemon off;"]
