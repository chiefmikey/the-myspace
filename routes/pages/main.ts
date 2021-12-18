import Router from 'express-promise-router';
import path from 'path';
// const db = require('../db/index.js');
// const helper = require('./helper.js');

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const router = new Router();

router.route('/').get(async (req, res) => {
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

router.route('/:postTitle').get(async (req, res) => {
  try {
    // const {} = req.params;
    // console.log(req.params);
    // const result = await;
    res
      .status(200)
      .sendFile(path.join(__dirname, '../../client/public/content.html'));
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

export default router;
