import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="Armour Veterinary Ophthalmology" /></span>
        <h2>Caring for all of your pets' eye care needs</h2>
    </header>
)

export default Header
