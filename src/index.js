import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Olá Marcinho, estou utilizando a IA' })
})

app.listen(3333, () => {
    console.log('Server is running on port 3333')
})
