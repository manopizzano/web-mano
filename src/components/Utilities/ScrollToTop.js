import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidMount() {
    if (this.props.location.hash) {
      const el = document.querySelector(this.props.location.hash)
      if (el) {
        window.scrollTo(
          el.getBoundingClientRect().top,
          el.getBoundingClientRect().top
        )
      } else {
        window.scrollTo(0, 0)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

export default withRouter(ScrollToTop)
