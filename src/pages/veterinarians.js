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
                  <h1>Veterinary Community</h1>
                </header>
                <p>
                  Referral &amp; Working Together (see: http://www.friendshiphospital.com/veterinary-community/)
                </p>               
              </div>

            </div>
          </section>

          <section className="main special">
            <header className="major">
              <h1>Interested in Learning More?</h1>
            </header>
            <h3>Lunch and Learns</h3>
            <p>Please <a href="mailto:Info@ArmourEyeVet">send us an email</a> with your requests including the best point of contact for coordinating a Lunch-and-Learn opportunity at your practice.</p>

            <h3>Information Pamphlets</h3>
            <p><a href="mailto:Info@ArmourEyeVet">Contact us</a> for more information about what pamphlets or other material is available to help educate your clients and your staff on various eye care topics.</p>
          </section>


          <section className="main special">
            <header className="major">
              <h1>We Value Your Feedback</h1>
            </header>
            <h3>Vet Survey</h3>
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
  query VetQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
