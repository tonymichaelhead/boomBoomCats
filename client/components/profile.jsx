import React, { Component } from 'react';

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
      </div>
    )
  }
}

export default Profile;