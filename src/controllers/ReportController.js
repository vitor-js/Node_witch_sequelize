const {Op} = require('sequelize')

const User = require('../models/User')
const Tech = require('../models/Tech')

module.exports = {
    async show(req, res) {
      // Encontrar todos os usuarios que terminar com @hotmail.com
      // Desses usuarios todos que moram em aguas claras
      // Desses ususarios buscar tencnologias que começam com react 
    
        const users = await User.findAll({
            attributes:['name', 'email'],
            where:{
                email:{
                    [Op.iLike]:'%@hotmail.com'
                }
            },
            include:[
                {association:'addresses', where:{street:'aguas claras'} }, // Endereços
                { association:'techs',
                require:false,
                where: {
                    [Op.like]:'React%'
                }},
                //Tecnologias
            ]
        })

        return res.json(users)
    }
}