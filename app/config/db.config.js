module.exports = {
  HOST: "sql212.epizy.com",
  USER: "epiz_33822793",
  PASSWORD: "emediong11",
  DB: "epiz_33822793_pocket_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
