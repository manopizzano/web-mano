import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { VisuallyHidden } from './Utilities'

export default class FormBusiness extends Component {
  state = {
    companyName: '',
    email: '',
    desc: '',
    companyNameError: '',
    emailError: '',
    descError: '',
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

    // if (companyName && email && desc) {
    //   this.setState({
    //     canSubmit: true
    //   })
    // }
  }
  validateInputs = () => {
    const { companyName, email, desc } = this.state
    let canSubmit = false

    if (companyName.length > 1) {
      canSubmit = true
    } else {
      canSubmit = false
      this.setState({ companyNameError: 'Selskapet mangler navn' })
    }

    var re = /\S+@\S+\.\S+/
    if (re.test(email)) {
      canSubmit = true
    } else {
      canSubmit = false
      this.setState({ emailError: 'Epost er ikke gyldig' })
    }

    if (desc.length > 1) {
      canSubmit = true
    } else {
      canSubmit = false
      this.setState({ descError: 'Det mangler en beskrivelse' })
    }

    return canSubmit
  }
  handleSubmit = e => {
    e.preventDefault()
    const { canSubmit } = this.validateInputs()

    if (canSubmit) {
      const data = {
        companyName: this.state.companyName,
        email: this.state.email,
        desc: this.state.desc
      }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'Bedriftsskjema', ...data })
      })
        .then(response => {
          console.log(response)
          this.setState({
            success: true,
            submitted: true
          })
        })
        .catch(error => {
          // console.log(error)
          console.log(error)
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
      companyNameError,
      emailError,
      descError,
      canSubmit,
      success,
      error,
      submitted
    } = this.state
    return (
      <div>
        <form
          name="businessform"
          className="Form"
          data-netlify="true"
          onSubmit={this.handleSubmit}
          action="/"
          method="post"
          netlify="true"
        >
          {!submitted && (
            <Fragment>
              <div className="Form__block">
                <VisuallyHidden>
                  <label htmlFor="companyName">Name of company</label>
                </VisuallyHidden>
                <input
                  className={cc({
                    Form__input: true,
                    'Form__input--error': companyNameError
                  })}
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Name of company"
                  value={companyName}
                  onChange={this.handleChange}
                />
                {companyNameError && (
                  <p className="Form__message">{companyNameError}</p>
                )}
              </div>
              <div className="Form__block">
                <VisuallyHidden>
                  <label htmlFor="email">Email</label>
                </VisuallyHidden>
                <input
                  className={cc({
                    Form__input: true,
                    'Form__input--error': emailError
                  })}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e-mail"
                  value={email}
                  onChange={this.handleChange}
                />
                {emailError && <p className="Form__message">{emailError}</p>}
              </div>
              <div className="Form__block">
                <VisuallyHidden>
                  <label htmlFor="desc">
                    Short description of what you seek:
                  </label>
                </VisuallyHidden>
                <textarea
                  className={cc({
                    Form__textarea: true,
                    'Form__textarea--error': emailError
                  })}
                  type="text"
                  id="desc"
                  name="desc"
                  placeholder="Short description of what you seek:"
                  value={desc}
                  onChange={this.handleChange}
                />
                {descError && <p className="Form__message">{descError}</p>}
              </div>
              <button
                className={cc({
                  button: true
                  // 'button--disabled': !canSubmit
                })}
                onClick={this.handleSubmit}
              >
                Send
              </button>
              {error}
            </Fragment>
          )}
          {submitted && success && (
            <p>
              Takk for din hendvendelse. Vi kommer tilbake til deg ved første
              anledning
            </p>
          )}
          {submitted && error && (
            <p>Beklager noe gikk feil. Vennligst prøv igjen</p>
          )}
        </form>
      </div>
    )
  }
}
