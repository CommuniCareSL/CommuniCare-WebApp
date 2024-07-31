import React from 'react';

import Sidebar from '../../components/Admin/Sidebar';
// import AddedNewContractorDetails from '../../components/Admin/AddedNewContractorDetails';

import '../../styles/pages/Admin/AdminAddedOfficersDetails.css';
import '../../styles/components/Admin/CivilOfficerDetails.css';

function AdminViewCitizenDetailed() {
  return (
    <div>
      <Sidebar />
      <div className="admin-added-officer-details-home-page">
        <div className="admin-added-officer-details-title-container">
          <h3>Citizen Details</h3>
        </div>

          <div className="admin-added-officer-details-content">
            {/* <AddedNewContractorDetails /> */}
          </div>

      </div>
      
    </div>
  )
}

export default AdminViewCitizenDetailed
