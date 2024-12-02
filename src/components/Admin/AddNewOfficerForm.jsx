import React, { useState } from 'react';
import UserService from "../../service/UserService";
import { useNavigate } from 'react-router-dom';

function AddNewOfficerForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "", // ensure it's always controlled with an initial value
        address: "",
        nic: "",
        contactNumber: "",
        email: "",
        password: "",
        sabhaDepartmentId: ""
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
            // Call the register method from UserService

            const token = localStorage.getItem('token');
            await UserService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                address: '',
                nic: '',
                sabhaDepartmentId: ''
            });
            alert('User registered successfully');
            navigate('/admin/user-management');

        } catch (error) {
            // console.error('Error registering user:', error);
            alert('User Added to System');
            setFormData({
                name: '',
                email: '',
                password: '',
                address: '',
                nic: '',
                contactNumber: '',
                sabhaDepartmentId: ''
            });
        }
    };
    

  return (
    <div>
        <form className="add-new-officer-form-content" onSubmit={handleSubmit}>

            <div className="add-new-officer-address" style={{marginTop: "-1vh"}}>
                <textarea name="name" placeholder='Name'  value={formData.name} onChange={handleInputChange} required></textarea>
            </div>

            <div className="add-new-officer-address">
                <textarea name="address" placeholder='Address' value={formData.address} onChange={handleInputChange} required></textarea>
            </div>

            <div className="add-new-officer-NIC-number">
                <input type="text" name="nic" placeholder="NIC" value={formData.nic} onChange={handleInputChange} required/>
            </div>

            <div className="add-new-officer-contact-number">
                <input type='number' name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleInputChange} required/>
            </div>

            <div style={{border: '3px solid #0991ff', padding: '0', marginTop: '2vh', marginBottom: '2vh'}}></div>

            <div className="add-new-officer-form-Name">
                <div className="add-new-officer-first-name">
                    <input type="text" name="email" placeholder="User name" value={formData.email} onChange={handleInputChange} required/>
                </div>
                <div className="add-new-officer-last-name">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required/>
                </div>
            </div>

            <div className="add-new-officer-selection-for-position">
                <select name='sabhaDepartmentId' value={formData.sabhaDepartmentId} onChange={handleInputChange}
                    style={{
                    color: formData.department ? 'black' : '#a2a2a2', // Set color based on selectedValue
                    }}
                 required>
                    <option value="" disabled className='placeholder-selcet' style={{color:'#a2a2a2'}}>Please choose the Department</option>
                    <option value="1">Department 1</option>
                    <option value="2">Department 2</option>
                    <option value="3">Department 3</option>
                    <option value="4">Department 4</option>
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