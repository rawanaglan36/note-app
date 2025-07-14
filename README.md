# 📝 Fullstack Notes App in Docker

This is a simple fullstack notes-taking API built using **Node.js** and **MongoDB**, containerized with **Docker** and orchestrated using **Docker Compose**, with **Nginx** as a reverse proxy.

---

## 🔧 Features

- 🛠️ RESTful API with Node.js and Express
- 🗃️ MongoDB as database (with volume persistence)
- 📦 Dockerized with multi-stage builds
- ⚙️ Supports both development & production environments
- 🔁 Hot reload with Nodemon during development
- 🌐 Reverse proxy using Nginx
- 🔒 Environment variables support via `.env`
- 📤 Published on Docker Hub
- 📁 Project versioned and hosted on GitHub

---

## 📁 Project Structure

project-root/
│
├── backend/ # Node.js backend API
│ ├── Dockerfile # Multi-stage build
│ ├── server.js # Express API
│ └── .env # Environment variables
│
├── nginx/ # Nginx config
│ └── default.conf
│
├── docker-compose.yml # Dev & Prod configuration
├── .dockerignore
└── README.md

🐳 Docker Hub
The backend image is published at:
👉 DockerHub - rawan36/note_app

💼 Author & Contact
Rawan Aglan
Junior DevOps Engineer
🔗 LinkedIn Profile ->  linkedin.com/in/rawan-aglan-7a23521b0




