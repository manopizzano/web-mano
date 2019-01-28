import React, { Component } from 'react'
import { Html } from './Utilities'

export default class FoodItem extends Component {
  render() {
    const { item } = this.props
    return (
      <li className="Food__item">
        <header className="Food__item-header">
          {item.name && <h4 className="Food__item-title">{item.name}</h4>}
          {item.price && <p className="Food__item-price">{item.dPrice}</p>}
        </header>
        {item.desc && (
          <p className="Food__item-desc">
            <Html content={item.desc} />
          </p>
        )}
      </li>
    )
  }
}
