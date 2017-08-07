import React from 'react'
import RouteIndex from './RouteIndex.jsx'
//import Auth from '../Auth/Auth.js';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    //trying login start 
    //this.auth = new Auth();
    // auth.login();
    //trying login end
    this.state = {
      meep: 'whooosh'
    }
  }

  render() {
    return(
      <RouteIndex />
    )
  }
}
