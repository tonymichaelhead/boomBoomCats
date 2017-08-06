import React from 'react'
import Players from './Players.jsx'
import Chat from './Chat.jsx'


export default class GameLogic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActiveGame: false,
      players: [],
      deck: [],
      discardPile: [],
      turn: []
    }

  }

  componentDidMount() {
    //initiailze a game
  }

//////MAIN GAME LOGIC FUNCTIONALITY

  drawACard() {

  }


  endTurn() {

  }


////////CARD SPECIFIC ACTIONS 

  skipATurn() {

  }

  attackNextPlayer() {

  }


  shuffleDeck() {

  }

  seeTheFuture() {

  }



  render() {
    return (
      <div>Sup I am GameLogic component
        <Players />
        <Chat />
      </div>
    )
  }

}

