import React from 'react'

export default class Chat extends React.Component {

  constructor() {
    super()
  }

  render() {

    return (

      <div id='chatWindow'>

        <ul id='messages'></ul>
        
        <form action='' id='chatForm'>
          <input id='m' autoComplete='off' />
          <button id='formButton'> Send </button>
        </form>

      </div>

    )
  }

}