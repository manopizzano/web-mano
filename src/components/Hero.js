import React, { Component } from 'react'

import content from '../utils/content'

import { Illustration, Consumer } from './Utilities'

export default class Hero extends Component {
  render() {
    const { hero } = content
    if (!hero) return null
    return (
      <Consumer>
        {({ state }) => (
          <div className="Hero">
            <Illustration className="Hero__illustration" name="chef2" />
            <div className="Hero__content">
              {hero.title && <h2 className="Hero__title">{hero.title}</h2>}
              {hero.desc && <div className="Hero__tagline">{hero.desc}</div>}
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}
