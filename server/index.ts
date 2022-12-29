import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import routes from '@routes';

dotenv.config();

const app: Application = express();

const SERVER_PORT = process.env.SERVER_PORT || 5183;

app.use('/', routes);
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'working',
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`The server has been started on ${SERVER_PORT} port`)
);
