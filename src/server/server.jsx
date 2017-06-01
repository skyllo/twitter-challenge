/* eslint-disable import/no-extraneous-dependencies */
import Autolinker from 'autolinker';
import cheerio from 'cheerio';
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

import serverMiddleware from './middleware/ServerMiddleware';
import webpackConfig from '../../config/webpack.dev.babel';

const app = express();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

if (IS_PRODUCTION) {
  // add static public directory
  app.use('/public', express.static(path.join(__dirname, '../../dist')));
} else {
  // webpack-dev-middleware hosts /public folder
  webpackConfig(app);
}

// add API for tweet
app.get('/api/tweets/:twitterName', (request, response) => {
  const url = `https://twitter.com/${request.params.twitterName}`;
  fetch(url)
    .then(res => res.text())
    .then((body) => {
      // parse twitter html
      const $ = cheerio.load(body);
      // get array of tweets
      const tweets = $('.tweet-text').toArray().map((item) => {
        // convert tweet to text
        const itemText = $(item).text();
        // add links for href in text and return
        return Autolinker.link(itemText);
      });
      // only send back 10 tweets
      response.send(tweets.slice(0, 10));
    })
    .catch((e) => {
      console.error(`Error occurred whilst getting tweets from ${url}.\n`, e.message);
      response.send([]);
    });
});

// add SSR Middleware
app.use(serverMiddleware);

const PORT = process.env.PORT || 30000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.info('Server listening on:', PORT);
});
