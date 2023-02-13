import dotenv from 'dotenv';
import express, { Application } from 'express';
import helmet from 'helmet';

import routes from '@/routes';

dotenv.config();

const app: Application = express();

const SERVER_PORT = process.env.SERVER_PORT || 5183;

app.use(express.json());
app.use('/', routes);
app.use(helmet());

app.listen(SERVER_PORT, () =>
  console.log(`The server has been started on ${SERVER_PORT} port`)
);
