import React, { useState, useEffect } from 'react';
import { getAdminById, fetchSabhas } from '../../service/superAdmin/adminService';

const AdminForm = ({ mode, employeeId, onClose, onSubmit }) => {
  const [districts] = useState(['Colombo', 'Gampaha', 'Kalutara']);
  const [sabhas, setSabhas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedSabha, setSelectedSabha] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [errors, setErrors] = useState({});

  // Fetch admin details when in edit or view mode
  useEffect(() => {
    if (mode === 'edit' || mode === 'view') {
      fetchAdminDetails(employeeId);
    }
  }, [mode, employeeId]);

  const fetchAdminDetails = async (employeeId) => {
    try {
      const adminData = await getAdminById(employeeId);

      // Set all fields from the API response
      setName(adminData.name);
      setAddress(adminData.address);
      setNic(adminData.nic);
      setEmail(adminData.email);
      setPassword(adminData.password);
      setContactNo(adminData.contactNo || '');

      // Set district and sabhaId
      setSelectedDistrict(adminData.district);
      setSelectedSabha(adminData.sabhaId);

      // Fetch sabhas for the selected district
      if (adminData.district) {
        const sabhasData = await fetchSabhas(adminData.district);
        setSabhas(sabhasData);
      }
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  // Fetch sabhas when district is selected (for Add mode)
  useEffect(() => {
    if (selectedDistrict && mode === 'add') {
      fetchSabhas(selectedDistrict)
        .then((data) => setSabhas(data))
        .catch((error) => console.error('Error fetching sabhas:', error));
    }
  }, [selectedDistrict, mode]);

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedSabha(''); // Reset selected sabha when district changes
  };

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!selectedDistrict) errors.district = 'District is required';
    if (!selectedSabha) errors.sabha = 'Sabha is required';
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    const formData = {
      name,
      address,
      nic,
      email,
      password,
      contactNo,
      district: selectedDistrict,
      sabhaId: selectedSabha,
      departmentId: 2,
    };
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === 'add' ? 'Add Admin' : mode === 'edit' ? 'Edit Admin' : 'View Admin'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* District Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">District</label>
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'edit' || mode === 'view'}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-red-500 text-sm mt-1">{errors.district}</p>
              )}
            </div>

            {/* Sabha Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Sabha</label>
              <select
                value={selectedSabha}
                onChange={(e) => setSelectedSabha(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'edit' || mode === 'view'}
              >
                <option value="">Select Sabha</option>
                {sabhas.map((sabha) => (
                  <option key={sabha.sabhaId} value={sabha.sabhaId}>
                    {sabha.sabhaName}
                  </option>
                ))}
              </select>
              {errors.sabha && (
                <p className="text-red-500 text-sm mt-1">{errors.sabha}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'view'}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Address Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'view'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Number Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Contact Number</label>
              <input
                type="text"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'view'}
              />
            </div>

            {/* NIC Input */}
            <div>
              <label className="block text-sm font-medium mb-1">NIC</label>
              <input
                type="text"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'view'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'view'}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={mode === 'view'}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
            {mode !== 'view' && (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                {mode === 'add' ? 'Add Admin' : 'Save Changes'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;