const Router = require('express-promise-router');
// const db = require('../db/index.js');
// const helper = require('./helper.js');

const router = new Router();

module.exports = router;

router.route('/')
  .get(async (req, res) => {
    try {
      const {} = req.query;
      const result = await;
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const {} = req.body;
      const result = await;
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });

router.put('/:question_id/helpful', async (req, res) => {
  try {
    const { question_id } = req.params;
    const results = await db.markQuestionHelpful(question_id);
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

router.put('/:question_id/report', async (req, res) => {
  try {
    const { question_id } = req.params;
    const results = await db.reportQuestion(question_id);
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});
