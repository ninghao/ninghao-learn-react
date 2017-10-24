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
    message: 'SHOW MESSAGE!',
    show: false
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
    return (
      <div>
        <Header changeHeader={ this.changeHeader } header={ this.state.header } />
        <button onClick={ this.handleClick }>
          { this.state.show ? 'Hide': 'Show' }
        </button>
        { this.state.show &&
          <Message message={ this.state.message } />
        }
      </div>
    )
  }
}

export default App
