import React, { useState } from 'react';
import UserService from "../../service/UserService";

function AddNewOfficerForm() {
    const [formData, setFormData] = useState({
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
            // Show the data in an alert
            // alert(`Form Data:\nName: ${formData.name}\nAddress: ${formData.address}\nNIC: ${formData.nic}\nContact Number: ${formData.contactNumber}\nUsername: ${formData.username}\nDepartment: ${formData.department}`);

            // Assuming token is stored in localStorage
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
    <div>
        <form className="add-new-officer-form-content" onSubmit={handleSubmit}>
            {/* <div className="add-new-officer-form-Name">
                <div className="add-new-officer-first-name">
                    <input type="text" name="" id="" placeholder="First Name" />
                </div>
                <div className="add-new-officer-last-name">
                    <input type="text" name="" id="" placeholder="Last Name" />
                </div>
            </div> */}

            <div className="add-new-officer-address" style={{marginTop: "-1vh"}}>
                <textarea name="name" placeholder='Name'  value={formData.name} onChange={handleChange}></textarea>
            </div>

            <div className="add-new-officer-address">
                <textarea name="address" placeholder='Address' value={formData.address} onChange={handleChange}></textarea>
            </div>

            <div className="add-new-officer-NIC-number">
                <input type="text" name="nic" placeholder="NIC" value={formData.nic} onChange={handleChange}/>
            </div>

            <div className="add-new-officer-contact-number">
                <input type='number' name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange}/>
            </div>

            <div style={{border: '3px solid #0991ff', padding: '0', marginTop: '2vh', marginBottom: '2vh'}}></div>

            <div className="add-new-officer-form-Name">
                <div className="add-new-officer-first-name">
                    <input type="text" name="username" placeholder="User name" value={formData.username} onChange={handleChange}/>
                </div>
                <div className="add-new-officer-last-name">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                </div>
            </div>

            <div className="add-new-officer-selection-for-position">
                <select name='department' value={formData.department} onChange={handleChange}
                    style={{
                    color: formData.department ? 'black' : '#a2a2a2', // Set color based on selectedValue
                    }}
                >
                    <option value="" disabled className='placeholder-selcet' style={{color:'#a2a2a2'}}>Please choose the Department</option>
                    <option value="Department1">Department 1</option>
                    <option value="Department2">Department 2</option>
                    <option value="Department3">Department 3</option>
                    <option value="Department4">Department 4</option>
                </select>
            </div>

            <div className="add-new-officer-add-button">
                <button type='submit'>Add</button>
            </div>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        </form>
    </div>
  );
}

export default AddNewOfficerForm;
