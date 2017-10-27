import React, { Component } from 'react'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class HelloForm extends Component {
  constructor(props) {
    super(props)

    this.log = debounce((event) => {
      console.log(event.target.value)
    }, 1000)

  }

  state = {
    text: ''
  }

  handleChange = (event) => {
    event.persist()

    this.setState({
      text: event.target.value
    })

    this.log(event)
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
