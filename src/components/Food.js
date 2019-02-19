import React, { Component } from 'react'
import { Loader, Error } from './Utilities'
import FoodCategory from './FoodCategory'
import Allergy from './Allergy'

export default class FoodMenu extends Component {
  state = {
    menu: null,
    loading: true,
    err: null
  }
  componentDidMount = () => {
    fetch(
      'https://snappo.com/api/restaurant/21908/webshop_menu_8/en/22009.37/0'
    )
      .then(res => res.json())
      .then(res => {
        if (res.data.menu) {
          this.setState({
            menu: res.data.menu,
            loading: false
          })
        } else {
          this.setState({
            error: 'Could not find menu'
          })
        }
      })
      .catch(err =>
        this.setState({
          err: err
        })
      )
  }

  render() {
    const { loading, err, menu } = this.state
    if (loading) return <Loader />
    if (err) return <Error err={err} />
    return (
      <div className="Food">
        {menu &&
          menu.map(category => (
            <FoodCategory category={category} key={category.id} />
          ))}
        <Allergy />
      </div>
    )
  }
}
