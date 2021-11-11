# Feed Search

**This service contains API to search and sort in feed.**

## Setup
- Add .env file, copy .env.example contents to .env
- Get dependencies: `npm install`
- Run locally: `npm start`
- Build docker image: `docker build -t feed_search .`
- Run docker image: `docker run -d -p 3000:3000 feed_search`

## Test
- Add NODE_ENV=test to .env file
- To run all the test cases: `npm test`
