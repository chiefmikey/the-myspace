import path from 'node:path';

import Router from 'express-promise-router';
// const db = require('../db/index');
// const helper = require('./helper');

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const router = new Router();

router.route('/').get(async (request, res) => {
  try {
    // const {} = req.params;
    // console.log(req);
    // const result = await;
    res
      .status(200)
      .sendFile(path.join(__dirname, '../../client/public/index.html'));
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

export default router;
