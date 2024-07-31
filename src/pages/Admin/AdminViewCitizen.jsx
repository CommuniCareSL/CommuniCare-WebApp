import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import TwoTabTableView from '../../components/Admin/TwoTabTableView';

import '../../styles/pages/Admin/AdminViewCitizen.css';

function AdminViewCitizen() {
  return (
    <div>
      <Sidebar />
      <div className="admin-view-citizen-details-home-page">
        <div className="admin-view-citizen-details-title-container">
          <h3>View Citizen</h3>
        </div>

          <div className="admin-view-citizen-details-table-tab-view-for-complaint-content">
            <TwoTabTableView />
          </div>

      </div>
    </div>
  )
}

export default AdminViewCitizen
