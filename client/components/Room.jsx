import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'
import io from 'socket.io-client'


export default class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      socket: io()
    }
  }

  componentDidMount() {
    this.state.socket.emit('addUser', this.state.user)
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