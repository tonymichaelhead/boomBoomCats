import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'
import io from 'socket.io-client'
let socket = io()

export default class Room extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <div>

        <h1>BoomBoom Cats</h1>

        <Game />

        <Chat />

      </div>

    )
  }
}