import React, { useState } from 'react';
import '../../styles/components/Admin/TabView.css';
import '../../styles/components/Admin/TableView.css';

import CitizenUnblocktable from '../../components/Admin/CitizenUnblocktable';
import CitizenBlocktable from '../../components/Admin/CitizenBlocktable';

function TwoTabTableView() {
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

      <div className="Complaints-search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
        <button><span class="material-symbols-outlined">tune</span></button>
      </div>

      <ul className="tab-list">
        <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Unblock</li>
        <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Block</li>
      </ul>


      <div className="tab-content">
        {activeTab === 0 && <div className="content-for-the-status active slide-in">
          <CitizenUnblocktable />
          </div>}
        {activeTab === 1 && <div className="content-for-the-status active slide-in">
          <CitizenBlocktable />
          </div>}
      </div>
    </div>
  );
};

export default TwoTabTableView;
