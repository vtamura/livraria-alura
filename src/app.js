import express from 'express'
import DAO from './DAO/DAO.js'
import autoresRoutes from '../src/routes/autoresRoutes.js'
import livrosRoutes from '../src/routes/livrosRoutes.js'

const app = express()
app.use(express.json())

app.use('/', livrosRoutes)
app.use('/', autoresRoutes)


app.get('/', (req, res) => {
    res.status(200).send('Curso Node')
})

export default app