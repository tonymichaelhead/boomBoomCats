import React from 'react';
import Opponents from './Opponents.jsx'
import Player from './Player.jsx'
import Deck from './Deck.jsx'
import DiscardPile from './DiscardPile.jsx'

const InitializedView = (props) => {
  console.log('ATTN: hitting the initilized view')
  console.log('these are the props of the Initialized View', props)
  return (
    <div>
      <Opponents opponents={props.opponents} opponentsUsernames={props.opponentsUsernames} />
      <Deck deck={props.deck}/>
      <DiscardPile discard={props.discard}/>
      <Player isPlayerTurn={props.isPlayerTurn} player={props.player} />
    </div>
  );
};

export default InitializedView;