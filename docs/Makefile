
.PHONY: 

VERSION := $(shell node -p "require('../package.json').version")

build: Dockerfile
	@echo $(VERSION) > version.txt
	@docker build -t manifold-sdk-doc:$(VERSION) .
	@docker tag manifold-sdk-doc:$(VERSION) manifold-sdk-doc

release: build
	@docker tag manifold-sdk-doc:$(VERSION) $(REGISTRY_URL)manifold-sdk-doc:$(VERSION)
	@docker push $(REGISTRY_URL)manifold-sdk-doc:$(VERSION)

all: clean build
	@docker-compose up -d

clean:
	@docker-compose down
