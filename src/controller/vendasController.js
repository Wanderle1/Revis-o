import Vendas from '../models/vendasModel.js'

export const store = async (req, res) => {
    try{
        const vendas = await Vendas.create(req.body)
        return res.status(201).json(vendas)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const index = async (req, res) => {
    try{
        const vendas = await Vendas.find().exec()
        return res.status(201).json(vendas)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const update = async (req, res) => {
    try{
        const vendas = await Vendas.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(201).json(vendas)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const destroy = async (req, res) => {
    try{
        const vendas = await Vendas.findByIdAndDelete(req.params.id).exec()
        return res.status(201).json(vendas)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}