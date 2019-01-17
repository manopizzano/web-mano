import React, { Component, createContext } from 'react'

const MyContext = createContext()

export class Provider extends Component {
  state = {
    showMenu: false,
    data: null
  }
  componentDidMount = () => {
    fetch(
      'https://snappo.com/api/restaurant_details_webshop/21908/en/27/4.5.23'
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          info: {
            org: res.data.orgNumber,
            schedule: res.data.schedule,
            dailySchedule: res.data.scheduleDaily,
            adress: res.data.adress,
            phone: res.data.adress,
            info: res.data.info
          }
        })
      )
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
    document.querySelector('body').style.cssText = this.state.showMenu
      ? 'overflow: hidden; height: 100vh'
      : ''
    document.querySelector('html').style.cssText = this.state.showMenu
      ? 'overflow: hidden; height: 100vh'
      : ''
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
