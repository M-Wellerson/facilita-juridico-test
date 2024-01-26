DB_NAME=postgres

.PHONY: install
install:
	docker compose up -d; \
    docker compose exec front-end npm install; \
    docker compose exec back-end npm install; \
	docker compose exec db psql -U postgres -d $(DB_NAME) -a -f /var/lib/postgresql/data/initial.sql; \

.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down

.PHONY: recreate
recreate:
	docker compose up -d --build --force-recreate

.PHONY: logs
logs:
	docker compose logs -f

.PHONY: front-install
front-install:
	docker compose exec front-end npm install

.PHONY: back-install
back-install:
	docker compose exec back-end npm install

.PHONY: back-run-watch
back-run-watch:
	docker compose exec back-end npm run watch
