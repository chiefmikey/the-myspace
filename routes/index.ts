import user from './data/user';
import main from './pages/main';
import notFound from './pages/notFound';

const router = (app) => {
  app.use('/404', notFound);
  app.use('/user', user);
  app.use('/:urlAddress', main);
};

export default router;
