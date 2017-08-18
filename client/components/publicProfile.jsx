import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList.jsx';

class publicProfile extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('Public Profile mounted')
  }



  render() {
    
    //console.log('publicProfile props:', this.props)
    return (
      <div className="profile">
        <div>
          <h1>Users Profile</h1>
        </div>

        <div>
          {/* <img class="profilepicture" src={this.props.picture} alt=""></img> */}
        </div>



        <div>
          {/* <h2>{this.props.user}</h2><br/> */}
          <p>Wins:</p> <p> Losses: </p>


        </div>

        <div>
          {/* <FriendsList friends={[{ username: 'Doyle', profilePicUrl: 'https://someshit.com'}, { username: 'K-Nips', profilePicUrl: 'https://ahhhhyeaah.com'}]}/> */}
        </div>

        <div >
          {/* <Link to='/'  ><button class="lobbybutton"> Back to Lobby </button></Link> */}
        </div>
      </div>
    )
  }
}

export default publicProfile;