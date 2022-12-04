const express = require("express")

const userRouter = require('./users/users.router')
const db = require('./utils/database')

const port = 8000
const app = express()

app.use(express.json())

db.authenticate()
    .then(() => console.log('Database correctamente autenticada'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database correctamente sincronizada'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Todo OK'})
})

app.use('/api/v1', userRouter)
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})