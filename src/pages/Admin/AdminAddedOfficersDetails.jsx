import React from 'react';

import Sidebar from '../../components/Admin/Sidebar';
import AddedCivilOfficerDetails from '../../components/Admin/AddedCivilOfficerDetails';

import '../../styles/pages/Admin/AdminAddedOfficersDetails.css';
import '../../styles/components/Admin/CivilOfficerDetails.css';

function AdminAddedOfficersDetails() {
  return (
    <div>
      <Sidebar />
      <div className="admin-added-officer-details-home-page">
        <div className="admin-added-officer-details-title-container">
          <h3>Added Civil Officer</h3>
        </div>

          <div className="admin-added-officer-details-content">
            <AddedCivilOfficerDetails />
          </div>

      </div>
      
    </div>
  )
}

export default AdminAddedOfficersDetails
