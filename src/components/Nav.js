import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'about', 'contact'] } currentClassName="is-active" offset={-300}>
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
                <a href="/appointment">Make an Appointment</a>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
