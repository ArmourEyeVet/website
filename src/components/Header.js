import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';
import fhaLogo from '../assets/images/fha-logo.png';
import fhaLogo2 from '../assets/images/fha-logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <div>
            <Link to="/"><img src={logo} alt="Armour Veterinary Ophthalmology" /></Link>
            <span className="large-span">
                <h1>Now Open!</h1>
                <p>Ophthalmology specialist for pets, servicing DC and surrounding areas. Accepting appointements and consults immediately.</p>
            </span>
        </div>
        <div className="smoosh">
            <span  className="smoosh">
                <p className="smoosh">Conveniently located at &nbsp;&nbsp;&nbsp;</p>
            </span>
            <Link to="/">
            <span  className="smoosh">
                <img src={fhaLogo} alt="Friendship Hospital for Animals" />
            </span>
            <span className="smoosh"><p>Friendship Hospital for Animals</p></span>
            </Link>
        </div>

    </header>
)

export default Header
