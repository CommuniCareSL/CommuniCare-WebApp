import React, { useState } from 'react';
import '../../styles/components/Admin/TabTableView.css';

import ComplaintUnseenTable from '../../components/Admin/ComplaintUnseenTable';

function TabTableView() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-or-status-of-complaints">
      <ul className="tab-list">
        <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Unseen</li>
        <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Inprocess</li>
        <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Completed</li>
      </ul>
      <div className="tab-content">
        {activeTab === 0 && <div className="content-for-the-status active slide-in">
          <ComplaintUnseenTable />
          </div>}
        {activeTab === 1 && <div className="content-for-the-status active slide-in">
          
          </div>}
        {activeTab === 2 && <div className="content-for-the-status active slide-in">
          
          </div>}
      </div>
    </div>
  );
};

export default TabTableView;
