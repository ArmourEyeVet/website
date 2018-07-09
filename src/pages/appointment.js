import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        
        <Link to="/appointment">
        <Header />
        </Link>

        <div id="main">

          <section id="appointment" className="main">
            <div className="spotlight">

              <div className="content">
                <header className="major">
                  <h1>Request an Appointment</h1>
                </header>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwjdP_6XOv4-QAjVGwaCCwdwxogvYZCB3D_FUXBcLFhQQ56A/viewform?embedded=true" width="100%" height="3040" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
              </div>

            </div>
          </section>

        </div>
      </div>
    )
  }
}

Appointment.propTypes = {
  route: React.PropTypes.object,
}

export default Appointment

export const pageQuery = graphql`
  query AppointmentQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
