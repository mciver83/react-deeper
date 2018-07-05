import React, { Component } from 'react'
import withForm from '../HOCs/withForm'

class RegistationForm extends Component {
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <div>
          <input name='name' type="text" placeholder='name' onChange={this.props.handleChange}/>
          <input name='phone' type="text" placeholder='phone' onChange={this.props.handleChange}/>
          <input name='email' type="text" placeholder='email' onChange={this.props.handleChange}/>
          <input type="text" placeholder='password' onChange={this.props.handleChange}/>
          <input type="text" placeholder='confirm password' onChange={this.props.handleChange}/>
          <button type="submit" onClick={this.props.handleSumbit}>submit</button>
        </div>
      </div>
    )
  }
}

export default withForm(RegistationForm);