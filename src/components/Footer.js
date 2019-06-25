import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Social from './Social'
import Download from './Download'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <div className="Footer__col">
          <Download />
        </div>
        <div className="Footer__col">
          <Social className="Footer__social" />
        </div>
        <div className="Footer__col">
          <Link to="/personvern">Personvern</Link>
        </div>
      </div>
    )
  }
}
