import Router from 'express-promise-router';

import getContentPost from '../../db/queries/getContentPost';
import getCurrentUser from '../../db/queries/getCurrentUser';
import getUserIcon from '../../db/queries/getUserIcon';

const router = new Router();

router.route('/current').get(async (request, res) => {
  try {
    const { urlAddress } = request.query;
    const result = await getCurrentUser(urlAddress);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

router.route('/icon').get(async (request, res) => {
  try {
    const { iconUserId } = request.query;
    const result = await getUserIcon(iconUserId);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

router.route('/contentPost').get(async (request, res) => {
  try {
    const { urlAddress, postTitle } = request.query;
    const result = await getContentPost(urlAddress, postTitle);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

export default router;
