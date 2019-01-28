import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { Link } from 'react-scroll'}

import content from '../utils/content'

import Header from './Header'
import { Consumer, ScrollLink } from './Utilities'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Header />
        <div className="Menu__content">
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
            // content.map(item => (
            //   <a
            //     className="Menu__item"
            //     href={`/#${decodeURI(item.title)}`}
            //     onClick={actions.toggleMenu}
            //     key={`menu-item-${item.title}`}
            //   >
            //     {item.title}
            //   </a>
            // ))
            }
          </Consumer>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)
