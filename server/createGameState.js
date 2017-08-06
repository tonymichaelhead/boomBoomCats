 let createGameState = function() {

  let gameState = {
    player: [{},{},{},{}],
    deck: [],
    discard: [],
    turn: [player[0], player[1], player[2], player[3]]
  }

  //grab deck from the database NEED TO GRAB syntax from ethan
  let orderedDeck = null

  //pops off the 3 bombs to array
  let bombs = []
  bombs.push( orderedDeck.pop() )
  bombs.push( orderedDeck.pop() )
  bombs.push( orderedDeck.pop() )

  //distributes defuses to four players
  for (let i = 0; i < 4; i++) {
    gameState.player[i].hand = [orderedDeck.pop()]
  }

  let shuffledDeck = []

  //shuffle the deck, pick a random index and add it to shuffledDeck, then splice it out
  for (let i = 0; i < orderedDeck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(orderedDeck.length - 1);
    let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
    shuffledDeck.push(orderedDeck[randomIndex])
    orderedDeck.splice(randomIndex, 1)
  }

  //distribute the normal cards to the hand now
  for (let i = 0; i < 16; i++) {
    gameState.player[(i%4)].hand.push(shuffledDeck.pop())
  }

  //randomly put the 3 bombs somewhere
  for (let i = 0; i < 3; i++) {
    let min = 0
    let max = shuffledDeck.length - 1
    let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
    shuffledDeck.splice(randomIndex, 0, bomb[i])
  }

  gameState.deck = shuffledDeck.slice()
  
  return gameState
}

module.exports = createGameState