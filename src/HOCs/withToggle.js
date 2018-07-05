import React, { Component } from 'react'

export default function(WrappedComponent) {
  return class extends Component {
    state = {
      toggle: false
    }

    onClick = () => {
      this.setState({
        toggle: !this.state.toggle
      })
    }

    render() {
      const toggle = {
        value: this.state.toggle,
        handleChange: this.onClick
      }
      return <WrappedComponent
                toggle={toggle}
                {...this.props}/>
    }
  }
}