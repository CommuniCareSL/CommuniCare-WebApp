import React, { useState, useEffect } from 'react';
import UserService from "../../service/UserService";
import complaintsData from './complaintsData.js';

import profileImg from '../../assets/Admin/profile-img.jpg';
import x from '../../assets/SuperAdmin/LightLogo.png';

const ComplaintUnseenTable = () => {

    // const [complaints, setComplaints] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchComplaints = async () => {
    //         try {
    //             const token = localStorage.getItem('authToken'); // Adjust how you retrieve the token
    //             const data = await UserService.getComplaintsWithStatusZero(token);
    //             setComplaints(data);
    //         } catch (err) {
    //             setError('Failed to fetch complaints');
    //             console.error(err.message);
    //         }
    //     };

    //     fetchComplaints();
    // }, []);

    const handleClick = (e, path) => {
        e.preventDefault();
        // Handle the navigation or action here
        console.log('Navigating to:', path);
      };


  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

            {/* {complaints && complaints.length > 0 ? (
                complaints.map((officer, index) => (
                    <a href="/AdminUnseenComplaintDetails" onClick={(e) => handleClick(e, '/AdminUnseenComplaintDetails')}>
                        <tr className="complaint-table-with-details-row">
                            <td className="complaint-table-with-details-row-column-1">
                                <img src={x} alt="Profile Image" />
                            </td>
                            <td className="complaint-table-with-details-row-column-2">
                                <h3>user name</h3>
                                <p>complaint submitted date</p>
                            </td>
                            <td className="complaint-table-with-details-row-column-3">
                                <p>Complaint title/Category(Road hazards)</p>
                            </td>
                            <td className="complaint-table-with-details-row-column-4"> */}
                                {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                            {/* </td>
                            <td className="complaint-table-with-details-row-column-5">
                                <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                            </td>
                        </tr>
                    </a>
                ))
            ) : (
                <tr>
                    <td colSpan="4" style={{ textAlign: 'center', verticalAlign: 'middle' }}>No Pending Complaints found</td>
                </tr>

            )} */}


            {complaintsData.map((complaint) => (
                    <a href="/AdminUnseenComplaintDetails" onClick={(e) => handleClick(e, '/AdminUnseenComplaintDetails')}>
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
                        <td className="complaint-table-with-details-row-column-4">
                            {/* Optional button or content */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                            </button>
                        </td>
                        </tr>
                    </a>
                    ))}

            </tbody>
        </table>
    </div>
  )
}

export default ComplaintUnseenTable
