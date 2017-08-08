import React from 'react'
import io from 'socket.io-client'

export default class Chat extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.socket.on('chat message', function(msg, user) {
      this.setState({
        messages: [...this.state.messages, user + ": " + msg]
      })
      let chatWindow = document.getElementById('chatWindow')
      chatWindow.scrollTop = chatWindow.scrollHeight
    }.bind(this))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.socket.emit('chat message', this.refs.message.value)
    this.refs.message.value = ''
    return false
  }

  render() {

    return (
      <div>
        <div className='row'>
          <div className='col-sm-12'>
            <div id='chatWindow'>

                <ul id='messages'>

                  {this.state.messages.map((message, i) => 
                    (<li>
                      {message}  
                    </li>)
                  )}

                </ul>
              </div>
            </div>
          </div>
        
        <div className='row'>
          <div className='col-sm-12'>
            <form action='' id='chatForm' onSubmit={this.handleSubmit}>
              <input autoComplete='off' ref='message' placeholder='Enter message...' />
            </form>
          </div>
        </div>
      </div>
    )
  }

}