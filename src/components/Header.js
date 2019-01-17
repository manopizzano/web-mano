import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/" className="Header__logo">
          MANO
        </Link>
      </div>
    )
  }
}
