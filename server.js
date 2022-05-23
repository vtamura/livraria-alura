const http = require('http')
const port = 3001


const routes = {
    '/': 'Página Inicial',
    '/livros': 'Página de Livros',
    '/autores': 'Página de Autores',
    '/sobre': 'Info sobre o site.'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(routes[req.url])
})

server.listen(port, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${port}`)
})