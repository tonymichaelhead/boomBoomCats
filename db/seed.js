const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbURL = require('../../env/config.js');
const cards = require('./cards.json');

// MongoClient.connect(dbURL, (err, database) => {
//   cards = database.collection('cards');
//   for(let i = 0; i < 4; i++) {
//     cards.insertMany(cards)

//   }
// })

