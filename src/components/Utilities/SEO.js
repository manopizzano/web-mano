import React, { Component } from 'react'
import Helmet from 'react-helmet'

class SEO extends Component {
  render() {
    const title = this.props.content
      ? this.props.content.title
      : 'MANO – PIZZA AL METRO'
    const description = this.props.content
      ? this.props.content.description
      : `Mano betyr «hånd» og pizza er håndverk. Derfor lager vi den for hånd
         på tradisjonelt napolitansk vis. Deigen hviler i minst ett døgn og
         strekkes ut for hånd. Kombinert med vår egen pizzasaus av
         Toscana-tomater,gir den lette og luftige deigen det vi synes er den
         perfekte pizza.`
    const cannonical = this.props.content
      ? this.props.content.cannonical
      : 'https://mano.pizza'
    const image = `https://mano.pizza/assets/images/seo.png`
    const meta = [
      // Google / Search engines in general
      { name: 'description', content: description },
      { itemprop: 'name', content: title },
      { itemprop: 'description', content: description },
      { itemprop: 'image', content: image },

      // Facebook
      { property: 'og:url', content: cannonical },
      { property: 'og:title', content: title },
      {
        property: 'og:description',
        content: description
      },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: 1080 },
      { property: 'og:image:height', content: 1080 },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      { name: 'twitter:image', content: image }
    ]
    return (
      <>
        <Helmet title={title} meta={meta} />
        <Helmet>
          <link rel="cannonical" href={cannonical} />
          {window.location.host.includes('netlify') && (
            <meta name="robots" content="noindex, nofollow" />
          )}
        </Helmet>
      </>
    )
  }
}

export default SEO
