import Carros from '../models/carrosModel.js'

export const store = async (req, res) => {
    try{
        const carro = await Carros.create(req.body)
        return res.status(201).json(carro)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const index = async (req, res) => {
    try{
        const carro = await Carros.find().exec()
        return res.status(201).json(carro)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const update = async (req, res) => {
    try{
        const carro = await Carros.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(201).json(carro)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const destroy = async (req, res) => {
    try{
        const carro = await Carros.findByIdAndDelete(req.params.id).exec()
        return res.status(201).json(carro)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}