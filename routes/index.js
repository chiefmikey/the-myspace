const blog = require('./blog');

module.exports = (app) => {
  app.use('/blog', blog);
};
