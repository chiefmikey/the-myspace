const Router = require('express-promise-router');
const { getCurrentUser } = require('../../db/queries/getCurrentUser');
const { getUserIcon } = require('../../db/queries/getUserIcon');
const { getContentPost } = require('../../db/queries/getContentPost');

const router = new Router();

module.exports = router;

router.route('/current').get(async (req, res) => {
  try {
    const { urlAddress } = req.query;
    const result = await getCurrentUser(urlAddress);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

router.route('/icon').get(async (req, res) => {
  try {
    const { iconUserId } = req.query;
    const result = await getUserIcon(iconUserId);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

router.route('/contentPost').get(async (req, res) => {
  try {
    const { urlAddress, postTitle } = req.query;
    const result = await getContentPost(urlAddress, postTitle);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});
