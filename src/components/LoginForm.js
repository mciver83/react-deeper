import React from 'react'
import withForm from '../HOCs/withForm'

function LoginForm(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <input name='email' type="text" placeholder='email' onChange={props.handleChange}/>
        <input name='password' type="text" placeholder='password' onChange={props.handleChange}/>
        <button type="submit" onClick={props.handleSumbit}>submit</button>
      </div>
    </div>
  )
}

export default withForm(LoginForm);