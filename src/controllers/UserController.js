const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const {name, email, age} = req.body
        const newUser = await User.create({name, email,age})
        return res.json(newUser)
    },

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users)
    }
}