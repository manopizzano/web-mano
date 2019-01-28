import React, { Component } from 'react'

const price = 140
const increment = 0.25

export default class FoodRuler extends Component {
  render() {
    return (
      <div className="FoodRuler">
        <ul className="FoodRuler__ruler">
          {new Array(4).fill('x').map((x, i) => (
            <li className="FoodRuler__item" key={`foodruler-item-${i}`}>
              <h3 className="FoodRuler__title">{price * (i + 1)}</h3>
              <p className="FoodRuler__desc">{increment * (i + 1)}M</p>
            </li>
          ))}
        </ul>
        <p className="FoodRuler__helper">
          EN VANLIG (STOR) 40CM RUND PIZZA TILSVARER HOS OSS EN 0,5M PIZZA
        </p>
      </div>
    )
  }
}
