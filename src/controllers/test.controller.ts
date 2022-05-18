import {Request, Response} from 'express';
import {
    CreateOneTestInput,
    DeleteOneTestByIdInput,
    FindOneTestByIdInput,
    UpdateOneTestByIdInput,
} from '../schemas/test.schema';
import {
    createOneTest,
    deleteOneTestById,
    findAllTests,
    findOneTestById,
    updateOneTestById,
} from '../services/test.service';
import {controllerErrorHandler} from '../utilities/controllerErrorHandler.utility';

export const createOneTestHandler = async (
    req: Request<
        Record<string, unknown>,
        Record<string, unknown>,
        CreateOneTestInput['body']
    >,
    res: Response
) => {
    try {
        const createdTest = await createOneTest(req.body);
        return res.status(200).json(createdTest);
    } catch (error) {
        controllerErrorHandler({error: error, req: req, res: res, status: 409});
    }
};

export const findAllTestsHandler = async (req: Request, res: Response) => {
    try {
        const foundTests = await findAllTests();
        return res.status(200).json(foundTests);
    } catch (error) {
        controllerErrorHandler({error: error, req: req, res: res, status: 409});
    }
};

export const findOneTestByIdHandler = async (
    req: Request<FindOneTestByIdInput['params']>,
    res: Response
) => {
    try {
        const foundTest = await findOneTestById(req.params.testId);
        return res.status(200).json(foundTest);
    } catch (error) {
        controllerErrorHandler({error: error, req: req, res: res, status: 409});
    }
};

export const updateOneTestByIdHandler = async (
    req: Request<
        UpdateOneTestByIdInput['params'],
        Record<string, unknown>,
        UpdateOneTestByIdInput['body']
    >,
    res: Response
) => {
    try {
        const updatedTest = await updateOneTestById(req.params.testId)(
            req.body
        );
        return res.status(200).json(updatedTest);
    } catch (error) {
        controllerErrorHandler({error: error, req: req, res: res, status: 409});
    }
};

export const deleteOneTestByIdHandler = async (
    req: Request<DeleteOneTestByIdInput['params']>,
    res: Response
) => {
    try {
        const deletedTest = await deleteOneTestById(req.params.testId);
        return res.status(200).json(deletedTest);
    } catch (error) {
        controllerErrorHandler({error: error, req: req, res: res, status: 409});
    }
};
