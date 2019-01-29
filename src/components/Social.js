import React, { Component } from 'react'
import cc from 'classcat'

import { Icon } from './Utilities'

export default class Social extends Component {
  render() {
    const { className, dark } = this.props
    return (
      <div
        className={cc({
          Social: true,
          [className]: className
        })}
      >
        <a
          className="Social__link"
          href="https://www.instagram.com/pizza_mano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            className="Social__icon"
            name="instagram"
            color={dark ? '#facad5' : 'black'}
          />
        </a>
        <a
          className="Social__link"
          href="https://www.facebook.com/Manopizza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            className="Social__icon"
            name="facebook"
            color={dark ? '#facad5' : 'black'}
          />
        </a>
      </div>
    )
  }
}