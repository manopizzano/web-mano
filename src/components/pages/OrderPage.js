import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PageWrapper from '../Utilities/PageWrapper'
import { VisuallyHidden } from '../Utilities'

export default class OrderPage extends Component {
  componentDidMount = () => {}
  render() {
    return (
      <PageWrapper
        seo={{
          title: 'Bestill – MANO – PIZZA AL METRO',
          description: 'Bestill take away i vår online webshop!',
          cannonical: 'https://mano.pizza/order'
        }}
      >
        <VisuallyHidden>
          <h1>Bestill take away pizza</h1>
        </VisuallyHidden>
        <div className="WeOrder">
          <Link to="/" className="WeOrder__button">
            &larr; Home
          </Link>
          <iframe
            title="WeOrder"
            className="WeOrder__frame"
            src="https://webshop.weorder.com/?restaurant=21908"
            scrolling="yes"
            frameBorder="0"
          />
        </div>
      </PageWrapper>
    )
  }
}
