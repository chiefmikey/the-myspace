const main = require('./main');
const blog = require('./blog');
const currentUser = require('./currentUser');
const selectedUser = require('./selectedUser');
const urlUser = require('./urlUser');
const userIcon = require('./userIcon');

module.exports = (app) => {
  app.use('/:urlAddress', main);
  app.use('/:urlAddress/blog', blog);
  app.use('/user/current', currentUser);
  app.use('/user/selected', selectedUser);
  app.use('/user/url', urlUser);
  // app.use('/:profileName', userProfile);
  app.use('/user/icon', userIcon);
};
