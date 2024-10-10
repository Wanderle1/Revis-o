import { Schema, model } from "mongoose";

const vendasModel = new Schema({
    cliente:{type: Schema.Types.ObjectId, ref: 'Cliente', required: true},
    carro:{type: Schema.Types.ObjectId,ref: 'Carros', required: true},
    preco:{type: Number, required: true},
    data:{type: Number, required: true},
})

export default model('Vendas', vendasModel)