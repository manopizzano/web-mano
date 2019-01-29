import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Social from './Social'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__col">
          <Link to="/personvern">Personvern</Link>
        </div>
        <div className="Footer__col">
          <Social className="Footer__social" />
        </div>
        <div className="Footer__col">
          <p>
            Last ned appen <br />
            <a
              href="https://itunes.apple.com/us/app/mano-pizza/id1449962930?mt=8&ign-mpt=uo%3D2"
              target="_blank"
              rel="noopener noreferrer"
            >
              IOS
            </a>{' '}
            &nbsp;&amp;&nbsp;
            <a
              href="https://play.google.com/store/apps/details?id=com.snapporder.mano"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andriod
            </a>
          </p>
        </div>
      </div>
    )
  }
}
