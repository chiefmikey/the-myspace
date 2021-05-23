const Router = require('express-promise-router');
const { getUserIcon } = require('../db/queries/getUserIcon');
// const helper = require('./helper.js');

const router = new Router();

module.exports = router;

router.route('/')
  .get(async (req, res) => {
    try {
      const { iconUserId } = req.query;
      const result = await getUserIcon(iconUserId);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });
