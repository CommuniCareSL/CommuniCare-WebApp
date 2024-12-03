import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import { useNavigate } from 'react-router-dom';

function AddNewOfficerForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        name: "", // ensure it's always controlled with an initial value
        address: "",
        nic: "",
        contactNumber: "",
        password: "",
        sabhaDepartmentId: ""
    });

    const [profileInfo, setProfileInfo] = useState(null); // Profile data state
    const [isLoading, setIsLoading] = useState(true); // Loading state for profile

    useEffect(() => {
        fetchProfileInfo(); // Fetch profile on mount
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.employees); // Set the profile data
            setIsLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching profile information:', error);
            setIsLoading(false); // Set loading to false in case of error
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!profileInfo) {
        //     alert('Profile information not available!');
        //     return; // Prevent submission if profile is not fetched
        // }

        try {
            const token = localStorage.getItem('token');
            const dataToSend = { 
                ...formData, 
                // sabaha: profileInfo.sabaha, // Use sabaha from the fetched profile
                role: "OFFICER" 
            };

            await UserService.register(dataToSend, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                address: '',
                nic: '',
                sabhaDepartmentId: '',
                contactNumber: ''
            });
            alert('User registered successfully');

        } catch (error) {
            alert('Sorry, something went wrong');
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

    if (isLoading) {
        return <div>Loading profile...</div>; // Optionally show a loading state while fetching profile
    }
    

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
                <input type="text" name="nic" placeholder="NIC" value={formData.nic} onChange={handleInputChange} maxlength="12" required/>
            </div>

            <div className="add-new-officer-contact-number">
                <input type='tel' name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleInputChange} pattern="[0-9]{10}" maxLength="10" required/>
            </div>

            <div style={{border: '3px solid #0991ff', padding: '0', marginTop: '2vh', marginBottom: '2vh'}}></div>

            <div className="add-new-officer-form-Name">
                <div className="add-new-officer-first-name">
                    <input type="text" name="email" placeholder="User name" value={formData.email} onChange={handleInputChange} required/>
                </div>
                <div className="add-new-officer-last-name">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} minLength="8" required/>
                </div>
            </div>

            <div className="add-new-officer-selection-for-position">
                <select name='sabhaDepartmentId' value={formData.sabhaDepartmentId} onChange={handleInputChange}
                    style={{
                    color: formData.department ? 'black' : '#a2a2a2', // Set color based on selectedValue
                    }}
                 required>
                    <option value="" disabled className='placeholder-selcet' style={{color:'#a2a2a2'}}>Please choose the Department</option>
                    <option value="1">Super Administration Division</option>
                    <option value="2">Administration Division</option>
                    <option value="3">Health Division</option>
                    <option value="4">Account Division</option>
                    <option value="5">Work and Plan Division</option>
                    <option value="6">Development Division</option>
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