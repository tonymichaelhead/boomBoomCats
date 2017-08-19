// these models will define a user's profile in the game
const sqldb = require('../postgres/sqldb')
const sequelize = require('sequelize')

const UserProfile = sqldb.define('Users', {
  name: sequelize.STRING,
  picture: sequelize.STRING,
  wins: sequelize.INTEGER,
  losses: sequelize.INTEGER
})

UserProfile.sync()
  .then(()=>console.log('suxxessful user table creation'))
  .catch(()=>console.log('failed to mount user tables'))


module.exports = UserProfile;