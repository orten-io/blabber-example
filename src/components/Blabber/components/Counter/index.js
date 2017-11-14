import React from 'react'

const Counter = (props) => (
  <div>
    <button>+</button>
    {props.votes}
    <button>-</button>
  </div>
)

export default Counter
