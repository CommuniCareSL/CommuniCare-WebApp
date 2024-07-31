import React from 'react';

import Sidebar from '../../components/Admin/Sidebar';
import AddedNewOfficers from '../../components/Admin/AddedNewOfficers';

import '../../styles/pages/Admin/AdminNewOfficer.css';

function AdminNewOfficer() {
  return (
    <div>
        <Sidebar />
        <div className="admin-add-new-officers-home-page">
            <div className="admin-add-new-officers-home-page-title-container">
                <h3>Add New Officer</h3>
            </div>

            <div className="admin-add-new-officer-table-view">

              {/* officer-table */}
              <div className="admin-added-new-officer-table">

                <div className="admin-add-new-officer-table-title">
                  <h3>Added  Officers</h3>
                </div>

                <div className="admin-add-new-officer-table-seperator" style={{borderBottom: '2px solid #0991FF'}}></div>


                <AddedNewOfficers />


              </div>

              {/* adding-form */}
              <div className="admin-adding-new-officer-form">

              </div>

            </div>

        </div>
    </div>
  )
}

export default AdminNewOfficer

