// the intended purpose of this database is to handle interactions between the client and user profile

const url = 'postgres://aymcvgqc:8yg_U4c06XIJtHJNrss5WOycNv75G7eD@pellefant.db.elephantsql.com:5432/aymcvgqc'
const sequelize = require('sequelize')

const sqldb = new sequelize(url, {dialect: 'postgres'});

sqldb.authenticate()
  .then(()=>console.log('user profile database has authenticated'))
  .catch(()=>console.log('ERROR in USER PROFILE DATABASE CONNECTION'))


module.exports = sqldb;