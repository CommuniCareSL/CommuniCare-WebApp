import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Sidebar from '../../components/Admin/Sidebar';
import CitizenUnblockDetails from '../../components/Admin/CitizenUnblockDetails';
import '../../styles/pages/Admin/AdminAddedOfficersDetails.css';
import '../../styles/components/Admin/CivilOfficerDetails.css';

function AdminViewCitizenDetailed() {
  const { userId } = useParams(); // Extract userId from the URL parameters

  return (
    <div>
      <Sidebar />
      <div className="admin-added-officer-details-home-page">
        <div className="admin-added-officer-details-title-container">
          <h3>Citizen Details</h3>
        </div>

        <div className="admin-added-officer-details-content">
          {/* Pass userId as a prop to CitizenUnblockDetails */}
          <CitizenUnblockDetails userId={userId} />
        </div>
      </div>
    </div>
  );
}

export default AdminViewCitizenDetailed;