import React from 'react'
import Room from './Room.jsx'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

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
        <Link to='/room'>
          <h1>Click here to join game</h1>
        </Link>
      </div>
    )
  }
}
