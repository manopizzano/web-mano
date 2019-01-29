import React, { Component } from 'react'

export default class Download extends Component {
  render() {
    return (
      <p>
        Last ned appen <br />
        <a
          aria-label="Last ned pizza mano appen på ios"
          href="https://itunes.apple.com/us/app/mano-pizza/id1449962930?mt=8&ign-mpt=uo%3D2"
          target="_blank"
          rel="noopener noreferrer"
        >
          IOS
        </a>{' '}
        &nbsp;&amp;&nbsp;
        <a
          aria-label="Last ned pizza mano appen på google play"
          href="https://play.google.com/store/apps/details?id=com.snapporder.mano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andriod
        </a>
      </p>
    )
  }
}
