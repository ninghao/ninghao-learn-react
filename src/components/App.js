import React, { Component } from 'react'

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
      <h2 onClick={ this.changeHeader }>{ this.state.header }</h2>
    )
  }
}

export default App
