const Router = require('express-promise-router');
const { getSelectedUser } = require('../db/queries/getSelectedUser');
// const helper = require('./helper.js');

const router = new Router();

module.exports = router;

router.route('/')
  .get(async (req, res) => {
    try {
      const { selectedUserId } = req.query;
      const result = await getSelectedUser(selectedUserId);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });
