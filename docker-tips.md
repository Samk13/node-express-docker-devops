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
