import { query } from 'express'
import DAO from '../DAO/DAO.js'

const listaLivros = async (req, res) => {
    try {
        const response = await DAO.list(`SELECT * FROM alura.livros`)

        return response.status === 200 ? res.json(response.body) : res.status(500).json(response.body)
    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const listaLivro = async (req, res) => {
    try {
        const response = await DAO.list(`SELECT * FROM alura.livros WHERE id_livro = ${req.params.id}`)

        return response.status === 200 ? res.json(response.body) : res.status(500)
    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const insereLivro = async (req, res) => {
    try {
        const {titulo, autor, editora, num_paginas} = req.body
    
        const response = await DAO.insert(`INSERT INTO alura.livros (titulo, autor, editora, num_paginas) VALUES ('${titulo}', '${autor}', '${editora}', '${num_paginas}')`)
    
        return response.status === 200 ? res.json(response.body) : res.status(500)

    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const atualizaLivro = async (req, res) => {
    try {
        const { id } = req.params
        let queryParams = ''

        Object.keys(req.body).forEach(field => {
            queryParams += `${field} = '${req.body[field]}', `
        })

        const modifiedParams = queryParams.slice(0, -2)

        const response = await DAO.update(`UPDATE alura.livros SET ${modifiedParams} WHERE id_livro = ${id}`)

        return response === 200 ? res.json(response.body) : res.status(500)
    } catch(error) {
        res.send(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const deletaLivro = async (req, res) => {
    try {
        const { id } = req.params

        const response = await DAO.deleta(`DELETE FROM alura.livros WHERE id_livro = ${id}`)

        return response.status === 200 ? res.json(response.body) : res.status(500) 
    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

export default { listaLivros, listaLivro, insereLivro, atualizaLivro, deletaLivro }