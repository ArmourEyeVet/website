import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo">
            <Link to="/"><img src={logo} alt="Armour Veterinary Ophthalmology" /></Link>
        </span>
    </header>
)

export default Header
