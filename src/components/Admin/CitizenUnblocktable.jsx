import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import profileImg from '../../assets/Admin/profile-img.jpg';
import x from '../../assets/SuperAdmin/LightLogo.png';
import { getStoredData } from "../../hooks/localStorage";
import { fetchUsersBySabhaAndBlockStatus } from '../../service/admin/User'; // Adjust the import path

const CitizenUnblocktable = () => {
  const { sabhaId } = getStoredData();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsersBySabhaAndBlockStatus(sabhaId, false); // Assuming isBlock is false
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchData();
  }, [sabhaId]);

  // Handle click on user row
  const handleClick = (userId) => {
    navigate(`/AdminViewCitizenDetailed/${userId}`); // Navigate to the detailed view with userId
  };

  return (
    <div className="complaint-table-with-details">
      <table>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.userId}
              className="complaint-table-with-details-row"
              onClick={() => handleClick(user.userId)} // Handle row click
              style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickable rows
            >
              <td className="complaint-table-with-details-row-column-1">
                <img src={x} alt="Profile Image" />
              </td>
              <td className="complaint-table-with-details-row-column-2">
                <h3>{user.userId}</h3>
              </td>
              <td className="complaint-table-with-details-row-column-3">
                <h3>{user.fullName}</h3>
              </td>
              <td className="complaint-table-with-details-row-column-4">
                <p>{user.phoneNumber}</p> {/* Replace email with phoneNumber */}
              </td>
              <td className="complaint-table-with-details-row-column-5">
                <button>
                  <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitizenUnblocktable;