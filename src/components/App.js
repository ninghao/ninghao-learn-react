import React, { Component } from 'react'

class App extends Component {
  state = {
    header: 'ninghao.net'
  }

  render () {
    return (
      <h2>{ this.state.header }</h2>
    )
  }
}

export default App
