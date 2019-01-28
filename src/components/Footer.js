import React, { Component } from 'react'
import { Icon } from './Utilities'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__col">
          <a
            className="Footer__link"
            href="https://www.instagram.com/pizza_mano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="Footer__icon" name="instagram" />
          </a>
          <a
            className="Footer__link"
            href="https://www.facebook.com/Manopizza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="Footer__icon" name="facebook" />
          </a>
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
