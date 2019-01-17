import React, { Component } from 'react'
import cc from 'classcat'

const images = {
  chefFront: 'chef-front.png',
  chefPizza: 'chef-pizza.png',
  chef: 'chef.png',
  dogRun: 'dog-run.png',
  dog: 'hund.png',
  capitalist: 'kapitalist.png',
  mug: 'mugshot.png',
  nun: 'nun.png',
  small: 'pizzaboks-liten.png',
  large: 'pizzaboks-stor.png',
  sleeping: 'sovande-polis.png'
}

export default class Illustration extends Component {
  state = {
    image: null
  }

  componentDidMount = () => {
    const { name } = this.props
    this.setState({
      image: name ? images[name] : this.getRandomImage()
    })
    if (!name) {
      this.interval = setInterval(() => {
        this.setState({
          image: this.getRandomImage()
        })
      }, 10000)
    }
  }
  getRandomImage = () => {
    const keys = Object.keys(images)
    return images[keys[Math.floor(Math.random() * keys.length)]]
  }
  componentWillUnmount = () => {
    if (!this.props.name) {
      clearInterval(this.inteval)
    }
  }
  render() {
    const { image } = this.state
    const { className } = this.props
    if (!image) return null
    return (
      <img
        className={cc({
          [className]: className
        })}
        src={`/assets/illustrations/${image}`}
        alt={`Illustrasjon av ${image.split('.png')[0]}`}
      />
    )
  }
}
