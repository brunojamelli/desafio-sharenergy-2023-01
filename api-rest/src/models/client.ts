import * as mongoose from "mongoose";
import { connection } from '../database';

export interface IClient extends mongoose.Document {
    name: string;
    email: string;
    phoneNumber: string,
    cpf: string,
    state: string,
    city: string,
    street: string,
    zip_code: string,
}

export const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    cpf: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    street: { type: String, required: false },
    zip_code: { type: String, required: false }
});

const Client = connection.model<IClient>("Client", clientSchema);
export default Client;