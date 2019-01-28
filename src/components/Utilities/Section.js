import React, { Component } from 'react'
import cc from 'classcat'

export default class Section extends Component {
  render() {
    const { id, title, desc, full } = this.props
    return (
      <section id={id} className={cc({ Section: true, 'Section--full': full })}>
        {title && (
          <header className="Section__header">
            <h2 className="Section__title">{title}</h2>
            {desc && <div className="Section__desc">{desc}</div>}
          </header>
        )}
        <div className="Section__content">{this.props.children}</div>
      </section>
    )
  }
}
