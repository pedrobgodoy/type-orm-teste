include .env

dev:
	docker-compose up -d
	yarn dev

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

.PHONY: dev
.PHONY: up
.PHONY: down
.PHONY: logs


