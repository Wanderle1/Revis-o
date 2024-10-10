import { Schema, model } from "mongoose";

const clienteModel = new Schema({
    nome:{type: String, required: true},
    cpf:{type: Number, required: true},
    telefone:{type: [Number], required: true},
    dataNascimento:{type: Number, required: true},
})

export default model('Cliente', clienteModel)