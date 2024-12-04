import React from 'react';

import profileImg from '../../assets/Admin/profile-img.jpg';
import x from '../../assets/SuperAdmin/LightLogo.png';

const CitizenBlocktable = () => {
  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

                <a href="/AdminViewBlockedCitizenDetails" onClick={(e) => handleClick(e, '/AdminViewBlockedCitizenDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Indewari Gamage</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>indewarigamage@gmail.com</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewBlockedCitizenDetails" onClick={(e) => handleClick(e, '/AdminViewBlockedCitizenDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Palitha Siriwardana</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>palithasiriwardana@gmail.com</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewBlockedCitizenDetails" onClick={(e) => handleClick(e, '/AdminViewBlockedCitizenDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Samanatha Badderama</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>samanthabadderana@gmail.com</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewBlockedCitizenDetails" onClick={(e) => handleClick(e, '/AdminViewBlockedCitizenDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>shila abewardana</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>shilaabewardana@gmail.com</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewBlockedCitizenDetails" onClick={(e) => handleClick(e, '/AdminViewBlockedCitizenDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Miluvan Gunasekara</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>miluvangunasekara@gmail.com</p>
                        </td>
                        <td className="complaint-table-with-details-row-column-4">
                            {/* <button onClick={(e) => e.stopPropagation()}><span class="material-symbols-outlined">visibility</span></button> */}
                        </td>
                        <td className="complaint-table-with-details-row-column-5">
                            <button><span class="material-symbols-outlined">arrow_forward_ios</span></button>
                        </td>
                    </tr>
                </a>

                <a href="/AdminViewBlockedCitizenDetails" onClick={(e) => handleClick(e, '/AdminViewBlockedCitizenDetails')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Siripala Gamage</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>sirigamage@gmail.com</p>
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

export default CitizenBlocktable
