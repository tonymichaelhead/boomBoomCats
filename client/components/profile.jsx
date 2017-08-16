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
        hello, look at me
      </div>
    )
  }
}

export default Profile;