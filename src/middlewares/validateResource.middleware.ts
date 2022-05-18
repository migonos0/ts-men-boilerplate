import {Request, Response, NextFunction} from 'express';
import {AnyZodObject} from 'zod';
import {
    createKnownErrorLog,
    createKnownErrorResponse,
} from '../utilities/knownError.utility';
import {log} from '../utilities/logger.utility';

export const validate =
    (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (error: any) {
            log.error(
                createKnownErrorLog({
                    originalUrl: req.originalUrl,
                    message: error.errors,
                })
            );
            return res.status(400).json(
                createKnownErrorResponse({
                    originalUrl: req.originalUrl,
                    message: error.errors,
                })
            );
        }
    };
