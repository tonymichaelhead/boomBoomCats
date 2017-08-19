import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList.jsx';
import axios from 'axios';

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.location.pathname.slice(16),
      username: window.location.pathname.slice(16),
      picture: '',
      wins: 9000,
      losses: 0
    }
    this.displayUserInfo = this.displayUserInfo.bind(this);

  }

  displayUserInfo() {
    let userProfilePath = `/api/publicprofiles/${this.state.user}`
    axios.get(userProfilePath)
      .then(result => {
        console.log('Profile info: ', result);
        this.setState({ 
          username: result.data[0].name,
          picture: result.data[0].picture,
          wins: result.data[0].wins,
          losses: result.data[0].losses
        })
      })
  }

  componentDidMount() {
    console.log('Public Profile mounted!')
    //console.log('Public profile props: ', this.props.user)

    //Send GET to the server to query DB and pull back user info
    this.displayUserInfo();
  }

  //TODO: Create backlink to User Profile


  render() {
    
    console.log("Page path is " + window.location.pathname.slice(16))
    console.log(this.state);
    return (
      <div className="profile">
        <div>
          <h1>{this.state.username}'s Profile</h1>
        </div>

        <div>
          <img class="profilepicture" src={this.state.picture} alt=""></img>
        </div>



        <div>
          {/* <h2>{this.props.user}</h2><br/> */}
          <p>Wins: {this.state.wins}</p> <p> Losses: {this.state.losses}</p>


        </div>

        <div>
          {/* <FriendsList friends={[{ username: 'Doyle', profilePicUrl: 'https://someshit.com'}, { username: 'K-Nips', profilePicUrl: 'https://ahhhhyeaah.com'}]}/> */}
        </div>

        <div >
          <Link to='/'  ><button className="lobbybutton"> Back to Lobby </button></Link>
          <Link to='/profile'  ><button className="lobbybutton"> Back to Profile </button></Link>
        </div>
      </div>
    )
  }
}

export default PublicProfile;