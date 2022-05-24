import DAO from '../DAO/DAO.js'

const listaAutores = async (req, res) => {
    try {
        const response = await DAO.list(`SELECT * FROM alura.autores`)

        return response.status === 200 ? res.json(response.body) : res.status(500).json(response.body)
    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const listaAutor = async (req, res) => {
    try {
        const response = await DAO.list(`SELECT * FROM alura.autores WHERE id_autor = ${req.params.id}`)

        return response.status === 200 ? res.json(response.body) : res.status(500)
    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const insereAutor = async (req, res) => {
    try {
        const {nome, nacionalidade} = req.body
    
        const response = await DAO.insert(`INSERT INTO alura.autores (nome, nacionalidade) VALUES ('${nome}', '${nacionalidade}')`)
    
        return response.status === 200 ? res.json(response.body) : res.status(500)

    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

const atualizaAutor = async (req, res) => {
    try {
        const { id } = req.params
        let queryParams = ''

        Object.keys(req.body).forEach(field => {
            queryParams += `${field} = '${req.body[field]}', `
        })

        const modifiedParams = queryParams.slice(0, -2)

        const response = await DAO.update(`UPDATE alura.autores SET ${modifiedParams} WHERE id_autor = ${id}`)

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

        const response = await DAO.deleta(`DELETE FROM alura.autores WHERE id_autor = ${id}`)

        return response.status === 200 ? res.json(response.body) : res.status(500) 
    } catch(error) {
        log(`512 - Erro de execução do controller: ${error}`)
        res.status(512).json({
            status: 512,
            body: error
        })
    }
}

export default { listaAutores, listaAutor, insereAutor, atualizaAutor, deletaLivro }