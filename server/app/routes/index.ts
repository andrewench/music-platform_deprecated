import { joinRoute } from './join';
import { loginRoute } from './login';
import { usersRoute } from './users';
import { Router } from 'express';

const routes = Router();
routes.use(usersRoute);
routes.use(loginRoute);
routes.use(joinRoute);

export default routes;
