Vue application for the Combat Experts clan website.

## Build and deploy:

1.  Clone the project.
2.  Copy `build/.env.template` to `build/.env.local` and configure application settings as required.
3.  Build docker image using `docker build -t combat-experts-frontend .`
4.  Run docker container using `docker run -d -t -p 8080:8080 --name frontend combat-experts-frontend`
