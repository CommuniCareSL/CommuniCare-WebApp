import React from 'react';
import logo from '../../assets/landingPage/DarkLogo.png'; // Import your logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
                {/* Left: Logo */}
                <div className="flex justify-center mb-6 md:mb-0">
                    <img src={logo} alt="logo" className="w-24 h-auto" />
                </div>

                {/* Center: Navigation Links */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                    <div className="footer-col">
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-white hover:underline">HOME</a></li>
                            <li><a href="#about" className="text-white hover:underline">ABOUT</a></li>
                            <li><a href="#features" className="text-white hover:underline">FEATURES</a></li>
                            <li><a href="#contact" className="text-white hover:underline">CONTACT</a></li>
                        </ul>
                    </div>

                    {/* Social Icons with Glowing Effect */}
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 hover:shadow-lg hover:shadow-blue-500">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 hover:shadow-lg hover:shadow-blue-500">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 hover:shadow-lg hover:shadow-blue-500">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
