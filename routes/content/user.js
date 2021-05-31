const Router = require('express-promise-router');
const { getCurrentUser } = require('../../db/queries/getCurrentUser');
const { getUserIcon } = require('../../db/queries/getUserIcon');
const { getBlogPost } = require('../../db/queries/getBlogPost');

const router = new Router();

module.exports = router;

router.route('/current')
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

router.route('/icon')
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

router.route('/blogPost')
  .get(async (req, res) => {
    try {
      const { urlAddress, postId } = req.query;
      const result = await getBlogPost(urlAddress, postId);
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });
