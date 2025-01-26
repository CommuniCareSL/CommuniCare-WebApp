import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import complaintCompleted from './complaintCompleted';

import completeImage from '../../assets/Admin/complete.png';
import x from '../../assets/SuperAdmin/LightLogo.png';

const ComplaintCompletedTable = () => {
    const navigate = useNavigate(); // Initialize navigation

    const handleClick = () => {
        navigate('/AdminCompletedComplainDetails'); // Navigate when clicking a row
    };

    return (
        <div className="complaint-table-with-details">
            <table>
                <tbody>
                    {complaintCompleted.map((complaint) => (
                        <tr 
                            className="complaint-table-with-details-row" 
                            key={complaint.complaintId}
                            onClick={handleClick} // Click event to navigate
                            style={{ cursor: 'pointer' }} // Make row clickable
                        >
                            <td className="complaint-table-with-details-row-column-1">
                                <img src={x} alt="Profile Image" />
                            </td>
                            <td className="complaint-table-with-details-row-column-2">
                                <h3>{complaint.userName}</h3>
                                <p>{complaint.complaintDate}</p>
                            </td>
                            <td className="complaint-table-with-details-row-column-3">
                                <p>{complaint.complaintCategory}</p>
                            </td>
                            <td className="complaint-table-with-details-row-column-4">
                                {/* Optional button or content */}
                            </td>
                            <td className="complaint-table-with-details-row-column-5">
                                <img src={completeImage} alt="Completed Status" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComplaintCompletedTable;
