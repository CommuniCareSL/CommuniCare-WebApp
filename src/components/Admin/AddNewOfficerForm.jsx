import React, { useState, useEffect } from 'react';
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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

                <div className="add-new-officer-address">
                    <textarea name="address" placeholder='Address' value={formData.address} onChange={handleInputChange} required></textarea>
                </div>

                <div className="add-new-officer-NIC-number">
                    <input type="text" name="nic" placeholder="NIC" value={formData.nic} onChange={handleInputChange} maxLength="12" required />
                </div>

                <div className="add-new-officer-contact-number">
                    <input type='tel' name="contactNo" placeholder="Contact Number" value={formData.contactNo} onChange={handleInputChange} pattern="[0-9]{10}" maxLength="10" required />
                </div>

                <div style={{ border: '3px solid #0991ff', padding: '0', marginTop: '2vh', marginBottom: '2vh' }}></div>

                <div className="add-new-officer-form-Name">
                    <div className="add-new-officer-first-name">
                        <input type="text" name="email" placeholder="User name" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="add-new-officer-last-name">
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} minLength="8" required />
                    </div>
                </div>

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
                        {/* <option value="2">Administration Division</option> */}
                        <option value="3">Health Division</option>
                        <option value="4">Account Division</option>
                        <option value="5">Work and Plan Division</option>
                        {/* <option value="6">Development Division</option> */}
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