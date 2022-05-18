import {Request, Response} from 'express';
import {
    createKnownErrorLog,
    createKnownErrorResponse,
} from './knownError.utility';
import {log} from './logger.utility';
import {
    createUnknownErrorLog,
    createUnknownErrorResponse,
} from './unknownError.utility';

export const controllerErrorHandler = ({
    error,
    req,
    res,
    status,
}: {
    error: any;
    req: Request<
        Record<string, unknown>,
        Record<string, unknown>,
        Record<string, unknown>
    >;
    res: Response;
    status: number;
}) => {
    if (error.name === 'KnownError') {
        log.error(
            createKnownErrorLog({
                message: error.message,
                originalUrl: req.originalUrl,
            })
        );
        return res.status(status).json(
            createKnownErrorResponse({
                message: error.message,
                originalUrl: req.originalUrl,
            })
        );
    }
    log.error(
        createUnknownErrorLog({
            message: error.message,
            originalUrl: req.originalUrl,
        })
    );
    return res.status(status).json(
        createUnknownErrorResponse({
            message: error.message,
            originalUrl: req.originalUrl,
        })
    );
};
