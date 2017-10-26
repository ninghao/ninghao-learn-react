import React, { Component } from 'react'

class HelloForm extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
    console.log('输入：', event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('提交：', this.state.text)
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text"
          value={ this.state.text }
          onChange={ this.handleChange } />
      </form>
    )
  }
}

class App extends Component {
  state = {
  }

  render () {
    return (
      <div>
        <HelloForm />
      </div>
    )
  }
}

export default App
