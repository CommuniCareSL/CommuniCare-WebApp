import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import { useNavigate } from 'react-router-dom';

import ClickIcon from '../../assets/Admin/click.png';
import profileImg from '../../assets/Admin/profile-img.jpg';

function AbsentOfficertable() {
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
    <>
      <a href="">
        <div className="admin-dashboard-linked-title-bar">
          <h3>Officers</h3>
          <img src={ClickIcon} alt="Click" />
        <h3>...</h3>
        </div>
      </a>

      <div className="admin-dashbaord-link-table-seperator" style={{borderBottom: '2px solid #0991FF'}}></div>

      <div className="admin-dashboard-absent-approved">
        <table>
          <tbody>

          {officerInfo && officerInfo.length > 0 ? (
        officerInfo.map((officer, index) => (
          <tr className="admin-dashboard-absent-list">
              <td className="admin-dashboard-absent-list-column-1">
                <img src={profileImg} alt="Profile Image" />
              </td>
              <td className="admin-dashboard-absent-list-column-2">
                <h4>{officer.name}</h4>
                <p>{departmentNames[officer.sabhaDepartmentId.sabhaDepartmentId] || "Unknown Department"}</p>
              </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="4">No officers found</td>
        </tr>
    )}


          </tbody>
        </table>
      </div>

    </>
      
  )
}

export default AbsentOfficertable
