import { Request, Response, Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { RoutesType } from '@/types';

import { DatabaseService } from '@/services';

export const loginRoute = Router();

loginRoute
  .route<RoutesType>('/api/login')
  .post(async ({ body: { login, password } }: Request, res: Response) => {
    if (login && password) {
      const user = await DatabaseService.user.findFirst({
        where: {
          login,
        },
      });

      if (user) {
        res.status(StatusCodes.OK).json(user);
      }

      res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: ReasonPhrases.NOT_FOUND });
    }

    res.status(200).json({
      status: '/api/login',
    });
  });