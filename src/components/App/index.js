import React from 'react'

import Header from '../Header'
import AddBlabber from '../AddBlabber'
import BlabberList from '../BlabberList'

import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blabbers: [],
    }
  }

  componentDidMount() {
    fetch('http://api.ortenblabber.com/blabbers')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({ blabbers: json })
      })
  }

  render() {
    return(
      <div>
        <Header />

        <AddBlabber />

        <BlabberList blabbers={this.state.blabbers} />
      </div>
    )
  }
}

export default App
