const express = require('express');
const app = express();
const mysql = require('mysql2')
require('dotenv').config();




const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME   
})


db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco', err)
        
    } else {
        console.log('Voce esta conectado ao banco')
    }
})



app.use(express.json())

app.get('/', (req, res) => {
    res.send('deu bom')
})

fetch('/salvar-pontuacao')

app.post('/salvar-pontuacao', (req, res) => {
    const {nome, pontuacao} = req.body

    const sql = "INSERT INTO jogadores (nome, pontos) VALUES (?, ?)"

    db.query(sql, [nome, pontos], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({erro: "Erro ao salvar pontuação"})
        }
        res.json({mensagem: "Pontuação salva com sucesso"})
    })
})



app.listen(process.env.PORT,  () => {
    console.log(`Servidor funcuionando `)
});