import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredData } from "../../hooks/localStorage";
import { registerEmployee } from "../../service/admin/Employee";
import AlertService from '../../shared/service/AlertService';

function AddNewOfficerForm() {
    const navigate = useNavigate();
    const { sabhaId } = getStoredData();

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        address: "",
        nic: "",
        contactNo: "",
        password: "",
        departmentId: ""
    });
    const [nicError, setNicError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [contactNoError, setContactNoError] = useState("");
    const [nameError, setNameError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Clear errors when the user starts typing
        if (name === 'nic') {
            setNicError("");
        } else if (name === 'password') {
            setPasswordError("");
        } else if (name === 'contactNo') {
            setContactNoError("");
        }else if (name === 'name') {
            setNameError("");
        }
    };

    const validateName = (name) => {
        // Regex to match only alphabetic characters and spaces
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);
    };

    const validateNIC = (nic) => {
        const nicPattern = /^[0-9]{9}[VvXx]$|^[0-9]{12}$/;
        return nicPattern.test(nic);
    };

    const validatePassword = (password) => {
        // Password must be at least 8 characters
        return password.length >= 8;
    };

    const validateContactNo = (contactNo) => {
        // Contact number must be exactly 10 digits
        const contactPattern = /^[0-9]{10}$/;
        return contactPattern.test(contactNo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate NIC
        if (!validateNIC(formData.nic)) {
            setNicError("Invalid NIC. It should be either a 9-digit number followed by 'V' or 'X' or a 12-digit number.");
            return;
        }

        // Validate Password
        if (!validatePassword(formData.password)) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        }

        // Validate Contact Number
        if (!validateContactNo(formData.contactNo)) {
            setContactNoError("Contact number must be exactly 10 digits.");
            return;
        }

        // Validate Name
        if (!validateName(formData.name)) {
            setNameError("Name must contain only letters and spaces.");
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const dataToSend = {
                ...formData,
                sabhaId: sabhaId, // Include sabhaId from localStorage
            };

            await registerEmployee(dataToSend, token); // Call the service function

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                address: '',
                nic: '',
                contactNo: '',
                departmentId: ''
            });

            AlertService.success('Employee registered successfully');
            //navigate('/employees'); // Navigate to the employees list page after successful registration
            window.location.reload();
        } catch (error) {
            console.error('Error registering employee:', error);
            alert('Sorry, something went wrong');
        }
    };

    return (
        <div>
            <form className="add-new-officer-form-content" onSubmit={handleSubmit}>
                <div className="add-new-officer-address" style={{ marginTop: "-1vh" }}>
                    <textarea name="name" placeholder='Name' value={formData.name} onChange={handleInputChange} required></textarea>
                </div>
                {nameError && <span style={{ color: 'red' }}>{nameError}</span>}

                <div className="add-new-officer-address">
                    <textarea name="address" placeholder='Address' value={formData.address} onChange={handleInputChange} required></textarea>
                </div>

                <div className="add-new-officer-NIC-number">
                    <input
                        type="text"
                        name="nic"
                        placeholder="NIC"
                        value={formData.nic}
                        onChange={handleInputChange}
                        required
                    />
                    {nicError && <span style={{ color: 'red' }}>{nicError}</span>}
                </div>

                <div className="add-new-officer-contact-number">
                    <input
                        type='tel'
                        name="contactNo"
                        placeholder="Contact Number"
                        value={formData.contactNo}
                        onChange={handleInputChange}
                        required
                    />
                    {contactNoError && <span style={{ color: 'red' }}>{contactNoError}</span>}
                </div>

                <div style={{ border: '3px solid #0991ff', padding: '0', marginTop: '2vh', marginBottom: '2vh' }}></div>

                <div className="add-new-officer-form-Name">
                    <div className="add-new-officer-first-name">
                        <input
                            type="text"
                            name="email"
                            placeholder="User name"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="add-new-officer-last-name">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}

                <div className="add-new-officer-selection-for-position">
                    <select
                        name='departmentId'
                        value={formData.departmentId}
                        onChange={handleInputChange}
                        style={{
                            color: formData.departmentId ? 'black' : '#a2a2a2',
                        }}
                        required
                    >
                        <option value="" disabled className='placeholder-selcet' style={{ color: '#a2a2a2' }}>Please choose the Department</option>
                        <option value="3">Health Division</option>
                        <option value="4">Account Division</option>
                        <option value="5">Work and Plan Division</option>
                    </select>
                </div>

                <div className="add-new-officer-add-button">
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddNewOfficerForm;
