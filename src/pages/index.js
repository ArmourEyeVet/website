import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/dr_armour_and_boston.png'
import fhaLogo from '../assets/images/fha-logo.png';
import fhaLogo2 from '../assets/images/fha-logo.svg';

class Index extends React.Component {
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

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">

                <header className="major">
                  <h1>AVO is now open!</h1>
                </header>
                <div>
                  <h2>Ophthalmology @ Friendship Hospital for Animals</h2>
                  <p>
                    Armour Veterinary Ophthalmology (AVO) is now open for business!
                    We provide ophthalmic specialty services for your pets in and around the DC area.
                    AVO is proud to be joining the many great specialists and primary care vets at <a href="http://www.friendshiphospital.com/">Friendship Hospital for Animals</a>
                  </p>
                  <div className="fha align-center"><a className="plain" href="http://www.friendshiphospital.com/">
                    <img src={fhaLogo2} alt="Friendship Hospital for Animals" />
                  </a></div>
                </div>
                <footer className="major">
                  <ul className="actions">
                    <li><Link to="/appointment" className="button special">Make an Appointment</Link></li>
                  </ul>
                </footer>

              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h1>About AVO</h1>
                </header>

                <p>
                  Armour Veterinary Ophthalmology, lead by Dr. Micki Armour, brings excellent ophthalmic care to patients within the District of Columbia. My team focuses on exceptional quality while providing the highest standards of patient care and client communication. I offer specialty services including phacoemulsification for cataracts, endocyclophotocoagulation for glaucoma, medical management of chronic dry eye and revolutionizing corneal disease therapy. 
                  I am so excited to join the innovative team at Friendship Hospital for Animals.  The doctors and staff are so friendly and caring; it is wonderful to work as a collective group where general practitioners, emergency veterinarians and specialty veterinarians can all provide the best care for your pet. 
                  I enjoy offering the gold standard of medical and surgical care for ophthalmic diseases in our pets. In particular, I enjoy collaboration with human ophthalmologists in the field of corneal diseases, glaucoma and cataracts.
                 </p>
                 <h3>About Dr. Armour</h3>
                 <p>
                  Micki Armour VMD, DACVO grew up in the Washington DC area and attended Holton-Arms School in Bethesda, Maryland. When I was growing up in the area, my own pets were patients at Friendship Hospital for Animals.  My husband Phil and I have 3 sons, Brayden, Finn and Eric. I enjoy running, skiing, ice hockey (go Caps!) and being active with the boys. My first-born "children" Brody (a black lab) and Sam (a boxer) love to hike in Great Falls park.
                </p>
               <span className="body-text">
                 Commonly treated conditions:
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
                   <li>Eyelid diseases - entropion/ectropion, ectopic cilia/distichia/trichiasis</li>
                   <li>Prolapsed third eyelid gland (“cherry eye”)</li>
                 </ul>
               </span>
               <p>
                 Armour Veterinary Ophthalmology offers the following diagnostic tests and therapeutic options:
               </p>
               <span className="body-text"> 
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
               </span>
              <p>Appointments are available <b>Monday through Friday 8am-4:30pm</b>
                <br/>
                Emergent cases can be referred directly or through the Friendship urgent care/ emergency service 
              </p>
              <p>
                To request an appointment, call (202) 567-2089 or email Info@ArmourEyeVet.com
              </p>
              <p>
                 If you are a primary care veterinarian and would like to schedule a lunch and learn, please email Info@ArmourEyeVet.com or contact Kathy Leef at (443) 398-0830 
               </p>

                {/* <ul className="actions">
                  <li><Link to="" className="button">Learn More</Link></li>
                </ul> */}
              </div>
              {/* <span className="image"><img src={pic01} alt="" /></span> */}
            </div>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h1>Location and Contact Information</h1>

              <h3><b>AVO located inside Friendship Hospital for Animals</b></h3>
              <h3>4105 Brandywine St. N.W. Washington, DC 20016<br/></h3>
              <h3><b>Hours of Operation:</b> M-F 8 a.m - 4:00 p.m., EST</h3>
              <p>Emergent cases can be referred directly or through the Friendship urgent care/emergency service</p>
            </header>
            <iframe src="https://maps.google.com/maps?q=4105+Brandywine+Street+N.W.,+Washington,+DC+20016&amp;hl=en&amp;ie=UTF8&amp;g=4105+Brandywine+Street+N.W.,+Washington,+DC+20016&amp;s=AARTsJpMOc6f6HuQ12r22IOyA1JP74hwdQ&amp;ll=38.949799,-77.080829&amp;spn=0.005841,0.00912&amp;z=16&amp;iwloc=addr&amp;output=embed" marginWidth="0" marginHeight="0" scrolling="no" width="100%" height="350" frameBorder="0"></iframe>
            <p>Parking is available off Brandywine Street in our private garage below the building.  Additionally, metered parking is available on surrounding streets and parking garages.</p>
            <br/>
            <h3><b>AVO's Direct Phone:</b> (202) 567-2089</h3>
            <h3><b>Friendship's General Phone:</b> (202) 363-7300</h3>
            <h3><b>Fax:</b> (202) 363-7126</h3>
            <h3><b>Email:</b> <a href="mailto:Info@ArmourEyeVet.com">Info@ArmourEyeVet.com</a></h3>

            <footer className="major">
              <ul className="actions">
                <li><Link to="/appointment" className="button special">Make an Appointment</Link></li>
              </ul>
            </footer>


          </section>

          {/* <section id="cta" className="main special">
            <header className="major">
              <h2>Make and Appointment</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section> */}

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
