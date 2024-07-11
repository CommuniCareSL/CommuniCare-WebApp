import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-body" style={{ paddingTop: "60px" }}>
      {/* <nav className='container'><img src={logo} alt="Logo" className='logo'/></nav> */}
      <div className="contact-wrapper" style={{marginLeft:'20%'}}>
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
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginRight: "84%" }}>Description</label>

            <textarea
              rows="5"
              cols="50"
              required
              className="textarea"
            ></textarea>
          </div>

          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
