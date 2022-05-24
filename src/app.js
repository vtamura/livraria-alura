import express from 'express'
import livrosController from '../src/controller/livrosController.js'
import DAO from './DAO/DAO.js'
import livrosRoutes from '../src/routes/livrosRoutes.js'

const app = express()
app.use(express.json())

app.use('/', livrosRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Curso Node')
})

export default app