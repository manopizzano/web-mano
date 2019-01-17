import React, { Component } from 'react'
import FoodItem from './FoodItem'

export default class FoodCategory extends Component {
  render() {
    const { category } = this.props
    return (
      <div className="Food__category">
        <h3 className="Food__category-title">{category.name}</h3>
        <ul className="Food__category-list">
          {category.categories[0].entries &&
            category.categories[0].entries.map(item => (
              <FoodItem item={item} key={item.id} />
            ))}
        </ul>
      </div>
    )
  }
}
