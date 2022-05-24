import express from "express"
import app from "../app.js"
import autoresController from "../Controller/autoresController.js"

const router = express.Router()

router
    .get('/autor', autoresController.listaAutores)
    .get('/autor/:id', autoresController.listaAutor)
    .post('/autor', autoresController.insereAutor)
    .put('/autor/:id', autoresController.atualizaAutor)
    .delete('/autor/:id', autoresController.deletaLivro)

export default router