# Dockerized Node.js Service with GitHub Actions CI/CD

A production-oriented DevOps project demonstrating how to containerize a Node.js application, deploy it on AWS EC2 using Docker Compose, and automate deployments through GitHub Actions.

The project follows modern DevOps practices such as Infrastructure on AWS, containerization, Continuous Deployment (CD), secure secret management, and application health monitoring.

# Project Overview

This project demonstrates an automated deployment pipeline where every push to the **main** branch triggers GitHub Actions to:

- Connect securely to an AWS EC2 instance using SSH
- Pull the latest source code
- Stop existing Docker containers
- Build updated Docker images
- Start the latest application automatically
- Keep the application available through Docker Compose

The application also exposes a health endpoint for monitoring and container health checks.

# Features

- Dockerized Node.js application
- MongoDB database container
- Docker Compose orchestration
- Automatic deployment through GitHub Actions
- Secure deployment using SSH authentication
- Environment variable configuration
- Docker Health Check
- REST API Health Endpoint
- Cloud deployment on AWS EC2

# 🏗️ Project Architecture

![Project Architecture](assets/Project%20architecture.png)

# 📂 Project Structure

project-04-dockerized-node-service/

├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── routes/
│   ├── middleware/
│   └── app.js
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── .env

# Technology Stack

| Category           | Technology     |
| ------------------ | -------------- |
| Language           | Node.js        |
| Framework          | Express.js     |
| Database           | MongoDB        |
| Containerization   | Docker         |
| Multi-container    | Docker Compose |
| Cloud              | AWS EC2        |
| CI/CD              | GitHub Actions |
| Version Control    | Git & GitHub   |
| Authentication     | SSH Keys       |
| Secrets Management | GitHub Secrets |

# CI/CD Workflow

The deployment pipeline works as follows:

Developer pushes code to GitHub.
GitHub Actions is triggered automatically.
Workflow authenticates using GitHub Secrets.
GitHub Actions connects to AWS EC2 through SSH.
Latest source code is pulled.
Existing Docker containers are stopped.
New Docker images are built.
Updated containers are started.
Application becomes available without manual deployment.

# Local setup

Clone the repository
git clone https://github.com/rishichourasia661-bit/project-04-dockerized-node-service.git

Move into project
cd project-04-dockerized-node-service

Run the application
docker compose up --build

Application
http://localhost:3000

Health Check
http://localhost:3000/health

# AWS Deployment

The application is deployed on:
AWS EC2
Ubuntu Server
Docker Engine
Docker Compose
Deployment is fully automated through GitHub Actions.

# Health check
GET /health

Example Response
{
  "status": "UP",
  "service": "project-04-dockerized-node-service",
  "version": "1.0.0",
  "timestamp": "2026-07-26T12:00:00Z"
}
Docker periodically checks this endpoint to determine whether the application is healthy.

# Screenshots





# 🔒 Security

Sensitive information is **not stored** in the repository.

The project uses GitHub Secrets for securely managing:

- EC2 Host
- EC2 Username
- EC2 SSH Private Key
- SSH Port
Environment variables are managed separately through the `.env` file.

# 📚 Key Learning Outcomes

Through this project I gained hands-on experience with:

- Docker
- Docker Compose
- Git
- GitHub
- GitHub Actions
- Continuous Deployment (CD)
- AWS EC2
- Linux Administration
- SSH Authentication
- MongoDB
- Environment Variables
- Docker Networking
- Docker Health Checks

---
# Future Improvements

Multi-stage Docker Build
Non-root Docker User
Kubernetes Deployment
Nginx Reverse Proxy
Prometheus Monitoring
Grafana Dashboard
Terraform Infrastructure
ArgoCD GitOps Deployment

# 👨‍💻 Author

**Rishi Chourasia**

GitHub: https://github.com/rishichourasia661-bit

---



