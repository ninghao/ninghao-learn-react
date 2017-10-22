import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <h2 onClick={ () => this.props.changeHeader() } >
        { this.props.header }
      </h2>
    )
  }
}

class App extends Component {
  state = {
    header: 'ninghao.net'
  }

  changeHeader = () => {
    this.setState({
      header: '😄'
    })
  }

  render () {
    return (
      <Header changeHeader={ this.changeHeader } header={ this.state.header } />
    )
  }
}

export default App
