import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import complaintsData from './complaintsData.js';
import { useNavigate } from "react-router-dom";

import profileImg from '../../assets/Admin/profile-img.jpg';
import x from '../../assets/SuperAdmin/LightLogo.png';

const ComplaintUnseenTable = () => {

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };


  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>
                {complaintsData.map((complaint, index) => (
                    <tr 
                        key={index}
                        className="complaint-table-with-details-row"
                        onClick={() => handleClick('/AdminUnseenComplaintDetails')}
                        style={{ cursor: "pointer" }} // Indicate it's clickable
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
                        <td className="complaint-table-with-details-row-column-4"></td>
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
  )
}

export default ComplaintUnseenTable
