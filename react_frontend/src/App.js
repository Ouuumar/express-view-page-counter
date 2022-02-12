import React, { Component, useState } from 'react'
import { render } from 'react-dom'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    axios.get('http://host.docker.internal:3000', { withCredentials: true }).then(({data}) => { this.setState({ count: data.pageCount }) })
  }

  render() {
    return (
      <div>
        <button onClick={ () => { window.location.reload() } }>
          Refresh
        </button>
        <p>You refreshed the page {this.state.count} times</p>
      </div>
    )
  }
}

export default App 