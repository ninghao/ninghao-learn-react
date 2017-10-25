import React, { Component } from 'react'

class Header extends Component {
  state = {
    emoji: '👪'
  }

  render () {
    return (
      <h2 onClick={ (event) => this.props.changeHeader(event, this.state.emoji) }>
        { this.props.header }
      </h2>
    )
  }
}

const Message = (props) => {
  return <div>{ props.message }</div>
}

class App extends Component {
  state = {
    header: 'ninghao.net',
    show: false,
    messages: [
      { id: 0, text: 'hello ~'},
      { id: 1, text: 'hola ~'},
      { id: 3, text: '您好 ~'}
    ]
  }

  changeHeader = (event, emoji) => {
    this.setState({
      header: emoji
    })
    console.log(event, emoji)
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    const { messages } = this.state
    const messageItems = messages.map(message => {
      return <Message key={ message.id } message={ message.text } />
    })

    console.log(messageItems)

    return (
      <div>
        <Header changeHeader={ this.changeHeader } header={ this.state.header } />
        <button onClick={ this.handleClick }>
          { this.state.show ? 'Hide': 'Show' }
        </button>
        { this.state.show &&
          messageItems
        }
      </div>
    )
  }
}

export default App
