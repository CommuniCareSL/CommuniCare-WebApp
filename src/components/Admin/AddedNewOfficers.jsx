import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import { useNavigate } from 'react-router-dom';

import profileImg from '../../assets/Admin/profile-img.jpg';

function AddedNewOfficers() {
  const [officerInfo, setofficerInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchofficerInfo();
  }, []);

  const fetchofficerInfo = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getOfficers(token);

      // Debugging: Check the full structure of the response
      console.log('Response from API:', response);
      // alert('Data fetched from API: ' + JSON.stringify(response)); // Shows the full response in alert

      // Ensure the response contains 'employees' and that it's an array
      if (response && Array.isArray(response)) {
        setofficerInfo(response); // Update state with the array of officers
      } else {
        alert('No officers data found or data is not in expected format.');
        console.log('No officers data found or the data is not an array.');
      }
    } catch (error) {
      // alert('Error fetching officer information: ' + error.message);
      console.error('Error fetching officer information:', error);
    }
  };

  // Check if officerInfo is updated properly
  useEffect(() => {
    console.log('officerInfo state after update:', officerInfo); // Log the state after it changes
  },[officerInfo]);

  // Department name mapping
  const departmentNames = {
    1: "Super Administration Division",
    2: "Administration Division",
    3: "Health Division",
    4: "Account Division",
    5: "Work and Plan Division",
    6: "Development Division"
  };


  return (
    <div className='admin-add-new-officer-content'>
      <table>
        <tbody>

        {officerInfo && officerInfo.length > 0 ? (
        officerInfo.map((officer, index) => (
            <a
                href="/AdminAddedOfficersDetails"
                key={index}
                onClick={(e) => handleClick(e, '/AdminAddedOfficersDetails')}
            >
                <tr className="admin-add-new-officer-table-row">
                    <td className="admin-add-new-officer-table-row-column-1">
                        <img src={profileImg} alt="Profile" />
                    </td>
                    <td className="admin-add-new-officer-table-row-column-2">
                        <h4>{officer.name}</h4>
                        <p>{officer.nic}</p>
                    </td>
                    {/* <td className="admin-add-new-officer-table-row-column-3">
                        <p>{officer.nic}</p>
                    </td> */}
                    <td className="admin-add-new-officer-table-row-column-4">
                        <p>{departmentNames[officer.sabhaDepartmentId.sabhaDepartmentId] || "Unknown Department"}</p>
                    </td>
                </tr>
            </a>
        ))
    ) : (
        <tr>
            <td colSpan="4">No officers found</td>
        </tr>
    )}

        </tbody>
      </table>
    </div>
  )
}

export default AddedNewOfficers
