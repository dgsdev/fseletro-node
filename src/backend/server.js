import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import bodyParser from 'body-parser'

const server = express()
const port = 3001

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(express.json())
server.use(cors())

server.use(bodyParser.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

server.get("/produtos", (req, res) => {
    connection.query("SELECT descricao, preco, preco_venda, imagem, categoria FROM produtos JOIN categorias ON produtos.id_categorias = categorias.id_categorias", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

server.get("/comentarios", (req, res) => {
    connection.query("SELECT * FROM comentarios", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

server.get("/pedidos", (req, res) => {
    connection.query("SELECT * FROM pedido", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

server.post("/comentarios", (req, res) => {
    const { nome } = req.body
    const { email } = req.body
    const { msg } = req.body 
    connection.query(`INSERT INTO comentarios(nome, email, msg) values ('${nome}','${email}','${msg}')`, (error, result) => {
        if (error) {
            res.send("Erro ao Inserir Comentário")
        } else  {
            res.status(201).json({
                message: "Comentário Cadastrado com Sucesso!"
            })
        }
    })
})

server.post("/pedidos", (req, res) => {
    const { cliente } = req.body
    const { endereco } = req.body
    const { telefone } = req.body 
    const { produto } = req.body
    const { preco } = req.body
    const { quantidade } = req.body 
    const { preco_total } = req.body 

    connection.query(`INSERT INTO pedido(cliente, endereco, telefone, produto, preco, quantidade, preco_total) values ('${cliente}','${endereco}','${telefone}','${produto}','${preco}','${quantidade}','${preco_total}')`, (error, result) => {
        if (error) {
            res.send("Erro ao Inserir Pedido")
        } else  {
            res.status(201).json({
                message: "Pedido Cadastrado com Sucesso!"
            })
        }
    })
})

server.listen(port, () => {
    console.log(`API NodeJS rodando em http://localhost:${port}`)
}) 
