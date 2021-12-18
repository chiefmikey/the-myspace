import main from './pages/main.js';
import notFound from './pages/notFound.js';
import user from './data/user.js';

const router = (app) => {
  app.use('/404', notFound);
  app.use('/user', user);
  app.use('/:urlAddress', main);
};

export default router;
