FROM node:15-alpine3.13

WORKDIR /workspace
COPY . /workspace
RUN npm install