
const Users = require('../models/users.models')

const usersDB = []


// {
//     id: 1,
//     first_name: 'Nicolás',
//     last_name: 'Montenegro',
//     email: 'nico@gmail.com',
//     password: 'abcd1234',
//     birthday: '30-09-1999'
// }

const findAllUsers = async() => {

    const data = await Users.findAll()

    return data
}

const findUserById = async(id) => {
    const data = await Users.findOne({
        where: {
            id : id
        }
    })
    return data
}

const createNewUser = async (obj) => {
    const newUser = await Users.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    usersDB.push(newUser)
    return newUser
}

const updateUser = async (id, obj) => {
    const data = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser
}


