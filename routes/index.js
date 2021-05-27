const main = require('./pages/main');
const blog = require('./pages/blog');
const notFound = require('./pages/notFound');
const currentUser = require('./users/currentUser');
const userIcon = require('./users/userIcon');

module.exports = (app) => {
  app.use('/:urlAddress', main);
  app.use('/:urlAddress/blog', blog);
  app.use('/user/current', currentUser);
  app.use('/user/icon', userIcon);
  app.use('/404', notFound);
};
