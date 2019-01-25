import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { VisuallyHidden } from './Utilities'

export default class FormBusiness extends Component {
  state = {
    companyName: '',
    email: '',
    desc: '',
    canSubmit: false,
    success: null,
    error: null,
    submitted: false
  }
  encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  handleChange = e => {
    const { companyName, email, desc } = this.state
    this.setState({
      [e.target.name]: e.target.value
    })

    if (companyName && email && desc) {
      this.setState({
        canSubmit: true
      })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const { canSubmit } = this.state

    if (canSubmit) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'Bedriftsskjema', ...this.state.data })
      })
        .then(response => {
          this.setState({
            success: true,
            submitted: true
          })
        })
        .catch(error => {
          // console.log(error)
          this.setState({
            success: false,
            submitted: true,
            message: 'Noe gikk galt. Vennligst forsøk igjen.'
          })
        })
    }
  }
  resetForm = () => {
    this.setState({
      companyName: '',
      email: '',
      desc: '',
      canSubmit: false,
      submitted: false
    })
  }
  render() {
    const {
      companyName,
      email,
      desc,
      canSubmit,
      success,
      error,
      submitted
    } = this.state
    return (
      <form
        name="businessform"
        className="Form"
        data-netlify="true"
        onSubmit={this.handleSubmit}
        action="/"
        method="post"
      >
        {!submitted && (
          <Fragment>
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
                value={companyName}
                onChange={this.handleChange}
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
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="Form__block">
              <VisuallyHidden>
                <label htmlFor="desc">
                  Short description of what you seek:
                </label>
              </VisuallyHidden>
              <textarea
                className="Form__textarea"
                type="text"
                id="desc"
                name="desc"
                placeholder="Short description of what you seek:"
                value={desc}
                onChange={this.handleChange}
              />
            </div>
            <button
              className={cc({
                button: true,
                'button--disabled': !canSubmit
              })}
              onClick={this.handleSubmit}
            >
              Send
            </button>
          </Fragment>
        )}
        {submitted && success && (
          <p>
            Takk for din hendvendelse. Vi kommer tilbake til deg ved første
            anledning
          </p>
        )}
        <button onClick={this.resetForm}>Reset form</button>
      </form>
    )
  }
}
