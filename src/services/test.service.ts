import {Test, TestModel} from '../models/test.model';
import {KnownError} from '../utilities/knownError.utility';

export const createOneTest = async (
    input: Omit<Test, '_id' | 'createdAt' | 'updatedAt' | 'isActive'> & {
        isActive?: boolean;
    }
) => {
    return (await TestModel.create(input)).toJSON();
};

export const findAllTests = async () => {
    return await TestModel.find({}).exec();
};

export const findOneTestById = async (testId: Test['_id']) => {
    return (await TestModel.findById(testId).exec())?.toJSON;
};

export const updateOneTestById =
    (testId: Test['_id']) =>
    async (input: Partial<Omit<Test, '_id' | 'createdAt' | 'updatedAt'>>) => {
        if (input.name === 'throwKnownError') throw new KnownError(':(');
        const {modifiedCount} = await TestModel.updateOne({_id: testId}, input);
        if (modifiedCount < 1) throw new KnownError('Test non updated.');
        const updatedTest = await findOneTestById(testId);
        if (!updatedTest) throw new KnownError('La Película dada no existe.');
        return updatedTest;
    };

export const deleteOneTestById = async (testId: Test['_id']) => {
    const deletedTest = await findOneTestById(testId);
    const {deletedCount} = await TestModel.deleteOne({_id: testId});
    if (deletedCount < 1) throw new KnownError('Test non deleted.');
    return deletedTest;
};
