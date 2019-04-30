import React, { Component } from 'react'

export default class OpeningHours extends Component {
  render() {
    return (
      // <dl className="OpeningHours">
      //   <dt className="OpeningHours__term">Man-tors</dt>
      //   <dd className="OpeningHours__data">14-21</dd>
      //   <dt className="OpeningHours__term">Fredag</dt>
      //   <dd className="OpeningHours__data">14-23</dd>
      //   <dt className="OpeningHours__term">Lørdag</dt>
      //   <dd className="OpeningHours__data">12-23</dd>
      //   <dt className="OpeningHours__term">Søndag</dt>
      //   <dd className="OpeningHours__data">14-22</dd>
      // </dl>
      <p className="OpeningHours">
        Mandag 14-21
        <br />
        Tirsdag 14-21
        <br />
        Onsdag 14-21
        <br />
        Torsdag 11-22
        <br />
        Fredag 11-22
        <br />
        Lørdag 12-22
        <br />
        Søndag 12-22
      </p>
    )
  }
}
