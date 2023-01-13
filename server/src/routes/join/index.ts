import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { RoutesType, UserModelInstanceType } from '@/types';

import { CryptoService, DatabaseService } from '@/services';

export const joinRoute = Router();

joinRoute
  .route<RoutesType>('/api/join')
  .put(
    async (
      { body }: Request<never, never, UserModelInstanceType>,
      res: Response
    ) => {
      const { login, email, password } = body;

      const user = await DatabaseService.user.findFirst({
        where: {
          login,
          email,
        },
      });

      if (user) {
        return res.status(StatusCodes.CONFLICT).json({
          error: 'User already exists',
        });
      }

      const hash = await CryptoService.encryptPassword(password);

      if (typeof hash === 'string') {
        const tokens = {
          AT: jwt.sign({ login }, process.env.AT_SECRET_KEY as string, {
            expiresIn: '300s',
          }),
          RT: jwt.sign({ login }, process.env.RT_SECRET_KEY as string, {
            expiresIn: `${60 * 60 * 24 * 7}s`,
          }),
        };

        const user = await DatabaseService.user.create({
          data: {
            ...body,
            password: hash,
          },
        });

        res.status(StatusCodes.OK).json(tokens);
      }
    }
  );
