import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'
import io from 'socket.io-client'
var socket = io()

export default class Room extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    socket.emit('addUser', prompt("Type your username: "))
  }

  render() {
    return (

      <div>

        <h1>BoomBoom Cats</h1>

        <Game socket={socket}/>

        <Chat socket={socket} />

      </div>

    )
  }
}