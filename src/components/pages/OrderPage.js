import React, { Component } from 'react'

import PageWrapper from '../Utilities/PageWrapper'

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
        <div className="WeOrder">
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
