# Articles Browser App

## Installation

Clone the repository:

> `git clone ...`

> `cd articles-browser`

Install dependencies with yarn or npm

> `yarn`

> `npm i`

## Available scripts

In the project directory, you can run:

**Running the app**

> `yarn dev`

> `npm run dev`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

**Building app for production**

> `yarn build`

> `npm run build`

Builds the app for production to the dist folder

**Testing**

> `yarn test`

> `npm run test`

**Storybook**

> `yarn storybook`

> `npm run storybook`

Runs the storybook.
Open http://localhost:6006 to view it in your browser.

> `yarn build-storybook`

> `npm run build-storybook`

Builds storybook static content

## Local Server API Documentation

Api server can be found in `server.js` file.

To run the server do:

> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category

## Ways to improve the app

- Handle the configuration that allows adding multiple data sources (not only 'Sports' and 'Fashion') and multiple sorting options
- Implementing Internazionalization
- Implementing dark and light mode
- Implementing infinite query
- Implementing search widget
- Implementing possibility of reading content of the article
