import React, { useState } from 'react';
import UserService from '../../services/UserService';

function AddNewOfficerForm() {
    const [formData,setFormData] = useState({
        name: '',
        address: '',
        nic: '',
        contactNumber: '',
        username: '',
        password: '',
        department: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Assume token is stored in localStorage
          const token = localStorage.getItem('token');
          const userData = {
            name: formData.name,
            address: formData.address,
            nic: formData.nic,
            contactNumber: formData.contactNumber,
            username: formData.username,
            password: formData.password,
            department: formData.department,
          };
    
          const response = await UserService.register(userData, token);
          setSuccessMessage('Officer added successfully!');
          setErrorMessage('');
          console.log(response);
        } catch (error) {
          setErrorMessage('Failed to add officer. Please try again.');
          setSuccessMessage('');
          console.error(error);
        }
    };

  return (
    <form className="add-new-officer-form-content" onSubmit={handleSubmit}>
        {/* <div className="add-new-officer-form-Name">
            <div className="add-new-officer-first-name">
                <input type="text" name="" id="" placeholder="First Name" />
            </div>
            <div className="add-new-officer-last-name">
                <input type="text" name="" id="" placeholder="Last Name" />
            </div>
        </div> */}

        <div className="add-new-officer-address">
            <textarea name="name" id="name" placeholder='Name'></textarea>
        </div>

        <div className="add-new-officer-address">
            <textarea name="address" id="address" placeholder='Address'></textarea>
        </div>

        <div className="add-new-officer-NIC-number">
            <input type="text" name="nic" id="nic" placeholder="NIC" />
        </div>

        <div className="add-new-officer-contact-number">
            <input type='number' name="contactNumber" id="contactNumber" placeholder="Contact Number" />
        </div>

        <div style={{border: '3px solid #0991ff', padding: '0', marginTop: '2vh'}}></div>

        <div className="add-new-officer-form-Name">
            <div className="add-new-officer-first-name">
                <input type="text" name="username" id="username" placeholder="User name" />
            </div>
            <div className="add-new-officer-last-name">
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
        </div>

        <div className="add-new-officer-selection-for-position">
            <select id="department" name='department' value={formData.department} onChange={handleChange}
                style={{
                color: selectedValue ? 'black' : '#a2a2a2', // Set color based on selectedValue
                }}
            >
                <option value="" disabled className='placeholder-selcet' style={{color:'#a2a2a2'}}>Please choose the Position</option>
                <option value="Department1">Department 1</option>
                <option value="Department2">Department 2</option>
                <option value="Department3">Department 3</option>
                <option value="Department4">Department 4</option>
            </select>
        </div>

        <br />
        <br />

        <div className="add-new-officer-add-button">
            <button type='submit'>Add</button>
        </div>

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

    </form>
  );
}

export default AddNewOfficerForm;
