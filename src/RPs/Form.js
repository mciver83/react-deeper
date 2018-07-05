import React, { Component } from 'react'

class Form extends Component {
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSumbit = (e) => {
    e.preventDefault()
    console.log('the form info is: ', this.state)
  }

  render() {
    return (
      this.props.render({
        handleChange: this.handleChange,
        handleSumbit: this.handleSumbit,
        ...this.props
      })
    )
  }
}

export default Form

