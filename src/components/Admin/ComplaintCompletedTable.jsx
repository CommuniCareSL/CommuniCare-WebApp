import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import complaintCompleted from './complaintCompleted';

import profileImg from '../../assets/Admin/profile-img.jpg';
import completeImage from '../../assets/Admin/complete.png';
import x from '../../assets/SuperAdmin/LightLogo.png';

const ComplaintCompletedTable = () => {
  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

                {/* <a href="/AdminCompletedComplainDetails" onClick={(e) => handleClick(e, '/AdminCompletedComplainDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={profileImg} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>user name</h3>
                            <p>complaint submitted date</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>Complaint title/Category</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                           
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a> */}
                
                {complaintCompleted.map((complaint) => (
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
                                {/* <button onClick={(e) => handleClick(e, '/AdminInprogressComplainDetails')}>
                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                </button> */}
                                <img src={completeImage} alt="Profile Image" />
                            </td>
                        </tr>
                    ))}

                

            </tbody>
        </table>
    </div>
  )
}

export default ComplaintCompletedTable
