import React, { useState } from 'react'; // Import useState
import '../../styles/pages/SuperAdmin/PradesiyaSabhaReg.css';

// If Form component is not needed, you can remove it
export const Newregistration = () => {
  const [fileType, setFileType] = useState('');

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  return (
    <div className="form-registration-page-home-body">
      <div className="form-registration-container">
        <div className="form-registration-form">
          <div className="form-text">Register your Pradeshiya Sabha</div>
          <form>
            <div className="form-field">
              <label>Select District:</label>
              <select>
                <option value="colombo">Colombo</option>
                <option value="kalutara">Kalutara</option>
                <option value="gampaha">Gampaha</option>
              </select>
            </div>
            <div className="form-field">
              <label>Select Pradeshiya Sabha:</label>
              <select>
                <option value="">Pradeshiya Sabha1</option>
                <option value="">Pradeshiya Sabha2</option>
                <option value="">Pradeshiya Sabha3</option>
              </select>
            </div>
            <div className="form-field">
              <label>Register Number:</label>
              <input type="text" placeholder="Register Number" />
            </div>

            <div className="form-field">
              <label>Upload Document:</label>
              <div className="file-input-container">
                <input
                  type="file"
                  id="fileInput"
                  className="file-input"
                  onChange={handleFileTypeChange}
                />
                <label htmlFor="fileInput" className="file-label">
                  {fileType || 'Choose file'}
                </label>
              </div>
              {fileType && (
                <div className="file-options">
                  <button
                    className={`file-option-btn ${
                      fileType === 'register' ? 'selected' : ''
                    }`}
                    onClick={() => setFileType('register')}
                  >
                    Register Documentation
                  </button>
                  <button
                    className={`file-option-btn ${
                      fileType === 'request' ? 'selected' : ''
                    }`}
                    onClick={() => setFileType('request')}
                  >
                    Request Letter
                  </button>
                </div>
              )}
            </div>

            <div className="form-field-group">
              <div className="form-field">
                <label>Name of Registrant:</label>
                <input type="text" placeholder="Name of Registrant" />
              </div>
              <div className="form-field">
                <label>Contact Number:</label>
                <input type="text" placeholder="Contact Number" />
              </div>
            </div>
            <div className="form-field-group">
              <div className="form-field">
                <label>User Name:</label>
                <input type="text" placeholder="User Name" />
              </div>
              <div className="form-field">
                <label>Password:</label>
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <button type="submit" className='form-btnform'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newregistration;
