import React, { Component } from 'react'
import ScrollToTop from './ScrollToTop'
import { SEO } from '.'

export default class PageWrapper extends Component {
  render() {
    const { seo } = this.props
    return (
      <main>
        <ScrollToTop />
        <SEO content={seo} />
        {this.props.children}
      </main>
    )
  }
}
