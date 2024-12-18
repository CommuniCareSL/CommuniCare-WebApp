import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SuperAdmin/Sidebar';
import '../../styles/pages/SuperAdmin/Registered.css';

export const Newregistration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { index: 1, district: 'Colombo', pradeshiyaSabha: 'Homagama' },
    { index: 2, district: 'Kalutara', pradeshiyaSabha: 'Agalwatta' },
    { index: 3, district: 'Colombo', pradeshiyaSabha: 'Dehiwala' },
    { index: 4, district: 'Gampaha', pradeshiyaSabha: 'Attanagalla' },
    { index: 5, district: 'Kalutara', pradeshiyaSabha: 'Matugama' },
    { index: 6, district: 'Gampaha', pradeshiyaSabha: 'Kelaniya' }
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editDistrict, setEditDistrict] = useState('');
  const [editPradeshiyaSabha, setEditPradeshiyaSabha] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEdit = (item) => {
    setEditingIndex(item.index); // Set the index being edited
    setEditDistrict(item.district); // Prefill current district
    setEditPradeshiyaSabha(item.pradeshiyaSabha); // Prefill current pradeshiya sabha
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.index === editingIndex
          ? { ...item, district: editDistrict, pradeshiyaSabha: editPradeshiyaSabha }
          : item
      )
    );
    setEditingIndex(null); // Exit edit mode
  };

  const handleCancel = () => {
    setEditingIndex(null); // Exit edit mode without saving
  };

  const filteredData = data.filter(item =>
    item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.pradeshiyaSabha.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Sidebar />
      <div className="Sadmin-table-home-page">
        <div className="Sadmin-table-title-container">
          <h3 style={{ marginLeft: '500px' }}>Pradeshiya Sabha</h3>
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

            <div>
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
                      {editingIndex === item.index ? (
                        <>
                          <td className="px-4 py-2 text-center">{item.index}</td>
                          <td className="px-4 py-2 text-center">
                            <input
                              type="text"
                              value={editDistrict}
                              onChange={(e) => setEditDistrict(e.target.value)}
                              className="border rounded px-2 py-1"
                            />
                          </td>
                          <td className="px-4 py-2 text-center">
                            <input
                              type="text"
                              value={editPradeshiyaSabha}
                              onChange={(e) => setEditPradeshiyaSabha(e.target.value)}
                              className="border rounded px-2 py-1"
                            />
                          </td>
                          <td className="px-4 py-2 text-center">
                            <button className="btn1" onClick={handleSave}>Save</button>
                            <button className="btn1 ml-2" onClick={handleCancel}>Cancel</button>
                          </td>
                          <td className="px-4 py-2 text-center"></td>
                        </>
                      ) : (
                        <>
                          <td className="px-4 py-2 text-center">{item.index}</td>
                          <td className="px-4 py-2 text-center">{item.district}</td>
                          <td className="px-4 py-2 text-center">{item.pradeshiyaSabha}</td>
                          <td className="px-4 py-2 text-center">
                            <Link to={`/pradeshiya-sabha-details/${item.index}`}>
                              <button className="btn1">View</button>
                            </Link>
                          </td>
                          <td className="px-4 py-2 text-center">
                            <div className="flex justify-center space-x-2">
                            <Link to={`/pradeshiya-sabha-details/${item.index}`}>
                              <button className="btn1">Edit</button>
                            </Link>
                            </div>
                          </td>
                        </>
                      )}
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
};

export default Newregistration;
