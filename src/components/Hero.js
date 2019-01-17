import React, { Component } from 'react'

import { Illustration } from './Utilities'

export default class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <Illustration className="Hero__illustration" name="dog" />
        <h2 className="Hero__title">Mano pizza</h2>
        <p className="Hero__tagline">
          Pedersgt 8, Stavanger <br />
          Åpent mandag-søndag 10-22
        </p>
      </div>
    )
  }
}
