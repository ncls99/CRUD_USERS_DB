const {DataTypes} = require('sequelize')

const db =  require('../utils/database')

// {
//     id: 1,
//     first_name: 'Nicolás',
//     last_name: 'Montenegro',
//     email: 'nico@gmail.com',
//     password: 'abcd1234',
//     birthday: '30-09-1999'
// }


const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Users