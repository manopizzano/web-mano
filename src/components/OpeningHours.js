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
        Mandag - onsdag 14-21
        <br />
        Torsdag - fredag 11-22
        <br />
        Lørdag - søndag 12-22
      </p>
    )
  }
}
