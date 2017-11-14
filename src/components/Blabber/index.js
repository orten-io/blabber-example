import React from 'react'

import Counter from './components/Counter'

const Blabber = (props) => (
  <div>
    <p>{props.text}</p>

    <Counter votes={props.votes} />
  </div>
)

export default Blabber
