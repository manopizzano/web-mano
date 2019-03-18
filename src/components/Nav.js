import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import cc from 'classcat'

// import { routes } from '../App'

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
                {/* <Link
                  className="Nav__col Nav__col--order"
                  to={routes.order.path}
                  onClick={actions.closeMenu}
                >
                  {routes.order.name}
                </Link> */}
                <a
                  href="https://webshop.weorder.com/?restaurant=21908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Nav__col Nav__col--order"
                >
                  Bestill
                </a>
                <button
                  className="Nav__col Nav__col--menu"
                  onClick={actions.toggleMenu}
                >
                  {state.showMenu ? 'Lukk' : 'Meny'}
                </button>
              </div>
            </nav>
          )}
        </Consumer>
      </Portal>
    )
  }
}
