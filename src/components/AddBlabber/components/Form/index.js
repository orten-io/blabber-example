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

        <button>Post</button>
      </div>
    )
  }
}

export default Form
