import { Request, Response, Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { TApiRoutes } from '@/types';

export const usersRoute = Router();

usersRoute.route<TApiRoutes>('/api/users').post((req: Request, res: Response) =>
  res.status(StatusCodes.OK).json({
    status: ReasonPhrases.OK,
  })
);
