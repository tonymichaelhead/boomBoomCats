import React from 'react'
import Hand from './Hand.jsx'

export default class Player extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      whee: 'test'
    }
  }


  render() {
    return (
      <div>
        Sup I am PLAYER component
        <Hand />
      </div>
    )
  }
}