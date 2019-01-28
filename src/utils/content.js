import React, { Fragment } from 'react'

import { Image } from '../components/Utilities'
import FormBusiness from '../components/FormBusiness'
import Food from '../components/Food'

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
        {data.address}, {data.city} <br /> Åpent mandag-søndag 10-22
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
      </Fragment>
    ),
    content: (
      <Fragment>
        {/* Matlinjal her */}
        <Food />
      </Fragment>
    ),
    showInMenu: true,
    title: 'Menu'
  },
  business: {
    id: 'business',
    showInMenu: true,
    title: 'Bedrift',
    desc: (
      <p>
        Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam
        eget risus varius blandit sit amet.
      </p>
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
        <Image id="pizza2" />
        <Image id="pizza1" />
      </div>
    )
  },
  contact: {
    id: 'contact',
    showInMenu: true,
    title: 'Kontakt',
    desc: (
      <Fragment>
        <p>man-lør: 14:00-23:00</p>
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
