import React from 'react'
import ReactDOM from 'react-dom'

import GameLogic from './GameLogic.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      meep: 'whooosh'
    }
  }



  render() {
    return(
      <div>
        This is App component
        <GameLogic />
      </div>
    )
  }
}
