# Containerized Web App

A small vanilla JavaScript task-tracker app, containerized with Docker and
served using nginx.

## Project structure
```
containerized-web-app/
├── app/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── Dockerfile
├── .dockerignore
└── README.md
```

## Run locally without Docker
Just open `app/index.html` in a browser, or serve it with any static file
server, e.g.:
```bash
cd app
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Build and run with Docker

Build the image:
```bash
docker build -t task-tracker .
```

Run the container, mapping container port 80 to local port 8080:
```bash
docker run -p 8080:80 task-tracker
```

Visit the app at: http://localhost:8080

Stop the container:
```bash
docker ps            # find the container ID
docker stop <id>
```

## How it works
- The `Dockerfile` uses the lightweight `nginx:alpine` base image.
- It clears nginx's default web root and copies in the app's static files
  (`index.html`, `style.css`, `app.js`).
- nginx serves the files on port 80 inside the container, which is mapped
  to a port on the host machine via `-p`.

## What this demonstrates
- Writing a basic Dockerfile to containerize an existing app
- Choosing an appropriate lightweight base image for static content
- Mapping container ports to host ports for local access
- Project organization and `.dockerignore` usage for clean image builds
