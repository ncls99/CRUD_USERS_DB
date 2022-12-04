const {Sequelize} = require('sequelize')


const db = new Sequelize({
    dialect : 'postgres',
    host: 'localhost',
    database: 'cruds-db',
    username: 'postgres', 
    password: '123456789', 
    port: 5432
})

module.exports = db

