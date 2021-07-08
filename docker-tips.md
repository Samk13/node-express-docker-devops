## Dcoker tips

## log all docker events

```zsh
docker logs <CONTAINER_NAME>
```

## list all network interfaces

```zsh
docker network ls
```

## inspect a container

```zsh
docker inspect <CONTAINER_NAME>
```

## logs of a container

-f: follow log
-t: tail log

```zsh
docker logs node-express-docker-devops_node-app_1 -f
```

## run container without the dependency

flag
--no-deps : run container without the dependency

```zsh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --no-deps <CONTAINER_NAME>
```
