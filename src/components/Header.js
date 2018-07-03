import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/avo-logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="Armour Veterinary Ophthalmology" /></span>
    </header>
)

export default Header
