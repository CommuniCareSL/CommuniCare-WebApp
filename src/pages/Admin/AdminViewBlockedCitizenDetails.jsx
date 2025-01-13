import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';
import CitizenBlockDetails from '../../components/Admin/CitizenBlockDetails';

import '../../styles/pages/Admin/AdminAddedOfficersDetails.css';
import '../../styles/components/Admin/CivilOfficerDetails.css';

function AdminViewBlockedCitizenDetails() {
  const { userId } = useParams(); 
  return (
    <div>
      <Sidebar />
      <div className="admin-added-officer-details-home-page">
        <div className="admin-added-officer-details-title-container">
          <h3>Citizen Details</h3>
        </div>

          <div className="admin-added-officer-details-content">
            <CitizenBlockDetails userId={userId} />
          </div>

      </div>
      
    </div>
  )
}

export default AdminViewBlockedCitizenDetails
