import React from 'react'
import withToggle from '../HOCs/withToggle'

function OnOffButton(props) {
  return (
    <button onClick={props.toggle.handleChange}>
      {props.toggle.value ? 'ON' : 'OFF'}
    </button>
  )
}

export default withToggle(OnOffButton)