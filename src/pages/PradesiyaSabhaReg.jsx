import { useState } from 'react';
import '../styles/pages/PradesiyaSabhaReg.css';

const PradesiyaSabhaReg = () => {
  const [fileType, setFileType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (type) => {
    setFileType(type);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="form-registration-page-home-body">
      <div className="form-registration-container">
        <div className="form-registration-form">
          <div className="form-text">Register your Pradeshiya Sabha</div>
          <form>
            <div className="form-field-group">
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
            </div>

            <div className="form-field">
              <label>Register Number:</label>
              <input type="text" placeholder="Register Number" />
            </div>

            <div className="form-field">
              <label>Upload Document:</label>
              <div className="dropdown-container">
                <button 
                  className="dropdown-toggle" 
                  type="button" 
                  onClick={toggleDropdown}
                >
                  {fileType || 'Select Document Type'}
                  <span className="caret"></span>
                </button>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  <li onClick={() => handleDropdownItemClick('Register Documentation')}>Register Documentation</li>
                  <li onClick={() => handleDropdownItemClick('Request Letter')}>Request Letter</li>
                </ul>
              </div>

              {fileType && (
                <div className="file-input-container">
                  <input
                    type="file"
                    id="fileInput"
                    className="file-input"
                    onChange={handleFileTypeChange}
                  />
                  <label htmlFor="fileInput" className="file-label">
                    Choose file
                  </label>
                  {fileType && (
                    <div className="file-selected-info">
                      Selected Document Type: {fileType}
                    </div>
                  )}
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

            <button type="submit" className="form-btnform">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PradesiyaSabhaReg;
