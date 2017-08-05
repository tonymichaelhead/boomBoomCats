import React from 'react'

export default class Chat extends React.Component {

  constructor() {
    super()
  }

  render() {

    return (

      <div>

        <ul id='messages'></ul>
        
        <form action=''>
          <input id='m' autoComplete='off' />
          <button> Send </button>
        </form>

      </div>

    )
  }

}