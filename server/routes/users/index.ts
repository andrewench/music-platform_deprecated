import { Router, Request, Response } from 'express';

export const usersRoute = Router();

usersRoute.get('/api/users', (req: Request, res: Response) => {
  res.status(200).json({
    firstname: 'John',
    lastname: 'Doe',
  });
});
