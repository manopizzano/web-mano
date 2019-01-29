import React, { Component } from 'react'
import PageWrapper from '../Utilities/PageWrapper'

import content from '../../utils/content'

export default class PrivacyPage extends Component {
  render() {
    const { privacy } = content
    return (
      <PageWrapper>
        <article className="Article">
          <header className="Article__header">
            <h1 className="Article__title">{privacy.title}</h1>
            {privacy.desc && privacy.desc}
          </header>
          <div className="Article__content">{privacy.content}</div>
        </article>
      </PageWrapper>
    )
  }
}
