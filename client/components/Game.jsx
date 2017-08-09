import React from 'react'
import io from 'socket.io-client'
import Opponents from './Opponents.jsx'
import Player from './Player.jsx'
import LoadingView from './LoadingView.jsx'
import InitializedView from './InitializedView.jsx'
import cardFunctions from '../function/cardFunctions.js'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.attackNextPlayer = cardFunctions.attackNextPlayer.bind(this);
    this.skipATurn = cardFunctions.skipATurn.bind(this);
    this.shuffleDeck = cardFunctions.shuffleDeck.bind(this);
    this.seeFutureCards = cardFunctions.seeTheFuture.bind(this);
    this.state = {
      allPlayersId: [],
      playerId: '',
      allPlayers: [],
      playerIndex: null,
      deck: [],
      discard: [],
      turn: [],
      seeFutureCards: []
    }
  }

  componentDidMount() {
    this.props.socket.on('game start', function(gameState, users) {
      let usersId = Object.keys(users)
      let user = this.props.socket.id
      // console.log(`socket id is ${this.props.socket.id}`)
      // console.log(`users is ${JSON.stringify(users)}`)
      this.setState({
        allPlayersId: usersId, // array
        playerId: user, //string
        allPlayers: gameState.allPlayers, // array with objects with hand
        playerIndex: usersId.findIndex( (e) => e === user), //string
        deck: gameState.deck, //array of card objects
        discard: [],
        turn: [0,1,2,3]
      })
      // console.log('we are in the game component')
      // console.log(`Game Component: usersID is ${JSON.stringify(Object.values(users))}`)
      // console.log(`Game Component: userID is ${JSON.stringify(user)}`)
    }.bind(this))

  }

  handleCardClick(cardName, handIndex) {
    if (cardName === 'attack') {
      cardFunctions.attackNextPlayer.bind(this, handIndex)
    } else if ( cardName === 'shuffle') {
      cardFunctions.shuffleDeck.bind(this, handIndex)
    } else if (cardName === 'skip') {
      cardFunctions.skipATurn.bind(this, handIndex)
    } else if (cardName === 'see-the-future') {
      cardFunctions.seeTheFuture.bind(this, handIndex)
    }
  }

  handleDeckClick() {
<<<<<<< HEAD
    drawACard()
  }
=======
    drawACard();
  }
  
>>>>>>> Working on handler for handleDeckClick

  drawACard() {
    let gameDeck = this.state.deck.slice()
    let drawnCard = gameDeck.pop()  //draw from the last index in the array for performant
    let currentPlayer = this.state.allPlayers[this.state.turn[0]]
    let hand = currentPlayer.hand
    let hasDefuse = hand.findIndex( (e) => { e.type === "defuse"} )

    if (drawnCard.type === "bomb" && !hasDefuse ) { //player has no defuse
      //EMIT BOOM
      console.log('shucks you dead fool')
      this.endTurn('dead')
    } else if (drawCard.type === "bomb" && !!hasDefuse) {
      //this.defuseBomb()

      //remove defuse from hand
        //find the index with defuse

        //remove it from the hand array
      let allPlayersExceptCurrent = this.state.allPlayers.slice(1)
      let currentPlayerHand = Object.assign({}, currentPlayer)
      currentPlayerHand.hand.splice(hasDefuse, 1)

      let min = 0
      let max = this.state.deck - 1
      let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
      gameDeck.splice(randomIndex,0, drawnCard)

      this.setState({ 
        deck: gameDeck,
        allPlayers: [currentPlayerHand,...allPlayersExceptCurrent]
      }) //update the deck



      this.endTurn()

    } else {
      //update the player's hand
      //copy each object

      let allPlayersExceptCurrent = this.state.allPlayers.slice(1)
      let currentPlayerWithUpdatedHand = Object.assign({}, currentPlayer)
      currentPlayerWithUpdatedHand.hand.push(drawnCard)

      this.setState({ 
        deck: gameDeck,
        allPlayers: [currentPlayerWithUpdatedHand,...allPlayersExceptCurrent]
      }) //update the deck
    }
  }




  endTurn(status) {
    let gameTurns = this.state.turn.slice()

    //if there's been an attack or player dead, get rid of the duplicate since it's a one-time thing
    if ( status === 'dead' || this.state.turn[0] === this.state.turn[1] ) {
      let playerWhoEndedTurn = gameTurns.shift()
    } else {
      let playerWhoEndedTurn = gameTurns.shift()
      gameTurns.push(playerWhoEndedTurn)
    }
    this.setState({ turns: gameTurns })

  }

  discardCard(cardIndex) {
    //grab the specific card
    //add it to the discard pile
    let currentPlayer = this.state.allPlayers[this.state.turn[0]]
    let discardCard = currentPlayer.hand.splice(cardIndex,1)
    //grab a copy of the current player
    //grab a copy of the other players

    let updatedDiscard = this.state.discard.slice()
    updatedDiscard.push(discardCard)

    this.setState({
      discard: updatedDiscard
    })

  }

  printAllCardsInDeck() {
    let deckStr = ''
    for (let i = 0; i < this.state.deck.length; i++) {
      deckStr += `${i}) ${this.state.deck[i].name} `
    }
    console.log(deckStr)
  }

  render() {
    let tempOpponents = this.state.allPlayers.slice()
    tempOpponents.splice(this.state.playerIndex,1)
    let opponents = tempOpponents

    let tempOpponentUsernames = this.state.allPlayersId.slice()
    console.log('ALL PLAYERS ID ::: ', this.state.allPlayersId)
    tempOpponentUsernames.splice(this.state.playerIndex,1)
    let opponentsUsernames = tempOpponentUsernames
    
    let player = this.state.allPlayers[this.state.playerIndex]
    let isPlayerTurn
    this.state.turn[0] === this.state.playerIndex ? isPlayerTurn = true: isPlayerTurn = false
    
    // if (this.state.allPlayers.length === 4) { debugger }

    return (

      <div>
        {console.log(`this.state is ${JSON.stringify(this.state)}`)}
        {console.log(`
          opponentsUsernames are ${JSON.stringify(opponentsUsernames)}
          playerIndex is ${this.state.playerIndex} and player is ${JSON.stringify(player)}
          is it player's turn? ${isPlayerTurn}
        `)}
        { this.state.allPlayers.length === 4 ? 
          <InitializedView 
            deck={this.state.deck}
            discard={this.state.discard}
            player={player} 
            opponents={opponents} 
            opponentsUsernames={opponentsUsernames} 
            handleDeckClick={this.props.handleDeckClick}/> : 
          <LoadingView socket={this.props.socket} /> }
      </div>

    )
  }
}