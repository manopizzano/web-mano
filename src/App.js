import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './utils/lazysizes'

import { Provider } from './components/Utilities'
import Header from './components/Header'
import FrontPageContainer from './containers/FrontPageContainer'
import OrderPage from './components/pages/OrderPage'
import PrivacyPage from './components/pages/PrivacyPage'
import NoMatchPage from './components/pages/NoMatchPage'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const routes = {
  frontpage: {
    name: 'Frontpage',
    path: '/',
    component: FrontPageContainer,
    exact: true,
    show: false
  },
  order: {
    name: 'Bestill',
    path: '/bestill',
    component: OrderPage,
    exact: true,
    show: true
  },
  privacy: {
    name: 'Privacy',
    path: '/personvern',
    component: PrivacyPage,
    exact: true,
    show: true
  }
  // form: {
  //   name: 'Success',
  //   path: '/pages/success',
  //   component: FrontPageContainer,
  //   exact: true,
  //   show: false
  // }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <Header />
          <Switch>
            {Object.keys(routes).map(key => (
              <Route
                key={routes[key].path}
                exact={routes[key].exact}
                path={routes[key].path}
                component={routes[key].component}
              />
            ))}
            <Route component={NoMatchPage} />
          </Switch>
          <Nav />
          <Footer />
        </Provider>
      </Router>
    )
  }
}

export default App
