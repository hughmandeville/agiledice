
.PHONY: help
## help: show this help message
help:
	@echo "Usage: make [target]\n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@echo

.PHONY: npm-start
## npm-start: start app
npm-start:
	npm start
