import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import checkup from '../assets/images/checkup.jpg'
import examine1 from '../assets/images/examine1.jpg'
import surgery1 from '../assets/images/surgery1.jpg'

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

            {/* Not going to go this way initially
              <div className="links">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div> 
            */}


              <div className="content">
                <header className="major">
                  <h1>About Us</h1>
                </header>
                <p>
                  Armour Veterinary Ophthalmology (AVO) is a new speciality offering within Friendship Hospital for Animals.
                </p>
                <p>
                  Dr. Micki Armour has been practicing in the greater DC area for the past 7 years. She prides herself on providing primier care for all her patients. Having performed over 100 cataract surgeries, Dr. Armour is the one of the leading specialists in the region. Dr. Armour is also actively pursuing new procedures and devices to improve the vision and lives our our pets.
                  <br/>
                  [Read more in <Link to="/about-us/dr-armour">Dr. Armour's Bio</Link>]
                </p>
                <p>
                  Friendship Hospital for Animals is an exceptional provider of pet health care. Our team provides a wide scope of services using a collaborative approach to best medicine.  We have over sixty veterinarians in areas of primary care, emergency, and  advanced specialty care. We also partner with many local and regional referring veterinarians to offer state of the art health care.
                  <br/><br/>
                  As an independent hospital not associated with a national chain, Friendship has been family owned for over eighty years.  We are able to respond quickly to changing healthcare needs and provide the highest level of care.
                  <br/><br/>
                  Friendship is open 24 hours every day and has been accredited by the American Animal Hospital Association for over sixty years.  We serve the greater Washington community and receive specialty referrals from veterinarians up and down the east coast.
                  <br/>
                  [Learn more about <Link to="http://www.friendshiphospital.com/whoweare/"> Friendship from their site</Link>]
                </p>
              </div>

              <span className="image"><img src={checkup} alt="" /></span>
            </div>
          </section>

        <section className="main special">

            <header className="major">
              <h1>Services Provided</h1>
            </header>
            <h3>Dr. Armour performs ophthalmic evaluations and prescribes treatment/management for the following conditions:</h3>
            <div className="spotlight">
            <div className="content">
            <ul>
              <li>Indolent ulceration</li>
              <li>Deep stromal ulcerations and corneal rupture</li>
              <li>Cataracts and cataract surgery</li>
              <li>Glaucoma - primary and secondary</li>
              <li>Endothelial decompensation</li>
              <li>Corneal dystrophy and degeneration</li>
              <li>Uveitis</li>
              <li>Immune mediated keratitis/Episcleritis</li>
              <li>Keratoconjunctivitis sicca</li>
              <li>Corneal sequestrum</li>
              <li>Feline herpesvirus</li>
              <li>Retinopathies - SARDS, retinal degeneration, progressive retinal atrophy</li>
              <li>Pigmentary Uveitis of Golden Retrievers</li>
              <li>Eyelid diseases - entropion/ectropion, ectopic cilia/distichia/trichiass</li>
              <li>Prolapsed third eyelid gland (“cherry eye”)</li>
            </ul>
          </div>
          
          <span className="image"><img src={examine1} alt="" /></span>
          </div>

          <h3>Dr. Armour also performs a combination of advanced diagnostics and surgical procedures based on effectiveness and need, including:</h3>
          <div className="spotlight">
          <div className="content">
            <ul>
              <li>Schirmer tear test, rebound tonometry, tear film assessment, fluorescein stain</li>
              <li>Gonioscopy</li>
              <li>Ocular ultrasonography</li>
              <li>Electroretinography</li>
              <li>Endocyclophotocoagulation and goniovalve placement for glaucoma</li>
              <li>Transscleral photocoagulation</li>
              <li>Cryotherapy</li>
              <li>Retinopexy</li>
              <li>Corneal transplant</li>
            </ul>
            </div>
            <span className="image"><img src={surgery1} alt="" /></span>
            </div>
        </section>

        <section className="main special">
            <header className="major">
              <h1>How to Get Here</h1>
            </header>
            <h3><b>Address:</b> 4105 Brandywine St. N.W.  Washington, DC 20016</h3>
            <h3><b>Phone:</b> (202) 567-2089</h3>
            <iframe src="http://maps.google.com/maps?q=4105+Brandywine+Street+N.W.,+Washington,+DC+20016&amp;hl=en&amp;ie=UTF8&amp;g=4105+Brandywine+Street+N.W.,+Washington,+DC+20016&amp;s=AARTsJpMOc6f6HuQ12r22IOyA1JP74hwdQ&amp;ll=38.949799,-77.080829&amp;spn=0.005841,0.00912&amp;z=16&amp;iwloc=addr&amp;output=embed" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="350" frameborder="0"></iframe>
            <p>Parking is available off Brandywine Street in our private garage below the building.  Additionally, metered parking is available on surrounding streets and parking garages.  We are happy to reimburse for any costs associated with parking if you bring your receipt to the front desk.</p>

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
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
