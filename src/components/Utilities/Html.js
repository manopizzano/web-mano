import React, { Component, Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'

export default class Html extends Component {
  render() {
    return <Fragment>{ReactHtmlParser(this.props.content)}</Fragment>
  }
}
