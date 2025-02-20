# Projet AdonisJS / Inertia / VueJS

## Docker en développement

```sh
# lancer les conteneurs docker
docker compose -f docker-compose-dev.yml up
# si je veux rentrer dans le shell du backend
docker compose -f docker-compose-dev.yml exec backend sh
# migration de la base
docker compose -f docker-compose-dev.yml exec backend node ace migration:run
# seed de la database
docker compose -f docker-compose-dev.yml exec backend node ace db:seed
```

## Docker en prod

```sh
# lancer les conteneurs docker
docker compose -f docker-compose-prod.yml up
# si je veux rentrer dans le shell du backend
docker compose -f docker-compose-prod.yml exec backend sh
```
