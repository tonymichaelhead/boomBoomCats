import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('mounted')
  }



  render() {
    console.log(this.state)
    console.log('props:', this.props)
    return (
      <div class="profile">
        <div>
          <h1>Your Profile</h1>
        </div>

        <div>
          <img class="profilepicture" src={this.props.picture} alt=""></img>
        </div>



        <div>
          <h2>{this.props.user}</h2><br/>
          <p>Wins:</p> <p> Losses: </p>


        </div>


        <div >
          <Link to='/'  ><button class="lobbybutton"> Back to Lobby </button></Link>
        </div>
      </div>
    )
  }
}

export default Profile;