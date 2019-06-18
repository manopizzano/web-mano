import React, { Component } from 'react'

// const price = 125
const increment = 0.25

export default class FoodRuler extends Component {
  render() {
    return (
      <div className="FoodRuler">
        <ul className="FoodRuler__ruler">
          {new Array(4).fill('x').map((x, i) => (
            <li className="FoodRuler__item" key={`foodruler-item-${i}`}>
              <h3 className="FoodRuler__desc">{increment * (i + 1)}M</h3>
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
