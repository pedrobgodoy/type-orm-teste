db-test-up:
	docker-compose -f docker-compose-db-test.yml up -d

db-test-down:
	docker-compose -f docker-compose-db-test.yml down

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

.PHONY: db-test-up
.PHONY: db-test-down
.PHONY: up
.PHONY: down
.PHONY: logs


