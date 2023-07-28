install:
	npm ci

link:
	npm link

gendiff:
	node bin/gendiff.js

gendiff -h:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .
