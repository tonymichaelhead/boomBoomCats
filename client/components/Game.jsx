import React from 'react'
import io from 'socket.io-client'
import Opponents from './Opponents.jsx'
import Player from './Player.jsx'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

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
      let usersId = Object.values(users)
      let user = users[this.props.socket.id]
      // console.log(`socket id is ${this.props.socket.id}`)
      // console.log(`users is ${JSON.stringify(users)}`)
      this.setState({
        allPlayersId: usersId,
        playerId: user,
        allPlayers: gameState.allPlayers,
        playerIndex: usersId.findIndex( (e) => e === user),
        deck: gameState.deck,
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
      this.attackNextPlayer(handIndex)
    } else if ( cardName === 'shuffle') {
      this.shuffleDeck(handIndex)
    } else if (cardName === 'skip') {
      this.skipATurn(handIndex)
    } else if (cardName === 'see-the-future') {
      this.seeTheFuture(handIndex)
    }
  }

  drawACard() {
    let gameDeck = this.state.deck.slice()
    let drawnCard = gameDeck.pop()  //draw from the last index in the array for performant
    let currentPlayer = this.state.allPlayers[this.state.turn[0]]
    let hand = currentPlayer.hand
    let hasDefuse = hand.findIndex( (e) => { e.type === "defuse"} )

    if (drawnCard.type === "bomb" && !hasDefuse ) { //player has no defuse
      //EMIT BOOM
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


  skipATurn(cardPosition) {
    this.discardCard(cardPosition)
    this.endTurn()
  }

  attackNextPlayer(cardPosition) { //add extra turn on first element
    let gameTurns = this.state.turn.slice
    let attackedPlayer = this.state.turn.slice(1,2)
    gameTurns.splice( 1,0, attackedPlayer )
    this.setState( { turn: gameTurns } )

    this.discardCard(cardPosition)
  }

  shuffleDeck(cardPosition) {
    let unshuffledDeck = this.state.deck.slice()
    let shuffledDeck = []

    while (unshuffledDeck.length > 0) {
      let min = 0
      let max = unshuffledDeck.length - 1
      let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
      shuffledDeck.push(unshuffledDeck[randomIndex])
      unshuffledDeck.splice(randomIndex, 1)
    }

    this.setState({ deck: shuffledDeck })
    this.discardCard(cardPosition)
  }


  seeTheFuture(cardPosition) {
    let nextThreeCards = this.state.deck.slice(this.state.deck.length-3) //FROM THE END OF THE DECK
    this.setState({
      seeFutureCards: nextThreeCards
    })
    this.discardCard(cardPosition)
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

  render() {
    let tempOpponents = this.state.allPlayers.slice()
    tempOpponents.splice(this.state.playerIndex,1)
    let opponents = tempOpponents

    let tempOpponentUsernames = this.state.allPlayersId.slice()
    tempOpponentUsernames.splice(this.state.playerIndex,1)
    let opponentsUsernames = tempOpponentUsernames

    let player = this.state.allPlayers[this.state.playerIndex]
    let isPlayerTurn
    this.state.turn[0] === this.state.playerIndex ? isPlayerTurn = true: isPlayerTurn = false
    
    return (

      <div>
        <h3>This is the game window</h3>
        {console.log(`this.state is ${JSON.stringify(this.state)}`)}
        {console.log(`
        opponentsUsernames are ${JSON.stringify(opponentsUsernames)}
        opponents are ${JSON.stringify(opponents)}
        playerIndex is ${this.state.playerIndex} and player is ${JSON.stringify(player)}
        is it player's turn? ${isPlayerTurn}
        `)}
        { this.state.allPlayers.length === 4 ? (<div><Opponents opponents={opponents} opponentsUsernames={opponentsUsernames} />
        <Player isPlayerTurn={isPlayerTurn} player={player} /></div>) : (<div>bloop nope</div>) }
        {/* <Opponents opponents={opponents} opponentsUsernames={opponentsUsernames} />
        <Player isPlayerTurn={isPlayerTurn} player={player} /> */}
        <h1 id='poop'></h1>

      </div>

    )
  }
}