const express = require('express')
const path = require('path')
const parser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const router = require('../routes/routes')
const app = express()
const PORT = process.env.PORT || 3000

const server = require('http').Server(app)
const io = require('socket.io')(server)
let db // mongo
const dbURL = require('../env/config.js');
const createGameState = require('./createGameState')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../static')))


io.on('connection', function(socket) {
  console.log('a user connected!!!')

  // Detect the number of players before starting game
  let srvSockets = io.sockets.sockets
  if (Object.keys(srvSockets).length === 4) {
    let gameState = createGameState()
    io.emit('game start', gameState)
  }

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', function() {
    console.log('a user disconnected....')
  })
})

MongoClient.connect(dbURL, (err, database) => {
  assert.equal(null, err);
  db = database;
  server.listen(PORT, function() {
    console.log('now serving app on port ', PORT)
  });
});

