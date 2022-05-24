import express from "express"
import app from "../app.js"
import livrosController from "../Controller/livrosController.js"

const router = express.Router()

router
    .get('/livros', livrosController.listaLivros)
    .get('/livros/:id', livrosController.listaLivro)
    .post('/livros', livrosController.insereLivro)
    .put('/livros/:id', livrosController.atualizaLivro)
    .delete('/livros/:id', livrosController.deletaLivro)

export default router