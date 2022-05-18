import {Router} from 'express';
import {
    createOneTestHandler,
    deleteOneTestByIdHandler,
    findAllTestsHandler,
    findOneTestByIdHandler,
    updateOneTestByIdHandler,
} from '../controllers/test.controller';
import {validate} from '../middlewares/validateResource.middleware';
import {
    createOneTestSchema,
    deleteOneTestByIdSchema,
    findOneTestByIdSchema,
    updateOneTestByIdSchema,
} from '../schemas/test.schema';

export const testRouter = Router();

testRouter.post('/', validate(createOneTestSchema), createOneTestHandler);
testRouter.get('/', findAllTestsHandler);
testRouter.get(
    '/:testId',
    validate(findOneTestByIdSchema),
    findOneTestByIdHandler
);
testRouter.put(
    '/:testId',
    validate(updateOneTestByIdSchema),
    updateOneTestByIdHandler
);
testRouter.delete(
    '/:testId',
    validate(deleteOneTestByIdSchema),
    deleteOneTestByIdHandler
);
