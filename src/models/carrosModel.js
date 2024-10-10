import { Schema, model} from "mongoose"

const carrosSchema = new Schema({
    marca:{type: String, required: true},
    modelo:{type: String, required: true},
    placa:{type: String, required: true},
    ano:{type: Number, required: true},
})

export default model('Carros', carrosSchema)