module.exports = {

    seeTheFuture: function (cardPosition) {
        if(this.state.deck.length > 3){
            let nextThreeCards = this.state.deck.slice(this.state.deck.length-3) //FROM THE END OF THE DECK
        } else {
            let nextThreeCards = this.state.deck.slice();
        }
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
        let myself = gameTurns[0];
        let attackedPlayerTurnIndex = 1
        for(let i = 1; i < gameTurns.length; i++){
            if(myself !== gameTurns[i]){
                attackedPlayerTurnIndex = i;
                break;
            }
        }
        let attackedPlayer = this.state.turn.slice(attackedPlayerTurnIndex,attackedPlayerTurnIndex+1)
        gameTurns.splice( attackedPlayerTurnIndex,0, attackedPlayer )
        this.setState( { turn: gameTurns } )
        this.discardCard(cardPosition)
        this.endTurn()
    },
    skipATurn: function (cardPosition) {
        this.discardCard(cardPosition)
        this.endTurn()
    }

}