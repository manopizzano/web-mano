import React, { Component } from 'react'
import Helmet from 'react-helmet'

class SEO extends Component {
  render() {
    const title = 'MANO – PIZZA AL METRO'
    const description = 'Åpner snart i Stavanger!'
    const cannonical = 'https://mano.pizza'
    const image = `${cannonical}/assets/images/seo.png`
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
