import React from 'react'
import Form from '../RPs/Form'

export default function LoginFormRP(props) {
  //props = { title: 'another login form' }
  return (
    <Form {...props} render={data => (
      <div>
        <h1>{data.title}</h1>
        <div>
          <input name='email' type="text" placeholder='email' onChange={data.handleChange}/>
          <input name='password' type="text" placeholder='password' onChange={data.handleChange}/>
          <button type="submit" onClick={data.handleSumbit}>submit</button>
        </div>
      </div>
    )}/>
  )
}