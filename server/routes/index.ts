import { Router } from 'express';
import { usersRoute } from './users';

const routes = Router();
routes.use(usersRoute);

export default routes;
