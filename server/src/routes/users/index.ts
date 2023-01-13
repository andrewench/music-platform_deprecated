import { Request, Response, Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { RoutesType } from '@/types';

export const usersRoute = Router();

usersRoute.route<RoutesType>('/api/users').post((req: Request, res: Response) =>
  res.status(StatusCodes.OK).json({
    status: ReasonPhrases.OK,
  })
);
