import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class IsOrderPage extends Component {
  state = {
    isOrderPage: false
  }
  componentDidMount = () => {
    this.isOrderPage()
  }
  isOrderPage = () => {
    this.setState({
      isOrderPage:
        this.props.location && this.props.location.pathname === '/bestill'
          ? true
          : false
    })
  }
  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.isOrderPage()
    }
  }
  render() {
    if (this.state.isOrderPage) {
      return null
    } else {
      return this.props.children
    }
  }
}

export default withRouter(IsOrderPage)
