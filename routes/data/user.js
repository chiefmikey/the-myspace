import Router from 'express-promise-router';
import getCurrentUser from '../../db/queries/getCurrentUser.js';
import getUserIcon from '../../db/queries/getUserIcon.js';
import getContentPost from '../../db/queries/getContentPost.js';

const router = new Router();

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

export default router;
