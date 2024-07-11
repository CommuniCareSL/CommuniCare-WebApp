import React from 'react';
import '../../styles/landingPage/Contact.css';

const Contact = () => {
  return (
    <div className="contact-body" style={{ paddingTop: "60px" }}>
      {/* <nav className='container'><img src={logo} alt="Logo" className='logo'/></nav> */}
      <div className="contact-wrapper">
        <form action="#">
          <h2>CONTACT US</h2>

          <div className="contact-input-field">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="contact-input-field">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="contact-input-field">
            <input type="phone" required />
            <label>Phone Number</label>
          </div>
          <div className="contact-input-field">
            <input type="text" required />
            <label>Description</label>
          </div>

          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
