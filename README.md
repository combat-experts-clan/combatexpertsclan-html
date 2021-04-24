# Combat Experts Clan front-end

## Environment requirements

* docker

## Installation with Docker

1.  Clone the project.
2.  Copy `.env.template` to `.env.local` and configure application settings as required.
3.  Build docker image using `docker build -t combat-experts-frontend .`
4.  Run docker container using `docker run -d -t -p 8080:8080 --name frontend combat-experts-frontend`

Quickly serve the project:

1.  Access the container using `docker exec -it frontend sh`
2.  Serve the project by using `npm run serve`
4.  Access the project at `localhost:8080`

Compile the project to static assets:

1.  Access the container using `docker exec -it frontend sh`
2.  Compile the project by using `npm run build`
3.  Assets can be found at `/dist`
