// import React from 'react';
import '../../styles/pages/landingPage/Contact.css';
import app from '../../assets/x.png'


const Contact = () => {
  return (
    <div className="contact-body" style={{ paddingTop: "0px" }}>
      <div className="contact-wrapper">
        <div className="contact-logo">
          <img src={app} alt="Logo" className="contact-logo" />
        </div>

        
        <div className="contact-form">
          <form action="#">
            <h2>CONTACT US</h2>
            <div style={{ display: "flex" }}>
              <div className="contact-input-field">
                <input type="text" required />
                <label>First Name</label>
              </div>
              <div className="contact-input-field">
                <input type="text" required />
                <label>Last Name</label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="contact-input-field">
                <input type="phone" required />
                <label>Phone Number</label>
              </div>
              <div className="contact-input-field">
                <input type="email" required />
                <label>Email</label>
              </div>
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "column" }} className='des'>
              <label>Description</label>
              <textarea
                rows="5"
                cols="50"
                required
                className="textarea"
              ></textarea>
            </div>
            <center><button type="submit" style={{width:'120px'}}>SEND</button></center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
