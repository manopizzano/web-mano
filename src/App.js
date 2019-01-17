import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from './components/Utilities'
import Header from './components/Header'
import FrontPageContainer from './containers/FrontPageContainer'
import OrderContainer from './containers/OrderContainer'
import NoMatchPage from './components/pages/NoMatchPage'
import Nav from './components/Nav'

export const routes = {
  frontpage: {
    name: 'Frontpage',
    path: '/',
    component: FrontPageContainer,
    exact: true,
    show: false
  },
  order: {
    name: 'Order',
    path: '/order',
    component: OrderContainer,
    exact: true,
    show: true
  }
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
        </Provider>
      </Router>
    )
  }
}

export default App
