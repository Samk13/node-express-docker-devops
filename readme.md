# How to start Docker container

## for development:

```zsh
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

## for production:

```zsh
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## take down the container:

```zsh
    docker-compose down -v
```

## info:

```zsh
 docker run -d -p 4000:4000 -v ${pwd}:/app -v /app/node_modules --name node-app node-app-image
```

docker explainations

-d : detach docker run from the terminal
-p : port -p 4000:4000 left side is the outside exposed container port and the right side is the inner container exposed port
-v : is a volume container path the left side is the host path and the right side is the container path
--name : is the name of the container
node-app-image : is the image name
${pwd} : is the current directory

## delete the container volume

```zsh
docker rm -fv node-app
```

-fv : force the removal of the container and the volume

## force rebuild the container with docker-compose

```zsh
    docker-compose up -d --build
```

--build : force the rebuild of the container
-d : detach docker run from the terminal
