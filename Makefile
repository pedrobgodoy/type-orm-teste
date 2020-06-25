include .env

db-test:
	docker-compose -f docker-compose-db-test.yml up -d

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

.PHONY: db-test
.PHONY: up
.PHONY: down
.PHONY: logs


