import React from 'react'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player: [],
      deck: [],
      discard: [],
      turn: [] 
    }
  }

  render() {
    return (

      <div>

        <h3>This is the game window</h3>

        <h1 id='poop'></h1>

      </div>

    )
  }
}