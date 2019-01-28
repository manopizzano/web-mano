import React, { Component, Fragment } from 'react'
import Parser from 'html-react-parser'

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '')

export default class Html extends Component {
  static defaultProps = {
    el: 'span'
  }
  render() {
    let { stripTags, content } = this.props
    console.log(content, typeof content)
    if (stripTags) {
      content = stripHTMLTags(content)
    }
    return <Fragment>{Parser(content)}</Fragment>
  }
}
