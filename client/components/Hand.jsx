import React from 'react'

export default class Hand extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      whee: 'test'
    }
  }


  render() {
    return (
      <div>
        Sup I am HAND component
      </div>
    )
  }
}