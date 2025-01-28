import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SuperAdmin/Sidebar';
import { getAllAdmins, addAdmin, updateAdmin } from '../../service/superAdmin/adminService';
import AdminForm from '../../components/SuperAdmin/AdminForm';
import '../../styles/pages/SuperAdmin/Registered.css';

export const Registered = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [admins, setAdmins] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await getAllAdmins(2);
      setAdmins(response);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddAdmin = () => {
    setFormMode('add');
    setSelectedEmployeeId(null);
    setIsFormOpen(true);
  };

  const handleEditAdmin = (employeeId) => {
    setFormMode('edit');
    setSelectedEmployeeId(employeeId);
    setIsFormOpen(true);
  };

  const handleViewAdmin = (employeeId) => {
    setFormMode('view');
    setSelectedEmployeeId(employeeId);
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (formMode === 'add') {
        const response = await addAdmin({ ...formData, departmentId: 2 });
        setAdmins([...admins, response.data]);
      } else if (formMode === 'edit') {
        const updatedAdmin = { ...formData, employeeId: selectedEmployeeId };
        await updateAdmin(updatedAdmin);
        setAdmins(prevAdmins =>
          prevAdmins.map(admin =>
            admin.employeeId === selectedEmployeeId ? updatedAdmin : admin
          )
        );
      }
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const filteredAdmins = admins.filter(admin =>
    admin.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admin.sabhaName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sidebar>
      <div className="p-6 overflow-y-auto">
        <div className="Sadmin-table-home-page">
          <div className="Sadmin-table-title-container">
            <h3>Sabha Admins</h3>
          </div>

          <div className="Sadmin-table-table-tab-view-for-table-content">
            <div className="tabCon">
              <div className="newreg-search mb-4 flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={handleAddAdmin}
                >
                  Add Admin
                </button>
                <div className="newreg-search-input relative ml-4">
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
                      <th className="px-4 py-2 text-center">User Id</th>
                      <th className="px-4 py-2 text-center">Name</th>
                      <th className="px-4 py-2 text-center">District</th>
                      <th className="px-4 py-2 text-center">Pradeshiya Sabha</th>
                      <th className="px-4 py-2 text-center">View Details</th>
                      <th className="px-4 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAdmins.map((admin) => (
                      <tr key={admin.employeeId} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="px-4 py-2 text-center">{admin.employeeId}</td>
                        <td className="px-4 py-2 text-center">{admin.name}</td>
                        <td className="px-4 py-2 text-center">{admin.district}</td>
                        <td className="px-4 py-2 text-center">{admin.sabhaName}</td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="btn1"
                            onClick={() => handleViewAdmin(admin.employeeId)}
                          >
                            View
                          </button>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <div className="flex justify-center space-x-2">
                            <button
                              className="btn1"
                              onClick={() => handleEditAdmin(admin.employeeId)}
                            >
                              Edit
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

        {/* AdminForm Modal */}
        {isFormOpen && (
          <AdminForm
            mode={formMode}
            employeeId={selectedEmployeeId}
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </Sidebar>
  );
};

export default Registered;