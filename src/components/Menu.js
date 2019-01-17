import React, { Component } from 'react'

import content from '../utils/content'

import Header from './Header'
import { Consumer } from './Utilities'

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Header />
        <div className="Menu__content">
          <Consumer>
            {({ actions }) =>
              content.map(item => (
                <a
                  className="Menu__item"
                  href={`/#${decodeURI(item.title)}`}
                  onClick={actions.toggleMenu}
                  key={`menu-item-${item.title}`}
                >
                  {item.title}
                </a>
              ))
            }
          </Consumer>
        </div>
      </div>
    )
  }
}
