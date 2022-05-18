import {model, Schema} from 'mongoose';

export interface Test {
    _id: string | Schema.Types.ObjectId;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const schema = new Schema<Test>(
    {
        name: {type: String, unique: true, required: true},
        isActive: {type: Boolean, default: true},
    },
    {timestamps: true}
);

export const TestModel = model<Test>('Test', schema);
