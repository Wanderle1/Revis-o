import Clientes from '../models/clienteModel.js'

export const store = async (req, res) => {
    try{
        const cliente = await Clientes.create(req.body)
        return res.status(201).json(cliente)
    }catch(error){
        return res.status(400).jsom({message: error.message})
    }
}

export const index = async (req, res) => {
    try{
        const cliente = await Clientes.find().exec()
        return res.status(201).json(cliente)
    }catch(error){
        return res.status(400).jsom({message: error.message})
    }
}

export const update = async (req, res) => {
    try{
        const cliente = await Clientes.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(201).json(cliente)
    }catch(error){
        return res.status(400).jsom({message: error.message})
    }
}

export const destroy = async (req, res) => {
    try{
        const cliente = await Clientes.findByIdAndDelete(req.params.id).exec()
        return res.status(201).json(cliente)
    }catch(error){
        return res.status(400).jsom({message: error.message})
    }
}