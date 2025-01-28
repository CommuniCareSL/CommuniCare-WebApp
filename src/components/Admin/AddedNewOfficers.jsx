import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredData } from "../../hooks/localStorage";
import { fetchEmployeesBySabhaId } from "../../service/admin/Employee"; // Import the service function
import profileImg from '../../assets/Admin/profile-img.jpg';

function AddedNewOfficers() {
  const [officerInfo, setOfficerInfo] = useState([]);
  const navigate = useNavigate();

  const { sabhaId } = getStoredData();

  // Fetch officer information from the backend using the service file
  const fetchofficerInfo = async () => {
    try {
      const response = await fetchEmployeesBySabhaId(sabhaId); // Call the service function
      setOfficerInfo(response.data); // Assuming the response data is an array of officer objects
    } catch (error) {
      console.error('Error fetching officer information:', error);
    }
  };

  useEffect(() => {
    fetchofficerInfo();
  }, [sabhaId]); // Re-fetch when sabhaId changes

  // Check if officerInfo is updated properly
  useEffect(() => {
    console.log('officerInfo state after update:', officerInfo); // Log the state after it changes
  }, [officerInfo]);

  // Handle click on officer row
  const handleClick = (e, path, employeeId) => {
    e.preventDefault();
    navigate(`${path}/${employeeId}`); // Pass employeeId as a URL parameter
  };

  return (
    <div className='admin-add-new-officer-content'>
      <table>
        <tbody>
          {officerInfo && officerInfo.length > 0 ? (
            officerInfo.map((officer, index) => (
              <a
                href={`/AdminAddedOfficersDetails/${officer.id}`} // Add employeeId to the URL
                key={index}
                onClick={(e) => handleClick(e, '/AdminAddedOfficersDetails', officer.id)} // Pass employeeId
              >
                <tr className="admin-add-new-officer-table-row">
                  <td className="admin-add-new-officer-table-row-column-1">
                    <img src={profileImg} alt="Profile" />
                  </td>
                  <td className="admin-add-new-officer-table-row-column-2">
                    <h4>{officer.name}</h4>
                  </td>
                  <td className="admin-add-new-officer-table-row-column-3">
                    <p>{officer.id}</p> {/* Display officer ID */}
                  </td>
                  <td className="admin-add-new-officer-table-row-column-4">
                    <p>{officer.department}</p> {/* Display department name */}
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
  );
}

export default AddedNewOfficers;