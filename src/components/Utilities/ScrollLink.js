import React, { Component } from 'react'

import { Link } from 'react-scroll'

export default class ScrollLink extends Component {
  render() {
    const { content, actions, ObjectKey } = this.props
    return (
      <Link
        className="Menu__item"
        activeClass="Menu__item--is-active"
        spy
        smooth
        offset={-50}
        to={`${content[ObjectKey].id}`}
        onClick={actions.toggleMenu}
      >
        {content[ObjectKey].title}
      </Link>
    )
  }
}
