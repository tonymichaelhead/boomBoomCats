module.exports = {

    seeTheFuture: function (cardPosition) {
        let nextThreeCards = this.state.deck.slice(this.state.deck.length-3) //FROM THE END OF THE DECK
        this.setState({
            seeFutureCards: nextThreeCards
        })
        this.discardCard(cardPosition)
    },
    shuffleDeck: function (cardPosition) {
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
    },
        attackNextPlayer: function(cardPosition){ //add extra turn on first element
        let gameTurns = this.state.turn.slice
        let attackedPlayer = this.state.turn.slice(1,2)
        gameTurns.splice( 1,0, attackedPlayer )
        this.setState( { turn: gameTurns } )

        this.discardCard(cardPosition)
    },
    skipATurn: function (cardPosition) {
        this.discardCard(cardPosition)
        this.endTurn()
    }

}