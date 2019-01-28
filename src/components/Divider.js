import React, { Component, createRef } from 'react'
import { Illustration } from './Utilities'

export default class Divider extends Component {
  container = createRef()
  componentDidMount = () => {
    setInterval(() => {
      if (this.container.current) {
        console.log(this.container.current.getBoundingClientRect().height)
      }
    }, 200)
  }

  render() {
    const { illustration } = this.props
    return (
      <div className="Divider" ref={this.container}>
        <Illustration name={illustration} className="Divider__image" />
      </div>
    )
  }
}
