import React, { Component, createContext } from 'react'
import throttle from 'lodash/throttle'

const MyContext = createContext()

export class Provider extends Component {
  state = {
    showMenu: false,
    data: null,
    headerHeight: 0
  }
  componentDidMount = () => {
    fetch(
      'https://snappo.com/api/restaurant_details_webshop/21908/en/27/4.5.23'
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          info: {
            org: res.data.orgNumber,
            schedule: res.data.schedule,
            dailySchedule: res.data.scheduleDaily,
            address: res.data.address,
            phone: res.data.adress,
            info: res.data.info
          }
        })
      })
    this.getHeaderHeight()
    window.addEventListener('resize', this.getHeaderHeight)
  }
  toggleMenu = () => {
    this.setState(
      prevState => ({ showMenu: !prevState.showMenu }),
      () => this.noScroll()
    )
  }
  closeMenu = () => {
    this.setState({ showMenu: false }, () => this.noScroll())
  }
  noScroll = () => {
    // document.querySelector('body').style.cssText = this.state.showMenu
    //   ? 'overflow: hidden; height: 100vh'
    //   : ''
    // document.querySelector('html').style.cssText = this.state.showMenu
    //   ? 'overflow: hidden; height: 100vh'
    //   : ''
  }
  getHeaderHeight = throttle(e => {
    const headerHeight = document
      .querySelector('#header')
      .getBoundingClientRect().height
    this.setState({
      headerHeight
    })
    document.documentElement.style.setProperty(
      '--headerHeight',
      `${headerHeight}px`
    )
  }, 300)

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.getHeaderHeight)
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          actions: {
            toggleMenu: this.toggleMenu,
            closeMenu: this.closeMenu
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export const Consumer = MyContext.Consumer
