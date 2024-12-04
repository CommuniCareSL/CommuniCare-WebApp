import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import inComplaintsData from './InComplaintData';

import profileImg from '../../assets/Admin/profile-img.jpg';
import x from '../../assets/SuperAdmin/LightLogo.png';

const ComplaintInprocessTable = () => {

    const handleClick = (e, path) => {
        e.preventDefault();
        // Handle the navigation or action here
        console.log('Navigating to:', path);
      };

  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

            {/* {inComplaintsData.map((complaint) => (
                    <a href="/AdminInprogressComplainDetails" onClick={(e) => handleClick(e, '/AdminInprogressComplainDetails')}>
                        <tr className="complaint-table-with-details-row">
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
                        <td className="complaint-table-with-details-row-column-4"> */}
                            {/* Optional button or content */}
                        {/* </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                            </button>
                        </td>
                        </tr>
                    </a>
                    ))} */}

                    {inComplaintsData.map((complaint) => (
                        <tr className="complaint-table-with-details-row" key={complaint.complaintId}>
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
                                <button onClick={(e) => handleClick(e, '/AdminInprogressComplainDetails')}>
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

export default ComplaintInprocessTable
