import React from 'react';

const DiscardPile = (props) => {
  //console.log('these are the DiscardPile props', props.discard)
  let lastCard = props.discard[props.discard.length - 1] ||
     [{ 
       image: 'https://hearthstone.gamepedia.com/media/hearthstone.gamepedia.com/thumb/4/4c/Card_back-Pandaria.png/200px-Card_back-Pandaria.png?version=c5a8d433de2125b5a6751a8090a7e241',
       name: 'none',
       description: 'i-am-a-placholder'
    }]
  //console.log(lastCard[0])
      
  return (
    <div className="discard-pile card thumbnail col-xs-4">
        <div className="card-title text-center">{lastCard[0].name}</div>
        <img className="img-rounded discard-image" src={lastCard[0].image}></img>
        <div className="card-description text-center">{lastCard[0].description}</div>
    </div>
  );
};

export default DiscardPile;