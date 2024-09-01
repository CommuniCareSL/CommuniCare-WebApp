import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SuperAdmin/Sidebar';
import '../../styles/pages/SuperAdmin/Registered.css';

export const Newregistration = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const data = [
    { index: 1, district: 'Colombo', pradeshiyaSabha: 'Homagama' },
    { index: 2, district: 'Kalutara', pradeshiyaSabha: 'Agalwatta' },
    { index: 3, district: 'Colombo', pradeshiyaSabha: 'Dehiwala' },
    { index: 4, district: 'Gampaha', pradeshiyaSabha: 'Attanagalla' },
    { index: 5, district: 'Kalutara', pradeshiyaSabha: 'Matugama' },
    { index: 6, district: 'Gampaha', pradeshiyaSabha: 'Kelaniya' }
  ];

  const filteredData = data.filter(item =>
    item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.pradeshiyaSabha.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Sidebar />
      <div className="Sadmin-table-home-page">
        <div className="Sadmin-table-title-container">
        <h3 style={{marginLeft:'500px'}}>Registered Pradeshiya Sabha</h3>
        </div>


          <div className="Sadmin-table-table-tab-view-for-table-content">

          <div className="tabCon">
          <div className="newreg-search mb-4 flex justify-end">
            <div className="newreg-search-input relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="">
            <table className="newreg-table w-full table-auto">
              <thead className="bg-gradient-to-r from-black to-blue-900 text-white">
                <tr>
                  <th className="px-4 py-2 text-center">Index</th>
                  <th className="px-4 py-2 text-center">District</th>
                  <th className="px-4 py-2 text-center">Pradeshiya Sabha</th>
                  <th className="px-4 py-2 text-center">View Details</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2 text-center">{item.index}</td>
                    <td className="px-4 py-2 text-center">{item.district}</td>
                    <td className="px-4 py-2 text-center">{item.pradeshiyaSabha}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="btn1">
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="btn1">
                          Edit
                        </button>
                        <button className="btn1">
                          Delete
                        </button>
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
  );
}

export default Newregistration;
