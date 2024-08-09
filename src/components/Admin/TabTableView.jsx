import React, { useState } from 'react';

import '../../styles/components/Admin/TabView.css';
import '../../styles/components/Admin/TableView.css';

import ComplaintUnseenTable from '../../components/Admin/ComplaintUnseenTable';
import ComplaintInprocessTable from '../../components/Admin/ComplaintInprocessTable';
import ComplaintCompletedTable from '../../components/Admin/ComplaintCompletedTable';

function TabTableView() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (index) => {
    setActiveTab(index);
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="tabs-or-status-of-complaints">

      <div className="Complaints-search-bar-and-fliter-dropdown">
        <div className="complaints-search-bar">
          <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
        </div>
        <div className="complaints-filter-dropdown">
          
        </div>
        
        {/* <button><span class="material-symbols-outlined">tune</span></button> */}
      </div>

      <ul className="tab-list">
        <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Unseen</li>
        <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Inprogress</li>
        <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Completed</li>
      </ul>


      <div className="tab-content">
        {activeTab === 0 && <div className="content-for-the-status active slide-in">
          <ComplaintUnseenTable />
          </div>}
        {activeTab === 1 && <div className="content-for-the-status active slide-in">
          <ComplaintInprocessTable />
          </div>}
        {activeTab === 2 && <div className="content-for-the-status active slide-in">
          <ComplaintCompletedTable />
          </div>}
      </div>
    </div>
  );
};

export default TabTableView;
