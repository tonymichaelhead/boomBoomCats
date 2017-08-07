import React from 'react';

const DiscardPile = (props) => {
  let lastCard = props.lastCard;
  return (
    <div className="discard-pile">
      <img src={lastCard.image}></img>
      <div name={lastCard.name}></div>
      <div description={lastCard.description}></div>
    </div>
  );
};

export default DiscardPile;