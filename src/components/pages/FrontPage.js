import React, { Component } from 'react'

import content from '../../utils/content'

import PageWrapper from '../Utilities/PageWrapper'
import { Section } from '../Utilities'
import Hero from '../Hero'
import Food from '../Food'
import Divider from '../Divider'

export default class FrontPage extends Component {
  render() {
    const { business, about, contact, menu } = content
    return (
      <PageWrapper>
        <Hero />
        <Divider illustration="chef" />
        <Section id={menu.id} title={menu.title} full>
          <Food />
        </Section>
        <Divider />
        <Section id={business.id} title={business.title} desc={business.desc}>
          {business.content}
        </Section>
        <Divider />
        <Section id={about.id} title={about.title} desc={about.desc}>
          {about.content}
        </Section>
        <Divider />
        <Section id={contact.id} title={contact.title} desc={contact.desc}>
          {contact.content}
        </Section>
      </PageWrapper>
    )
  }
}
