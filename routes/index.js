const main = require('./pages/main');
const notFound = require('./pages/notFound');
const user = require('./data/user');

module.exports = (app) => {
  app.use('/404', notFound);
  app.use('/user', user);
  app.use('/:urlAddress', main);
};
