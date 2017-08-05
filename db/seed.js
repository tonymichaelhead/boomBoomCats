const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const path = require('path');

const dbURL = require(path.join(__dirname, '../env/config.js'));
const cardTypes = require('./cards.json');

MongoClient.connect(dbURL, (err, database) => {
  cards = database.collection('cards');
  cards.insertMany(cardTypes);
  database.close();
})

