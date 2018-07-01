import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import checkup from '../assets/images/checkup.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  render() {

    return (
      <div>

        <div id="main">

          <section className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h1>Pet Owners</h1>
                </header>
                <p>
                  Best care for your pet.  a bit more about "why us?"
                </p>
              </div>

            </div>
          </section>

          <section className="main special">
            <header className="major">
              <h1>Diseases and Conditions</h1>
            </header>
            <p>Possibly what the look for? Or maybe just more of the same with the list of conditions..</p>
          </section>

          <section className="main special">
            <header className="major">
              <h1>Schedule and Appointment</h1>
            </header>
            <p>Still need to figure out how Friendship wants this to work.</p>
          </section>

          <section className="main special">
            <header className="major">
              <h1>Testimonials</h1>
            </header>
            <p>possibly put quotes here, but in reality they probably should go on the front page.</p>
          </section>


          <section className="main special">
            <header className="major">
              <h1>We Value Your Feedback</h1>
            </header>
            <h3>Owner Survey</h3>
            <p>Justification and Link to Survey goes here</p>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query OwnerQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
