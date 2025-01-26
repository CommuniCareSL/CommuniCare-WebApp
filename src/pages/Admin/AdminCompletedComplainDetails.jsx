import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';

import '../../styles/pages/Admin/AdminUnseenComplaintDetails.css';

import ComplaintsDetails from '../../components/Admin/ComplaintsDetails';

import completeImage from '../../assets/Admin/complete.png';

function AdminCompletedComplainDetails() {
    return (
        <div>
          <Sidebar />
    
          <div className="admin-unseen-complaints-details-home-page">
            <div className="unseen-complaint-title-container">
              <h3>Completed Complaints</h3>
            </div>
    
            <div className="admin-unseen-complain-details-panel">
              <div className="admin-unseen-complain-detailed-panel-title">
                <h3>Complaint Category Name / Department</h3>
              </div>
    
              <div style={{borderBottom: '2px solid #0991FF'}}></div>
    
              <ComplaintsDetails />
    
            </div>
    
          </div>
    
        </div>
      )
}

export default AdminCompletedComplainDetails;
