import React from 'react'

const Card = (props) => {
  console.log('these are the props of the card component', props)
  return (
    <div className={"card " + props.name + "  col-xs-2 thumbnail"}>
        <div className="card-title">{props.name}</div>
        <img className="card-image img-rounded thumbnail" src={props.image}></img>
        <div className="card-description">{props.description}</div>
    </div>
  );
};

export default Card;