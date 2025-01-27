import React, { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import Sidebar from '../../components/Health/Sidebar'; // Adjust the import path as needed
import { getStoredData } from "../../hooks/localStorage";
import axios from "axios";
import { BASE_URL } from "../../constants/config";

const UserDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const { sabhaId } = getStoredData(); // Get sabhaId from localStorage

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user`, {
          params: { sabhaId }, // Pass sabhaId as a query parameter
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [sabhaId]); // Re-fetch when sabhaId changes

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Sidebar>
      <div className="w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Details</h1>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">User ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Full Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">ID Number</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.userId}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-600">#{user.userId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {user.fullName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">{user.fullName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.idNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.phoneNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default UserDetails;