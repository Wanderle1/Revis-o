import express from "express"
import connectDB from "./config/db.js"
import carrosRouter from './routes/carrosRouter.js'
import clientesRouter from './routes/clientesRouter.js'
import vendasRouter from './routes/vendasRouter.js'

connectDB()
const app = express()
app.use(express.json())

app.use('/carros', carrosRouter)
app.use('/clientes', clientesRouter)
app.use('/vendas', vendasRouter)

app.listen(3000, () => console.log(' http://localhost:3000'))