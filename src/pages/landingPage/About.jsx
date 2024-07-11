import React from 'react'
import '../../styles/landingPage/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop,faUsers,faXmark,faClock,faKey,faFaceSmile } from '@fortawesome/free-solid-svg-icons';

// import logo
// import logo from '../../assets/LightLogo.png';

const About = () => {
  return (
    <div className="about container1" style={{ paddingTop: "70px" }}>
      {/* <nav className='container'><img src={logo} alt="Logo" className='logo'/></nav> */}

      <div className="about1">
        <h1>Why Use Communi Care?</h1>
      </div>

      <section className="services" id="services">
        <div className="content">
          <div className="boxes">
            {/* BOX1 */}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>

              <div className="topic">User Friendly</div>
              <p>
                The platform features an intuitive interface designed to be
                user-friendly for everyone. Even those with minimal technical
                skills can navigate it effortlessly.
              </p>
            </div>

            {/* BOX2 */}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faXmark} />{" "}
                {/* Displaying the desktop icon */}
              </div>
              <div className="topic">No Lines</div>
              <p>
                Schedule services and appointments at your convenience from
                home. Save time by avoiding long queues at local government
                offices.
              </p>
            </div>

            {/* BOX3 */}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faClock} />{" "}
                {/* Displaying the desktop icon */}
              </div>
              <div className="topic">Real-Time Updates</div>
              <p>
                Receive real-time updates on the status of your complaints. Stay
                informed every step of the way, from submission to resolution.
              </p>
            </div>

            {/* BOX4 */}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faDesktop} />{" "}
                {/* Displaying the desktop icon */}
              </div>
              <div className="topic">Fast Service</div>
              <p>
                Experience faster resolution of issues and queries with
                streamlined processes. Get the help you need promptly without
                unnecessary delays.
              </p>
            </div>

            {/* BOX5 */}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faKey} />{" "}
                {/* Displaying the desktop icon */}
              </div>
              <div className="topic">Data Security</div>
              <p>
                Your data is protected with strong security measures. Trust that
                your personal information remains confidential and safe.
              </p>
            </div>

            {/* BOX6 */}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faFaceSmile} />{" "}
                {/* Displaying the desktop icon */}
              </div>
              <div className="topic">Anytime Access</div>
              <p>
                Access the platform from both web and mobile devices. Use it
                wherever and whenever you need, ensuring maximum convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
