const IS_PRODUCTION = process.env.NODE_ENV === 'production';

let jsFiles = ['/public/bundle.js'];
let cssFiles = [];

if (IS_PRODUCTION) {
  // eslint-disable-next-line import/no-unresolved,global-require
  const webpackAssetJSON = require('../../../dist/webpack-assets.json');

  // get a list of JS bundles
  jsFiles = Object.values(webpackAssetJSON).reduce((prev, curr) => {
    if (curr && curr.js) prev.push(curr.js);
    return prev;
  }, []);

  // get a list of CSS bundles
  cssFiles = Object.values(webpackAssetJSON).reduce((prev, curr) => {
    if (curr && curr.css) prev.push(curr.css);
    return prev;
  }, []);
}

const ServerMiddleware = (req, res) => {
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, 
            maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
      <title>Tweet Challenge</title>
      ${cssFiles.map(item => `<link rel="stylesheet" type="text/css" href="${item}">`).join('')}
    </head>
    <body>
      <div id="app"></div>
      ${jsFiles.map(item => `<script src="${item}"></script>`).join('')}
    </body>
    </html>
  `);
  res.end();
};

export default ServerMiddleware;
