# docker-compose (run multiple service in one container)

## build services and run containers 

```bash
docker-compose up -d
```

## stop containers 

```bash
docker-compose down -d
```

## stop containers and remove images and volumes

```bash
docker-compose down -d -rmi all -v
```