import React, { Component } from 'react'
import { VisuallyHidden } from './Utilities'

export default class FormBusiness extends Component {
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <form name="businessform" className="Form" netlify>
        <div className="Form__block">
          <VisuallyHidden>
            <label htmlFor="companyName">Name of company</label>
          </VisuallyHidden>
          <input
            className="Form__input"
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Name of company"
          />
        </div>
        <div className="Form__block">
          <VisuallyHidden>
            <label htmlFor="email">Email</label>
          </VisuallyHidden>
          <input
            className="Form__input"
            type="text"
            id="email"
            name="email"
            placeholder="e-mail"
          />
        </div>
        <div className="Form__block">
          <VisuallyHidden>
            <label htmlFor="desc">Short description of what you seek:</label>
          </VisuallyHidden>
          <textarea
            className="Form__textarea"
            type="text"
            id="desc"
            name="desc"
            placeholder="Short description of what you seek:"
          />
        </div>
        <button className="button" onClick={this.handleSubmit}>
          Send
        </button>
      </form>
    )
  }
}
