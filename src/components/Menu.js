import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

import content from '../utils/content'

import Header from './Header'
import { Consumer, ScrollLink } from './Utilities'
import Social from './Social'
import Download from './Download'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Header />
        <nav className="Menu__content">
          <Consumer>
            {({ actions }) =>
              Object.keys(content).map(
                ObjectKey =>
                  content[ObjectKey].showInMenu && (
                    <Fragment key={`menu-item-${content[ObjectKey].title}`}>
                      {this.props.location.pathname !== '/' ? (
                        <Link
                          className="Menu__item"
                          to={`/#${content[ObjectKey].id}`}
                          onClick={actions.toggleMenu}
                        >
                          {content[ObjectKey].title}
                        </Link>
                      ) : (
                        <ScrollLink
                          content={content}
                          ObjectKey={ObjectKey}
                          actions={actions}
                        />
                      )}
                    </Fragment>
                  )
              )
            }
          </Consumer>
          <div className="Menu__item editor">
            <Social className="Menu__social" dark />
            <Download />
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Menu)
