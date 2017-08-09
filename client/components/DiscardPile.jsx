import React from 'react';

const DiscardPile = (props) => {
  //console.log('these are the DiscardPile props', props.discard)
  let lastCard = props.discard[props.discard.length - 1] ||
     [{ 
       image: 'http://acedmagazine.com/wp-content/uploads/catsleeping.jpg',
       name: 'Discard Pile',
       description: 'Discard Pile'
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