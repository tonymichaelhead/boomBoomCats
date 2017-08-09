import React from 'react';

const Deck = (props) => {
  console.log('these are the props of Deck', props)
  return (
      <div className='col-xs-4 col-xs-offset-2'>
        <img className="deck img-rounded" onClick={props.handleDeckClick} src={'./assets/cardBack.jpg'} />
      </div>
  )
};

export default Deck;