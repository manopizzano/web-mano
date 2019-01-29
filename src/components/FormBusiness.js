import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { VisuallyHidden } from './Utilities'

export default class FormBusiness extends Component {
  state = {
    companyName: '',
    email: '',
    desc: '',
    companyNameError: '',
    gdpr: false,
    gdprError: '',
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
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCheckboxChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }
  validateInputs = () => {
    const { companyName, email, desc, gdpr } = this.state
    let canSubmit = false

    if (companyName.length > 1) {
      canSubmit = true
      this.setState({ companyNameError: null })
    } else {
      canSubmit = false
      this.setState({ companyNameError: 'Selskapet mangler navn' })
    }

    var re = /\S+@\S+\.\S+/
    if (re.test(email)) {
      canSubmit = true
      this.setState({ emailError: null })
    } else {
      canSubmit = false
      this.setState({ emailError: 'Epost er ikke gyldig' })
    }

    if (desc.length > 1) {
      canSubmit = true
      this.setState({ descError: null })
    } else {
      canSubmit = false
      this.setState({ descError: 'Det mangler en beskrivelse' })
    }

    if (gdpr) {
      canSubmit = true
      this.setState({ gdprError: null })
    } else {
      canSubmit = false
      this.setState({ gdprError: 'Du må huke av over for å sende skjema' })
    }

    return canSubmit
  }
  handleSubmit = e => {
    e.preventDefault()
    const canSubmit = this.validateInputs()
    console.log(canSubmit)

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
      gdpr,
      companyNameError,
      emailError,
      descError,
      gdprError,
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
                  <label htmlFor="companyName">Navn på selskapet</label>
                </VisuallyHidden>
                <input
                  className={cc({
                    Form__input: true,
                    'Form__input--error': companyNameError
                  })}
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Navn på selskapet"
                  value={companyName}
                  onChange={this.handleChange}
                />
                {companyNameError && (
                  <p className="Form__message">{companyNameError}</p>
                )}
              </div>
              <div className="Form__block">
                <VisuallyHidden>
                  <label htmlFor="email">Epost</label>
                </VisuallyHidden>
                <input
                  className={cc({
                    Form__input: true,
                    'Form__input--error': emailError
                  })}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Epost"
                  value={email}
                  onChange={this.handleChange}
                />
                {emailError && <p className="Form__message">{emailError}</p>}
              </div>
              <div className="Form__block">
                <VisuallyHidden>
                  <label htmlFor="desc">
                    Kort beskrivelse av det du ønsker
                  </label>
                </VisuallyHidden>
                <textarea
                  className={cc({
                    Form__textarea: true,
                    'Form__textarea--error': descError
                  })}
                  type="text"
                  id="desc"
                  name="desc"
                  placeholder="Kort beskrivelse av det du ønsker"
                  value={desc}
                  onChange={this.handleChange}
                />
                {descError && <p className="Form__message">{descError}</p>}
              </div>
              <div className="Form__block">
                <label className="Form__label">
                  <input
                    className={cc({
                      Form__checkbox: true,
                      'Form__input--error': descError
                    })}
                    name="gdpr"
                    type="checkbox"
                    value={gdpr}
                    onChange={this.handleCheckboxChange}
                  />
                  Jeg godkjenner at Mano Pizza lagrer min informasjon.
                </label>
                {gdprError && <p className="Form__message">{gdprError}</p>}
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
