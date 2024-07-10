import React from 'react';
import '../styles/Footer.css' // Import your CSS file for styling
import logo from '../assets/DarkLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
            <img src={logo} alt="logo" className='DaLo' />
            </div>
            <div className="footer-center">
                <nav className="footer-nav">
                <div class="footer-col" id='link'>
                              
                              <ul class="links">
                              <li><a href="#home" className='nav-link'>HOME</a></li>
                              <li><a href="#about" className='nav-link'>ABOUT</a></li>
                              <li><a href="#features" className='nav-link'>FEATURES</a></li>
                              <li><a href="#contact" className='nav-link'>CONTACT</a></li>
                              </ul>
                </div>

                <footer className="footer-unique">
                            <div className="footer-right-unique">
                                <div className="icon-unique">
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                                <div className="icon-unique">
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                </div>
                                <div className="icon-unique">
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                </footer>

                </nav>
            </div>
            
        </footer>
    );
};

export default Footer;
