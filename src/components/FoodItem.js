import React, { Component } from 'react'

export default class FoodItem extends Component {
  render() {
    const { item } = this.props
    return (
      <li className="Food__item">
        <header className="Food__item-header">
          <h4 className="Food__item-title">{item.name}</h4>
          <p className="Food__item-price">{item.dPrice}</p>
        </header>
        <p className="Food__item-desc">{item.desc}</p>
      </li>
    )
  }
}
