import React, { Fragment } from 'react'

import { Image } from '../components/Utilities'
import FormBusiness from '../components/FormBusiness'
import Food from '../components/Food'
import FoodRuler from '../components/FoodRuler'
import OpeningHours from '../components/OpeningHours'

const data = {
  address: 'Pedersgt. 8',
  city: 'Stavanger',
  zip: '4013',
  phone: '93010201',
  email: 'mano@mano.pizza',
  coord: {
    lat: '58.9702371',
    lng: '5.7400252'
  }
}

export default {
  hero: {
    id: 'hero',
    showInMenu: false,
    desc: (
      <h3>
        {data.address}, {data.city}
        <br />
        <OpeningHours />
      </h3>
    )
  },
  menu: {
    id: 'menu',
    desc: (
      <Fragment>
        <p>
          Mano betyr «hånd» og pizza er håndverk. Derfor lager vi den for hånd
          på tradisjonelt napolitansk vis. Deigen hviler i minst ett døgn og
          strekkes ut for hånd. Kombinert med vår egen pizzasaus av
          Toscana-tomater,gir den lette og luftige deigen det vi synes er den
          perfekte pizza.
        </p>
        <h3>PIZZA PÅ METEREN</h3>
        <p>
          Lag din egen meter med pizza ved å kombinere våre ulike pizzaer
          akkurat slik du selv vil.{' '}
        </p>
      </Fragment>
    ),
    content: (
      <Fragment>
        <FoodRuler />
        <Food />
      </Fragment>
    ),
    showInMenu: true,
    title: 'Meny'
  },
  business: {
    id: 'business',
    showInMenu: true,
    title: 'Bedrift',
    desc: (
      <Fragment>
        <p>
          Vil du bestille pizza i metervis til din bedrift? Send oss en melding
          for å opprette bedriftsavtale.
        </p>
        <p>
          Som bedriftskunde slipper dere oppgjør ved levering og vi sender dere
          istedet faktura på e-post eller EHF.
        </p>
      </Fragment>
    ),
    content: <FormBusiness />
  },
  about: {
    id: 'about',
    showInMenu: true,
    title: 'Om oss',
    desc: (
      <p>
        Mano betyr «hånd» og pizza er håndverk. Derfor lager vi den for hånd på
        tradisjonelt napolitansk vis. Deigen hviler i minst ett døgn og strekkes
        ut for hånd. Kombinert med vår egen pizzasaus av Toscana-tomater,gir den
        lette og luftige deigen det vi synes er den perfekte pizza.
      </p>
    ),
    content: (
      <div>
        <Image id="pizzabox" alt="Rosa Mano pizzaesker" />
      </div>
    )
  },
  contact: {
    id: 'contact',
    showInMenu: true,
    title: 'Kontakt',
    desc: (
      <Fragment>
        {/* <p>man-lør: 14:00-23:00</p> */}
        <OpeningHours />
        <p>
          <a href={data.email}>{data.email}</a>
          <br />
          Tlf: <a href={`tel:${data.phone}`}>{data.phone}</a>
        </p>
        <p>
          {data.address} <br /> {data.zip} {data.city}
        </p>
      </Fragment>
    ),
    content: (
      <a
        aria-label="Mano Pizza plassering på google maps"
        href="https://www.google.com/maps/place/Pedersgata+8,+4013+Stavanger/@58.9702371,5.7378365,17z/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          id="map"
          alt={`Kart av Stavanger sentrum med en pin på ${
            data.address
          } hvor Mano Pizza ligger`}
        />
      </a>
    )
  }
}
