import React from 'react'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'about', 'contact', 'appointment'] } currentClassName="is-active" offset={-300}>

            <li>
                <Link to="/#intro" className="none">Introduction</Link>
            </li>
            <li>
                <Link to="/#about" className="none">About</Link>
            </li>
            <li>
                <Link to="/#contact" className="none">Location &amp; Contact</Link>
            </li>
            <li>
                <Link to="#" className="none">Make an Appointment</Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
