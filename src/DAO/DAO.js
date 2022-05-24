import Sequelize from 'sequelize'
import { QueryTypes } from 'sequelize'

const DB_NAME = 'alura'
const DB_PASS = 'Ccip@123456'
const DB_USER = 'root'
const DB_HOST= 'localhost'
const PORT = 3306


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: PORT,
    dialect: 'mysql'
})

async function insert(query) {
    try {
        sequelize.authenticate()
        try {
            const insertResponse = await sequelize.query(query, {type: QueryTypes.INSERT})
            return {status: 201, body: insertResponse}

        } catch(error) {
            console.log(`Erro na query: ${query}` , error)
            return {status: 510, body: error}
        }
    } catch (error) {
        console.error('Não foi possível estabelecer uma conexão com o banco de dados.', error)
        return {status: 511, body: error}
    }
}

async function list(query) {
    try {
        sequelize.authenticate()
        try {
            const listResponse = await sequelize.query(query, {type: QueryTypes.SELECT})
            return {status: 200, body: listResponse}

        } catch(error) {
            console.log(`Erro na query: ${query}` , error)
            return {status: 510, body: error}
        }
    } catch (error) {
        console.error('Não foi possível estabelecer uma conexão com o banco de dados.', error)
        return {status: 511, body: error}
    }
}

async function update(query) {
    try {
        sequelize.authenticate()
        try {
            const updateResponse = await sequelize.query(query, {type: QueryTypes.UPDATE})
            return {status: 200, body: updateResponse}

        } catch(error) {
            console.log(`Erro na query: ${query}` , error)
            return {status: 510, body: error}
        }
    } catch (error) {
        console.error('Não foi possível estabelecer uma conexão com o banco de dados.', error)
        return {status: 511, body: error}
    }
}

async function deleta(query) {
    try {
        sequelize.authenticate()
        try {
            const deleteResponse = await sequelize.query(query, {type: QueryTypes.DELETE})
            return {status: 200, body: deleteResponse}

        } catch(error) {
            console.log(`Erro na query: ${query}` , error)
            return {status: 510, body: error}
        }
    } catch (error) {
        console.error('Não foi possível estabelecer uma conexão com o banco de dados.', error)
        return {status: 511, body: error}
    }
}

export default { insert, list, update, deleta } 