import React, { Component } from 'react'

export default class Allergy extends Component {
  render() {
    return (
      <div className="Allergy">
        <div className="Allergy__content">
          <h3 className="Allergy__title">Allergener</h3>
          <p>
            (G) Gluten (M) Melk (N) Nøtter (E) Egg (F) Fisk (P) Peanøtt (S)
            Sulfitter
          </p>
        </div>
      </div>
    )
  }
}
