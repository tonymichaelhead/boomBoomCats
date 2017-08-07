import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'
import io from 'socket.io-client'


export default class Room extends React.Component {
  constructor() {
    super()
    this.state = {
      socket: io()
    }
  }

  componentDidMount() {
    this.state.socket.emit('addUser', prompt("Type your username: "))
  }

  render() {
    return (

      <div>
        I am the room

        <h1>BoomBoom Cats</h1>

        <Game socket={this.state.socket}/>

        <Chat socket={this.state.socket} />

      </div>

    )
  }
}