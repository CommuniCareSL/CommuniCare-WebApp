import React from 'react';

import ClickIcon from '../../assets/Admin/click.png';
import profileImg from '../../assets/Admin/profile-img.jpg';

function AbsentOfficertable() {
  return (
    <>
      <a href="">
        <div className="admin-dashboard-linked-title-bar">
          <h3>Approved Absent Request</h3>
          <img src={ClickIcon} alt="Click" />
        <h3>...</h3>
        </div>
      </a>

      <div className="admin-dashbaord-link-table-seperator" style={{borderBottom: '2px solid #0991FF'}}></div>

      <div className="admin-dashboard-absent-approved">
        <table>
          <tbody>

            <tr className="admin-dashboard-absent-list">
              <td className="admin-dashboard-absent-list-column-1">
                <img src={profileImg} alt="Profile Image" />
              </td>
              <td className="admin-dashboard-absent-list-column-2">
                <h4>user name</h4>
                <p>leave start date and range</p>
              </td>
            </tr>

            <tr className="admin-dashboard-absent-list">
              <td className="admin-dashboard-absent-list-column-1">
                <img src={profileImg} alt="Profile Image" />
              </td>
              <td className="admin-dashboard-absent-list-column-2">
                <h4>user name</h4>
                <p>leave start date and range</p>
              </td>
            </tr>

            <tr className="admin-dashboard-absent-list">
              <td className="admin-dashboard-absent-list-column-1">
                <img src={profileImg} alt="Profile Image" />
              </td>
              <td className="admin-dashboard-absent-list-column-2">
                <h4>user name</h4>
                <p>leave start date and range</p>
              </td>
            </tr>

            <tr className="admin-dashboard-absent-list">
              <td className="admin-dashboard-absent-list-column-1">
                <img src={profileImg} alt="Profile Image" />
              </td>
              <td className="admin-dashboard-absent-list-column-2">
                <h4>user name</h4>
                <p>leave start date and range</p>
              </td>
            </tr>

            <tr className="admin-dashboard-absent-list">
              <td className="admin-dashboard-absent-list-column-1">
                <img src={profileImg} alt="Profile Image" />
              </td>
              <td className="admin-dashboard-absent-list-column-2">
                <h4>user name</h4>
                <p>leave start date and range</p>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
      
  )
}

export default AbsentOfficertable
