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

class App extends Component {
  state = {
    header: 'ninghao.net'
  }

  changeHeader = (event, emoji) => {
    this.setState({
      header: emoji
    })
    console.log(event, emoji)
  }

  render () {
    return (
      <Header changeHeader={ this.changeHeader } header={ this.state.header } />
    )
  }
}

export default App
