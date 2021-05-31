const Router = require('express-promise-router');
const path = require('path');
// const db = require('../db/index.js');
// const helper = require('./helper.js');

const router = new Router();

module.exports = router;

router.route('/')
  .get(async (req, res) => {
    try {
      // const {} = req.query;
      // const result = await;
      res.status(200).sendFile(path.join(__dirname, '../../client/public/blog.html'));
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });

router.route('/:postId')
  .get(async (req, res) => {
    try {
      // const {} = req.query;
      // const result = await;
      res.status(200).sendFile(path.join(__dirname, '../../client/public/blog.html'));
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });
