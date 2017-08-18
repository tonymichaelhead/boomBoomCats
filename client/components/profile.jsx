import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList.jsx';

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
      <div className="profile">
        <div>
          <h1>Your Profile</h1>
        </div>

        <div className="profilepicture">
          <img  src={this.props.picture} alt=""></img>
        </div>



        <div className="profiledata">
          <h2>{this.props.user}</h2><br/>
          <p>Wins:</p> <p> Losses: </p>


        </div>

        <div>
          <FriendsList friends={[{ username: 'Doyle', profilePicUrl: 'https://someshit.com'}, { username: 'K-Nips', profilePicUrl: 'https://ahhhhyeaah.com'}]}/>
        </div>

        <div >
          <Link to='/'  ><button className="lobbybutton"> Back to Lobby </button></Link>
        </div>
      </div>
    )
  }
}

export default Profile;