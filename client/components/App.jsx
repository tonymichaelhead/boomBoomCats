import React from 'react'
import Room from './Room.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <div>

        <Link to='/room'>
          <h1>Click here to join game</h1>
        </Link>

      </div>

    )
  }
}