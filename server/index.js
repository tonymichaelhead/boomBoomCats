const express = require('express')
const path = require('path')
const parser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../static')))

io.on('connection', function(socket) {
  console.log('a user connected!!!')
  let srvSockets = io.sockets.sockets
  if (Object.keys(srvSockets).length === 4) {
    io.emit('game start')
  }

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', function() {
    console.log('a user disconnected....')
  })
})

server.listen(PORT, function() {
  console.log('now serving app on port ', PORT)
})

