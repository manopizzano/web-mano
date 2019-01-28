import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from './Utilities'

export default class Header extends Component {
  render() {
    return (
      <Consumer>
        {({ actions }) => (
          <div className="Header" id="header">
            <Link to="/" className="Header__logo" onClick={actions.closeMenu}>
              MANO
            </Link>
          </div>
        )}
      </Consumer>
    )
  }
}
