const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const quite = process.env.NODE_ENV === 'production';

const app = next({ dev, quite });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);

      await handle(req, res, parsedUrl);
    } catch (error) {
      console.error('Error occurred handling', req.url);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(process.env.PORT, (err) => {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Running',
      `> on ${process.env.BASE_URL} happy hack`
    );
    if (err) throw err;
  });
});
