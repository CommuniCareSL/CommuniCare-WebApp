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

    </div>
  )
}

export default AddNewOfficerForm
