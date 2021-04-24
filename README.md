# Combat Experts Clan front-end

## Environment requirements

* npm, docker (optional)

## Installation with Docker

1. As needed, download node docker image using `docker pull node`
2. Create docker instance from node using `docker run -d -t -p 8080:8080 --name website node`
3. Open a shell to the docker instance with `docker exec -it website bash`
4. Create a new directory and clone this repository.
5. Install project dependencies with `npm install` or `npm install --production` for production.
6. Run `cp .env.template .env.local` and configure the new file as needed.
7. Serve the application locally for development with `npm run serve`, or compile the assets using `npm run build`
