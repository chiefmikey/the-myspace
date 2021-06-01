const main = require('./pages/main');
const user = require('./content/user');
const notFound = require('./content/notFound');

module.exports = (app) => {
  app.use('/404', notFound);
  app.use('/user', user);
  app.use('/:urlAddress', main);
};
