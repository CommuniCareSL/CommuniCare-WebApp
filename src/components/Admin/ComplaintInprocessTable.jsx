import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import inComplaintsData from './InComplaintData';

import x from '../../assets/SuperAdmin/LightLogo.png';

const ComplaintInprocessTable = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = (path) => {
        navigate(path); // Navigate to the given path
    };

    return (
        <div className="complaint-table-with-details">
            <table>
                <tbody>
                    {inComplaintsData.map((complaint) => (
                        <tr 
                            className="complaint-table-with-details-row" 
                            key={complaint.complaintId}
                            onClick={() => handleClick('/AdminInprogressComplainDetails')}
                            style={{ cursor: 'pointer' }} // Make the row clickable
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
                                <button onClick={(e) => { 
                                    e.stopPropagation(); // Prevent row click from firing
                                    handleClick('/AdminInprogressComplainDetails'); 
                                }}>
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

export default ComplaintInprocessTable;
