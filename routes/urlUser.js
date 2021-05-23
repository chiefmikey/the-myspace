const Router = require('express-promise-router');
const { getUrlUser } = require('../db/queries/getUrlUser');
// const helper = require('./helper.js');

const router = new Router();

module.exports = router;

router.route('/')
  .get(async (req, res) => {
    try {
      const { urlAddress } = req.query;
      const result = await getUrlUser(urlAddress);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });
