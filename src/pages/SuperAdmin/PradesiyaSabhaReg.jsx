import React from 'react';
import '../../styles/pages/SuperAdmin/PradesiyaSabhaReg.css';

export const Newregistration = () => {
    return (
        <div className="registration-page-home-body">
        <div className="registration-container">
          <div className="registration-form">
            <div className="text">Register your Pradeshiya Sabha</div>
            <form>
              <div className="field">
                <label>Select District:</label>
                <select>
                  <option value="colombo">Colombo</option>
                  <option value="kalutara">Kalutara</option>
                  <option value="gampaha">Gampaha</option>
                </select>
              </div>
              <div className="field">
                <label>Select Pradeshiya Sabha:</label>
                <select>
                  <option value="">Pradeshiya Sabha1</option>
                  <option value="">Pradeshiya Sabha2</option>
                  <option value="">Pradeshiya Sabha3</option>
                </select>
              </div>
              <div className="field">
                <label>Register Number:</label>
                <input type="text" placeholder="Register Number" />
              </div>
  
              <div className="field">
                <label>Proof:</label>
                <input type="file" />
              </div>
  
  
              {/* <div class="file-input-container">
      <label for="file-upload" class="file-label">Choose File</label>
      <input type="file" id="file-upload" class="file-input">
  </div>
  <span class="file-input-text">No file chosen</span> */}
  
              <div className="field-group">
                <div className="field">
                  <label>Name of Registrant:</label>
                  <input type="text" placeholder="Name of Registrant" />
                </div>
                <div className="field">
                  <label>Contact Number:</label>
                  <input type="text" placeholder="Contact Number" />
                </div>
              </div>
              <div className="field-group">
                <div className="field">
                  <label>User Name:</label>
                  <input type="text" placeholder="User Name" />
                </div>
                <div className="field">
                  <label>Password:</label>
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <button type="submit" className='btnform'>Register</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Newregistration;