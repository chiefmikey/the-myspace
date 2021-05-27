const Router = require('express-promise-router');
const { getCurrentUser } = require('../../db/queries/getCurrentUser');
// const helper = require('./helper.js');

const router = new Router();

module.exports = router;

router.route('/')
  .get(async (req, res) => {
    try {
      const { urlAddress } = req.query;
      const result = await getCurrentUser(urlAddress);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });
