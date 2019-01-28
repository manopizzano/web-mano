import React, { Component } from 'react'
import cc from 'classcat'

const images = {
  cash: 'cash.png',
  chase: 'chase.png',
  chef: 'Chef.png',
  chef2: 'Chef2.png',
  chef3: 'Chef3.png',
  dog: 'Dog.png',
  focaccia: 'Focaccia.png',
  ruler: 'linjal.png',
  nun: 'nun.png',
  pizza: 'pizza.png',
  police: 'Police.png',
  slice: 'Slice.png',
  svin: 'Svin1.png',
  svin2: 'Svin2.png',
  teeth: 'Teeth.png'
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
          Illustration: true,
          [className]: className
        })}
        src={`/assets/illustrations/${image}`}
        alt={`Illustrasjon av ${image.split('.png')[0]}`}
      />
    )
  }
}
