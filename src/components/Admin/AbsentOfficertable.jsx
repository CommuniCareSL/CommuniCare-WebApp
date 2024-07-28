import React from 'react';

import ClickIcon from '../../assets/Admin/click.png';

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
            
          </tbody>
        </table>
      </div>

    </>
      
  )
}

export default AbsentOfficertable
