module.exports = {
  HOST: "localhost", //your hostname
  USER: "root",      //username
  PASSWORD: "",     //password
  DB: "pocket_db",   //database name
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
