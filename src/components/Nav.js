import React from 'react'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'about', 'contact', 'appointment'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Location &amp; Contact</a>
                </Scroll>
            </li>
            <li>
                <Link to="/appointment" className="none">Make an Appointment</Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
