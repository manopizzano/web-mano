import React, { Component } from 'react'

export default class Error extends Component {
  render() {
    return <div className="Error">{this.props.err}</div>
  }
}
