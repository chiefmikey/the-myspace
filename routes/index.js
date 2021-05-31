const main = require('./pages/main');
const blog = require('./pages/blog');
const user = require('./content/user');
const notFound = require('./content/notFound');

module.exports = (app) => {
  app.use('/:urlAddress', main);
  app.use('/:urlAddress/blog', blog);
  app.use('/user', user);
  app.use('/404', notFound);
};
