import React, { useState } from 'react';

import Sidebar from '../../components/Admin/Sidebar';
import AddedNewOfficers from '../../components/Admin/AddedNewOfficers';
import AddNewOfficerForm from '../../components/Admin/AddNewOfficerForm';

import '../../styles/pages/Admin/AdminNewOfficer.css';

function AdminNewOfficer() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (index) => {
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

                <div className="admin-add-new-officer-table-title-search">
                  <div className="admin-add-new-officer-title">
                    <h3>Added Officers</h3>
                  </div>
                  <div className="admin-add-new-officer-table-search">
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
                    <button><span class="material-symbols-outlined">tune</span></button>
                  </div>
                </div>

                <div className="admin-add-new-officer-table-seperator" style={{borderBottom: '2px solid #0991FF', width: '100%'}}></div>


                <AddedNewOfficers />


              </div>

              {/* adding-form */}
              <div className="admin-adding-new-officer-form">

                <div className="admin-add-new-officer-form-title">
                  <h3>Add  Officers</h3>
                </div>

                <div className="admin-add-new-officer-table-seperator" style={{borderBottom: '2px solid #0991FF', width: '100%'}}></div>

                <AddNewOfficerForm />

              </div>

            </div>

        </div>
    </div>
  )
}

export default AdminNewOfficer

