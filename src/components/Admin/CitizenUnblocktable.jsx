import React from 'react';

import profileImg from '../../assets/Admin/profile-img.jpg';

const CitizenUnblocktable = () => {
  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

                <a href="/AdminViewCitizenDetailed" onClick={(e) => handleClick(e, '/AdminViewCitizenDetailed')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={profileImg} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>user name</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>Citizen's Regional Office</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewCitizenDetailed" onClick={(e) => handleClick(e, '/AdminViewCitizenDetailed')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={profileImg} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>user name</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>Citizen's Regional Office</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewCitizenDetailed" onClick={(e) => handleClick(e, '/AdminViewCitizenDetailed')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={profileImg} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>user name</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>Citizen's Regional Office</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewCitizenDetailed" onClick={(e) => handleClick(e, '/AdminViewCitizenDetailed')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={profileImg} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>user name</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>Citizen's Regional Office</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewCitizenDetailed" onClick={(e) => handleClick(e, '/AdminViewCitizenDetailed')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={profileImg} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>user name</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>Citizen's Regional Office</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>


            </tbody>
        </table>
    </div>
  )
}

export default CitizenUnblocktable
