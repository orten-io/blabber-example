import React from 'react'

import Blabber from '../Blabber'

import './style.css'

const BlabberList = (props) => {
  return (
    <ul className="blabber-list">
      {props.blabbers.map(blabber => {
        return (
          <li key={blabber.id}><Blabber text={blabber.text} votes={blabber.votes} /></li>
        )
      })}
    </ul>
  )
}

export default BlabberList
