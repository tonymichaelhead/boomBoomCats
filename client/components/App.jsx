import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'

export default class App extends React.Component {
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