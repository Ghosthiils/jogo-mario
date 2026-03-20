const express = require('express');
const mysql = require('mysql2')
require('dotenv').config();
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());

app.use(express.static(__dirname))



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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.post('/salvar-pontuacao', (req, res) => {

    const {nome, pontos} = req.body

    const checkSql = "SELECT * FROM jogadores WHERE nome = ?"

    db.query(checkSql, [nome], (err, results) => {

        if (err) {
            return res.status(500).json({ erro: "Erro ao verificar jogador" })
        }

        
        if (results.length === 0) {

            const insertSql = "INSERT INTO jogadores (nome, pontos) VALUES (?, ?)"

            db.query(insertSql, [nome, pontos], (err) => {

                if (err) {
                    return res.status(500).json({ erro: "Erro ao inserir jogador" })
                }

                return res.json({ mensagem: "Pontuação salva (novo jogador)" })
            })

        } else {

            const pontosAtuais = results[0].pontos

            
            if (pontos > pontosAtuais) {

                const updateSql = "UPDATE jogadores SET pontos = ? WHERE nome = ?"

                db.query(updateSql, [pontos, nome], (err) => {

                    if (err) {
                        return res.status(500).json({ erro: "Erro ao atualizar pontuação" })
                    }

                    return res.json({ mensagem: "Novo recorde atualizado!" })
                })

            } else {
                
                return res.json({ mensagem: "Pontuação menor, não atualizada" })
            }
        }

    })
})





app.get('/ranking', (req, res) => {

    const sql = "SELECT nome, pontos FROM jogadores ORDER BY pontos DESC LIMIT 10"

    db.query(sql, (err, results) => {

        if (err) {
            console.log("ERRO REAL:", err)
            return res.status(500).json({erro: "Erro ao buscar ranking"})
        }

        res.json(results)

    })
})

app.post('/registro', async (req, res) => {

    const { nome, email, senha } = req.body

    try {

        const senhaHash = await bcrypt.hash(senha, 10)

        const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)"

        db.query(sql, [nome, email, senhaHash], (err) => {

            if (err) {
                console.log("ERRO REGISTRO:", err) 
                return res.status(500).json({ erro: "Erro ao registrar usuário" })
            }

            res.json({ mensagem: "Usuário registrado com sucesso" })
        })

    } catch (error) {
        console.log("ERRO GERAL:", error) 
        res.status(500).json({ erro: "Erro no servidor" })
    }

})


app.post('/login', (req, res) => {

    const {email, senha} = req.body

    const sql = "SELECT * FROM usuarios WHERE email = ?"

    db.query(sql, [email], async (err, results) => {

        if (err) {
            return res.status(500).json({ erro: "Erro no servidor" })
        }

        if (results.length === 0) {
            return res.status(401).json({ erro: "Email ou senha incorretos" })
        }

        const usuario = results[0]

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if (!senhaValida) {
            return res.status(401).json({ erro: "Email ou senha incorretos" })
        }

        res.json({ mensagem: "Login bem-sucedido", usuario })


    })

})





app.listen(process.env.PORT,  () => {
    console.log(`Servidor funcuionando ${process.env.PORT}`)
});