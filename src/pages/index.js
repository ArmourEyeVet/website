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

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Leading choice for veterinary ophthalmology.</h2>
                </header>
                <p>Armour Veterinary Ophthalmology provides advanced medical and surgical care for patients with ophthalmic diseases. Working with your primary veterinarian, Dr. Micki Armour is an expert in the diagnosis, as well as surgical and medical management of ophthalmic diseases in our veterinary patients. Our goal is to provide excellent patient care and customer service for your family member.</p>
                <ul className="actions">
                  <li><Link to="/learn-more" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={checkup} alt="" /></span>
            </div>
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
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
