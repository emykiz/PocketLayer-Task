require('dotenv').config()

module.exports = {
  HOST: process.env.HOST, //your hostname
  USER: process.env.USER,      //username
  PASSWORD: process.env.PASSWORD,     //password
  DB: process.env.DB,   //database name
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
