import React from 'react'
import Link from 'gatsby-link'

// import MCForm from './MCForm'

const Footer = (props) => (
    <footer id="footer">
        <section>     
            <h2>The best care for your pet</h2>
            <p>AVO provides state of the art, comprehensive ophthalmic services for our clients and patients. But, more than that, we provide a caring team who understands the unique human-animal bond.</p>
            
            
            {/* TODO: Needs Captcha support!
            <h3>Join our mailing list</h3>
            <MCForm/> 
            */}


            {/* <ul className="actions">
                <li><Link to="/generic" className="button">View Our Services</Link></li>
                <li>
                <div id="mc_embed_signup">
                
                <form action="https://ArmourEyeVet.us18.list-manage.com/subscribe/post?u=a1c8885ddbf605a37715f6bcd&amp;id=943e23ae61" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
                    <label for="mce-EMAIL">Subscribe to our mailing list</label>
                    <h2>Subscribe to our mailing list</h2>
                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                    <div id="mce-responses" class="clear">
                            <div class="response" id="mce-error-response" ></div>
                            <div class="response" id="mce-success-response" ></div>
                    </div>
                    <div id="mc_hide" aria-hidden="true">
                        <input type="text" name="b_a1c8885ddbf605a37715f6bcd_943e23ae61" tabIndex="-1" value=""/>
                    </div>
                    <div class="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
                    </div>
                </form>
                </div>
                </li>
            </ul> */}
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
