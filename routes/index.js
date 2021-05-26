const main = require('./main');
const blog = require('./blog');
const currentUser = require('./currentUser');
const userIcon = require('./userIcon');

module.exports = (app) => {
  app.use('/:urlAddress', main);
  app.use('/:urlAddress/blog', blog);
  app.use('/user/current', currentUser);
  app.use('/user/icon', userIcon);
};
