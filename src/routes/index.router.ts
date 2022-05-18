import {Router} from 'express';
import {testRouter} from './test.router';

export const routes = Router();

routes.use('/test', testRouter);
