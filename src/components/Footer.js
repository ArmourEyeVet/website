import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Part of a great team</h2>
            <p>AVO provides state of the art, comprehensive ophthalmic services for our clients and patients. But, more than that, we provide a caring team who understands the unique human-animal bond.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">View Our Services</Link></li>
            </ul>
        </section>
        <section>
            <h2>Armour Veterinary Ophthalmology</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>4105 Brandywine St. N.W.<br/>Washington, DC 20016</dd>
                <dt>Phone</dt>
                <dd>(202) 567-2089</dd>
                <dt>Email</dt>
                <dd><a href="mailto:info@armoureyevet.com">Info@ArmourEyeVet.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.facebook.com/ArmourEyeVet" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/armoureyevet/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://mailchi.mp/b64688b24ba7/avo_updates" className="icon fa-envelope-o alt"><span className="label">Get Updates!</span></a></li>
                {/* TODO: Add back in once these accounts exists and have content!
                <li><a href="#" className="icon fa-youtube alt"><span className="label">Dribbble</span></a></li>
                <li><a href="#" className="icon fa-linkedin alt"><span className="label">Dribbble</span></a></li>
                    -> possibly also G+ and Pinterest
                */}
                <li><a href="https://twitter.com/ArmourEyeVet" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; 2018 AVO - Eye Care for Pets. All Rights Reserved.</p>
    </footer>
)

export default Footer
