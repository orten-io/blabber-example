import React from 'react'

import Header from '../Header'
import AddBlabber from '../AddBlabber'
import BlabberList from '../BlabberList'

import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.addBlabber = this.addBlabber.bind(this)

    this.state = {
      blabbers: [],
    }
  }

  componentDidMount() {
    fetch('https://blabber-api.herokuapp.com/blabbers')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({ blabbers: json })
      })
  }

  addBlabber(blabber) {
    this.setState({
      blabbers: [blabber, ...this.state.blabbers]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddBlabber addBlabber={this.addBlabber} />
        <BlabberList blabbers={this.state.blabbers} />
      </div>
    )
  }
}

export default App
