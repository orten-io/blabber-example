import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { text: '' }
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.text}
          placeholder="Type your blabber here..."
          onChange={(event) => { this.setState({ text: event.currentTarget.value }) }}
        />

        <button onClick={() => {
          fetch('https://blabber-api.herokuapp.com/blabbers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: this.state.text })
          })
            .then(response => response.json())
            .then(json => {
              console.log(json)
            })
        }}>Post</button>
      </div>
    )
  }
}

export default Form
