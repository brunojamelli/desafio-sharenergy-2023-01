import * as mongoose from "mongoose";
import { connection } from '../database';

export interface IClient extends mongoose.Document {
    name: string;
    email: number;
    phoneNumber: string,
    cpf: string
}

export const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    // address: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Address'
    // },
    cpf: { type: String, required: false }
});

const Client = connection.model<IClient>("Client", clientSchema);
export default Client;