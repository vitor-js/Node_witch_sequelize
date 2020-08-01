 module.exports = {
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'docker',
    database:'sqlsequelize',
    define:{
        timeistamps:true,
        underscored:true,
        underscoredAll:true,
    },
 }