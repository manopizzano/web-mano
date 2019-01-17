import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cc from 'classcat'

import { Consumer, Portal } from './Utilities'
import Menu from './Menu'

export default class Nav extends Component {
  render() {
    return (
      <Portal>
        <Consumer>
          {({ state, actions }) => (
            <nav
              className={cc({
                Nav: true,
                'Nav--is-dark': state.showMenu
              })}
            >
              {state.showMenu ? <Menu /> : null}
              <div className="Nav__wrapper">
                <Link
                  className="Nav__col Nav__col--order"
                  to="/order"
                  onClick={actions.closeMenu}
                >
                  Order
                </Link>
                <button
                  className="Nav__col Nav__col--menu"
                  onClick={actions.toggleMenu}
                >
                  {state.showMenu ? 'Lukk' : 'Menu'}
                </button>
              </div>
            </nav>
          )}
        </Consumer>
      </Portal>
    )
  }
}
