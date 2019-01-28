import React, { Component } from 'react'
import Hero from '../Hero'
import { Section } from '../Utilities'
import Food from '../Food'
import FormBusiness from '../FormBusiness'
import Divider from '../Divider'

export default class FrontPage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Divider illustration="chef" />
        <Section title="Menu" full>
          <Food />
        </Section>
        <Divider />
        <Section
          title="Bedrift"
          desc="Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet."
        >
          <FormBusiness />
        </Section>
      </div>
    )
  }
}
