import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import '../assets/scss/main.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">
          <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

          <Header />

          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          >
          </Waypoint>
          <Nav sticky={this.state.stickyNav} />

          {children()}
          <Footer />
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
