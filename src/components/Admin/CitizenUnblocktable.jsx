import React from 'react';

import profileImg from '../../assets/Admin/profile-img.jpg';
import x from '../../assets/SuperAdmin/LightLogo.png';

const CitizenUnblocktable = () => {
  return (
    <div className="complaint-table-with-details">
        <table>
            <tbody>

                <a href="/AdminViewCitizenDetailed" onClick={(e) => handleClick(e, '/AdminViewCitizenDetailed')}>
                    <tr className="complaint-table-with-details-row">
                        <td className="complaint-table-with-details-row-column-1">
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Dasun Kariyavasam</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>dasunkarunarathna@gmail.com</p>
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
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Kalana Hansana</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>hansanawicrama043@gmail.com</p>
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
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Thrima Hansani</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>thrimahansani@gmail.com</p>
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
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Mihirada Methmini</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>methminisirivardana@gmail.com</p>
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
                            <img src={x} alt="Profile Image" />
                        </td>
                        <td className="complaint-table-with-details-row-column-2">
                            <h3>Piumi Hansana</h3>
                        </td>
                        <td className="complaint-table-with-details-row-column-3">
                            <p>piumihansani@gmail.com</p>
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
