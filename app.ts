import cors from 'cors';
import express from 'express';

import mountRoutes from './routes/index.js';
// import db from './db';

// const port = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, PUT',
    allowedHeaders: '*',
    exposedHeaders: '*',
  }),
);
app.use(express.json());
app.use(express.static('./client/public'));
mountRoutes(app);

app.listen(3000, () => {
  console.log(`Express server is live at http://localhost:3000`);
});

export default app;
