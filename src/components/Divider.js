import React, { Component } from 'react'
import { Illustration } from './Utilities'

export default class Divider extends Component {
  render() {
    const { illustration } = this.props
    return (
      <div className="Divider">
        <Illustration name={illustration} className="Divider__image" />
      </div>
    )
  }
}
