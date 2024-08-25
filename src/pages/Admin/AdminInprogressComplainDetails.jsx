import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';

import '../../styles/pages/Admin/AdminUnseenComplaintDetails.css';

import UnseenComplaintsDetails from '../../components/Admin/UnseenComplaintsDetails';

function AdminInprogressComplainDetails() {
    return (
        <div>
          <Sidebar />
    
          <div className="admin-unseen-complaints-details-home-page">
            <div className="unseen-complaint-title-container">
              <h3>Unseen Complaints</h3>
            </div>
    
            <div className="admin-unseen-complain-details-panel">
              <div className="admin-unseen-complain-detailed-panel-title">
                <h3>Complaint Category Name / Department</h3>
              </div>
    
              <div style={{borderBottom: '2px solid #0991FF'}}></div>
    
              <UnseenComplaintsDetails />
    
            </div>
    
          </div>
    
        </div>
      )
}

export default AdminInprogressComplainDetails
