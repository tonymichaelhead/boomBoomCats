import React from 'react'

const Card = (props) => {
  console.log('these are the props of the card component', props)
  return (
    <div>
      <span className="card col-xs-2 thumbnail">
        <div>{props.name}</div>
        <img className="img-rounded thumbnail" src={props.image}></img>
        <div>{props.description}</div>
      </span>
    </div>
  );
};

export default Card;