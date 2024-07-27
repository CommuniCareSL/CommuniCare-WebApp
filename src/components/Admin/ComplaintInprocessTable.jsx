import React from 'react';

import profileImg from '../../assets/Admin/profile-img.jpg';

const ComplaintInprocessTable = () => {
  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

                <a href="#">
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
                        {/* <button><span class="material-symbols-outlined">visibility</span></button> */}
                    </td>
                    <td className="complaint-table-with-details-row-column-5">
                        <button><span class="material-symbols-outlined">task_alt</span></button>
                    </td>
                    </tr>
                </a>

                <a href="#">
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
                        {/* <button><span class="material-symbols-outlined">visibility</span></button> */}
                    </td>
                    <td className="complaint-table-with-details-row-column-5">
                    <button><span class="material-symbols-outlined">task_alt</span></button>
                    </td>
                    </tr>
                </a>

                <a href="#">
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
                        {/* <button><span class="material-symbols-outlined">visibility</span></button> */}
                    </td>
                    <td className="complaint-table-with-details-row-column-5">
                    <button><span class="material-symbols-outlined">task_alt</span></button>
                    </td>
                    </tr>
                </a>

                <a href="#">
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
                        {/* <button><span class="material-symbols-outlined">visibility</span></button> */}
                    </td>
                    <td className="complaint-table-with-details-row-column-5">
                    <button><span class="material-symbols-outlined">task_alt</span></button>
                    </td>
                    </tr>
                </a>

            </tbody>
        </table>
    </div>
  )
}

export default ComplaintInprocessTable
