import { Request, Response, Router } from 'express';

export const usersRoute = Router();

usersRoute.route('/api/users').get((req: Request, res: Response) => {
  res.status(200).json({
    firstname: 'John',
    lastname: 'Doe',
  });
});
