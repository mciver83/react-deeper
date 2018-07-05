import React from 'react'
import withLogin from '../HOCs/withLogin'

function SuperPrivate(props) {
  return (
    <div>
      <h1>this is super private stuff</h1>
      <h3>only to be seen if user is logged in</h3>
      <p>{props.data}</p>
    </div>
  )
}

export default  withLogin(SuperPrivate)
