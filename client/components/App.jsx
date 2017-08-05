import React from 'react'
import Chat from './Chat.jsx'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <div>
        <h1>Hello World</h1>

        <Chat />
      </div>

    )
  }
}