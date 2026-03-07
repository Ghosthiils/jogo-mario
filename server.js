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



app.listen(process.env.PORT,  () => {
    console.log(`Servidor funcuionando `)
});