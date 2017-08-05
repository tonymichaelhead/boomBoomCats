var Client = {}
let socket = io()

$(function() {
  $('form').submit(function() {
    socket.emit('chat message', $('#m').val())
    $('#m').val('')
    return false
  })

  socket.on('chat message', function(msg) {
    $('#messages').append(($('<li>').text(msg)))
  })

  socket.on('game start', function() {
    $('#poop').text('THE GAME HAS BEGUN')
  })
})