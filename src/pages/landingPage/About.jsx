import React from 'react';
import '../../styles/pages/landingPage/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faUsers, faXmark, faClock, faKey, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-container1" style={{ paddingTop: "70px" }}>
      {/* <nav className='about-container'><img src={logo} alt="Logo" className='about-logo'/></nav> */}

      <div className="about-about1">
        <h1>Why Use Communi Care?</h1>
      </div>

      <section className="about-services" id="services">
        <div className="about-content">
          <div className="about-boxes">
            {/* BOX1 */}
            <div className="about-box">
              <div className="about-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="about-content">
                <div className="about-topic">User Friendly</div>
                <p>
                  The platform features an intuitive interface designed to be
                  user-friendly for everyone. Even those with minimal technical
                  skills can navigate it effortlessly.
                </p>
              </div>
            </div>

            {/* BOX2 */}
            <div className="about-box">
              <div className="about-icon">
                <FontAwesomeIcon icon={faXmark} />
              </div>
              <div className="about-content">
                <div className="about-topic">No Lines</div>
                <p>
                  Schedule services and appointments at your convenience from
                  home. Save time by avoiding long queues at local government
                  offices.
                </p>
              </div>
            </div>

            {/* BOX3 */}
            <div className="about-box">
              <div className="about-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="about-content">
                <div className="about-topic">Real-Time Updates</div>
                <p>
                  Receive real-time updates on the status of your complaints. Stay
                  informed every step of the way, from submission to resolution.
                </p>
              </div>
            </div>

            {/* BOX4 */}
            <div className="about-box">
              <div className="about-icon">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className="about-content">
                <div className="about-topic">Fast Service</div>
                <p>
                  Experience faster resolution of issues and queries with
                  streamlined processes. Get the help you need promptly without
                  unnecessary delays.
                </p>
              </div>
            </div>

            {/* BOX5 */}
            <div className="about-box">
              <div className="about-icon">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <div className="about-content">
                <div className="about-topic">Data Security</div>
                <p>
                  Your data is protected with strong security measures. Trust that
                  your personal information remains confidential and safe.
                </p>
              </div>
            </div>

            {/* BOX6 */}
            <div className="about-box">
              <div className="about-icon">
                <FontAwesomeIcon icon={faFaceSmile} />
              </div>
              <div className="about-content">
                <div className="about-topic">Anytime Access</div>
                <p>
                  Access the platform from both web and mobile devices. Use it
                  wherever and whenever you need, ensuring maximum convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
  