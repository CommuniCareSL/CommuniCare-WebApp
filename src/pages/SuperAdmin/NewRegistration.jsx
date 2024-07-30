import React, { useState } from 'react';
import '../../styles/pages/SuperAdmin/NewRegistration.css';
import 'boxicons/css/boxicons.min.css';
import Sidebar from '../../components/SuperAdmin/Sidebar';

export const Newregistration = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const data = [
    { index: 1, district: 'District A', pradeshiyaSabha: 'Suburb X' },
    { index: 2, district: 'District A', pradeshiyaSabha: 'Suburb Y' },
    { index: 3, district: 'District B', pradeshiyaSabha: 'Town Z' },
    { index: 4, district: 'District C', pradeshiyaSabha: 'Village W' },
    { index: 5, district: 'District D', pradeshiyaSabha: 'City V' },
    { index: 6, district: 'District E', pradeshiyaSabha: 'Suburb U' }
  ];
  

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.pradeshiyaSabha.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Sidebar />
      <div className="admin-complaints-home-page">
        <div className="complaint-title-container">
          <h3>Registered Pradeshiya Sabha</h3>
        </div>
        <div className="admin-complaint-table-tab-view">
          <div className="new-registration-page">
            <div className="registration-content">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="table-container">
                <table className="registration-table">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>District</th>
                      <th>Pradeshiya Sabha</th>
                      <th>View Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item) => (
                      <tr key={item.index}>
                        <td>{item.index}</td>
                        <td>{item.district}</td>
                        <td>{item.pradeshiyaSabha}</td>
                        <td><button className="view-btn">View</button></td>
                        <td>
                          <div className="action-buttons">
                            <button className="accept-btn">Accept</button>
                            <button className="reject-btn">Reject</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newregistration;
