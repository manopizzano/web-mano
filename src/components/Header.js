import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import cc from 'classcat'

import { Consumer } from './Utilities'

class Header extends Component {
  render() {
    const currentPath = this.props.location.pathname
    return (
      <Consumer>
        {({ actions }) => (
          <div
            className={cc({
              Header: true,
              'Header--hidden': currentPath === '/bestill'
            })}
            id="header"
          >
            <Link to="/" className="Header__logo" onClick={actions.closeMenu}>
              MANO
            </Link>
          </div>
        )}
      </Consumer>
    )
  }
}

export default withRouter(Header)
