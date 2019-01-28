import React, { Component } from 'react'
import PageWrapper from '../Utilities/PageWrapper'

export default class OrderPage extends Component {
  render() {
    return (
      <PageWrapper
        seo={{
          title: 'Bestill – MANO – PIZZA AL METRO',
          description: 'Bestill take away i vår online webshop!',
          cannonical: 'https://mano.pizza/order'
        }}
      >
        <iframe
          title="WeOrder"
          className="WeOrder"
          src="https://webshop.weorder.com/?restaurant=21908"
          scrolling="yes"
          frameBorder="0"
        />
      </PageWrapper>
    )
  }
}
