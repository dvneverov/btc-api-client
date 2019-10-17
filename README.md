## Description

Wrapper API for working with btc-api

## Configuration & Installation

Run this command to create .env file in root directory:

```shell
$ mv .env-example .env
``` 

Then configure connection to BTC server by adding this variables:
- `BTC_HOST` - host (default = localhost), 
- `BTC_PORT` - port, 
- `BTC_USER` - user, 
- `BTC_PASSWORD` - password

Install dependencies by running:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

# debug
$ npm run dev:debug
```

App will start listening on `localhost:3000`.

## Running with docker

You'll need [Docker](https://www.docker.com/) for that. Once you've got it installed on your machine, run this command to build an image:

```bash
$ docker build -t btc_api_client .
```

Then run this to build and start docker container:

```bash
$ docker run -p 3000:3000 btc_api_client
```

## Docs

Interactive API doc is available at http://localhost:3000/api-explorer

## Test

Run the Mocha unit tests

```shell
$ npm test
```

## Lint

View prettier linter output

```
$ npm run lint
```
