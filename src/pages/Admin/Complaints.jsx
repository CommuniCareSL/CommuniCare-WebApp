import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import TabTableView from '../../components/Admin/TabTableView';

import '../../styles/pages/Admin/Complaint.css';


function Complaints() {
  return (
    <div>
   
      <Sidebar />
      <div className="admin-complaints-home-page">
        <div className="complaint-title-container">
          <h3>Received Complaints</h3>
        </div>

        <div className="admin-complaint-table-tab-view">
          <TabTableView />
        </div>

      </div>
      

    </div>
  )
}

export default Complaints
