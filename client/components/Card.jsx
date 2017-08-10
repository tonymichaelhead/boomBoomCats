import React from 'react'

const Card = (props) => {
  // console.log('these are the props of the card component', props)
  return (
    <div className={`card ${props.name} col-xs-1 thumbnail ${props.isPlayerTurn ? 'playerActive' : ''} `}
      onClick={()=>{
        console.log('click registered')
        if(props.isPlayerTurn){
          console.log('its my turn')
          props.handleCardClick(props.name, props.index)
        }
      }}
    >
        <div className="card-title text-center">{props.name}</div>
        <img className="img-rounded card-image" src={props.image}></img>
        <div className="card-description text-center">{props.description}</div>
    </div>
  );
};

export default Card;