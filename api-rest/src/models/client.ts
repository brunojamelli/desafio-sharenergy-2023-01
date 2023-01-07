import * as mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

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

const Client = mongoose.model<IClient>("Client", clientSchema);
export default Client;