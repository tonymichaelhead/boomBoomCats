import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
  
  }

  componentDidMount() {
    console.log('mounted')
  }
  


  render() {
    console.log(this.state)
    console.log('props:', this.props)
    return (
      <div>
        <div>
          <h2>{this.props.user}</h2>
        </div>

        <div>
          <img src={this.props.picture} alt=""></img>
        </div>

        <div>
        <Link to = '/'  ><button > Back to Lobby </button></Link>
        </div>
      </div>
    )
  }
}

export default Profile;