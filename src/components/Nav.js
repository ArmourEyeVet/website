import React from 'react'
import Link from 'gatsby-link'
import ResponsiveMenu from 'react-responsive-navbar';

//TODO: re-write more like this: https://gist.github.com/Qt-dev/556e2e0558892c99bd81

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName={props.sticky ? 'alt' : ''}
        smallMenuClassName={props.sticky ? 'alt' : ''}
        menu={
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/pet-owners">Pet Owners</Link></li>
            <li><Link to="/veterinarians">Veterinarians</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        }
      />
    </nav>

);

export default Nav
