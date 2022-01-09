# Build with Node container
FROM node:15-alpine3.13 AS builder

# Set the workspace
WORKDIR /workspace

# Copy assets into the image
COPY build/ .

# Install node modules
RUN npm ci

# Build the application
RUN npm run build

# Deploy with nginx container
FROM nginx:1.21.5-alpine

# Copy assets from the build container
COPY --from=builder /workspace/dist /usr/share/nginx/html
