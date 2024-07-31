import React, { useState } from 'react';

function AddNewOfficerForm() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  return (
    <div className='add-new-officer-form-content'>
        <div className="add-new-officer-form-Name">
            <div className="add-new-officer-first-name">
                <input type="text" name="" id="" placeholder="First Name" />
            </div>
            <div className="add-new-officer-last-name">
                <input type="text" name="" id="" placeholder="Last Name" />
            </div>
        </div>

        <div className="add-new-officer-address">
            <textarea name="" id="" placeholder='Address'></textarea>
        </div>

        <div className="add-new-officer-NIC-number">
            <input type="text" name="" id="" placeholder="NIC" />
        </div>

        <div className="add-new-officer-contact-number">
            <input type='number' name="" id="" placeholder="Contact Number" />
        </div>

        <div style={{border: '3px solid #0991ff', padding: '0', marginTop: '2vh'}}></div>

        <div className="add-new-officer-form-Name">
            <div className="add-new-officer-first-name">
                <input type="text" name="" id="" placeholder="User name" />
            </div>
            <div className="add-new-officer-last-name">
                <input type="password" name="" id="" placeholder="Password" />
            </div>
        </div>

        <div className="add-new-officer-selection-for-position">
            <select id="simple-select" value={selectedValue} onChange={handleChange}
                style={{
                color: selectedValue ? 'black' : '#a2a2a2', // Set color based on selectedValue
                }}
            >
                <option value="" disabled className='placeholder-selcet' style={{color:'#a2a2a2'}}>Please choose the Position</option>
                <option value="option1">Service 1</option>
                <option value="option2">service 2</option>
                <option value="option3">service 3</option>
                <option value="option4">service 4</option>
            </select>
        </div>

        <div className="add-new-officer-work-place-ID">
            <input type="number" name="" id="" placeholder="Work Id Number" />
        </div>

        <div className="add-new-officer-add-button">
            <button>Add</button>
        </div>

    </div>
  )
}

export default AddNewOfficerForm
