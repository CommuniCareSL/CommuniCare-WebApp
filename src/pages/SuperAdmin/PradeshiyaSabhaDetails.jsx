import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const secondDropdownOptions = {
  Colombo: [
    {
      id: 1,
      name: 'Homagama',
      phone: '+94 112 345 678', // Sabha Phone
      email: 'homagama@example.com',
      address: '123 Main Street, Homagama',
      nic: '123456789V',
      adminName: 'Kumara Ranawira',
      adminPhone: '+94 112 999 999', // Admin Phone
      adminEmail: 'kumara@example.com', // Admin Email
      adminPassword: 'admin123', // Admin Password
    },
    {
      id: 2,
      name: 'Dehiwala',
      phone: '+94 114 567 890', // Sabha Phone
      email: 'dehiwala@example.com',
      address: '456 Beach Road, Dehiwala',
      nic: '987654321V',
      adminName: 'Sujani Perera',
      adminPhone: '+94 114 888 888', // Admin Phone
      adminEmail: 'sujani@example.com', // Admin Email
      adminPassword: 'admin456', // Admin Password
    },
  ],
  // Other districts...
};

const PradeshiyaSabhaDetails = () => {
  const { index } = useParams();

  const data = [
    { index: 1, district: 'Colombo', pradeshiyaSabha: 'Homagama' },
    { index: 2, district: 'Kalutara', pradeshiyaSabha: 'Agalwatta' },
    { index: 3, district: 'Colombo', pradeshiyaSabha: 'Dehiwala' },
    { index: 4, district: 'Gampaha', pradeshiyaSabha: 'Attanagalla' },
    { index: 5, district: 'Kalutara', pradeshiyaSabha: 'Matugama' },
    { index: 6, district: 'Gampaha', pradeshiyaSabha: 'Kelaniya' },
  ];

  const pradeshiyaSabha = data.find((item) => item.index === parseInt(index));

  if (!pradeshiyaSabha) {
    return <div>Pradeshiya Sabha not found!</div>;
  }

  const { district, pradeshiyaSabha: name } = pradeshiyaSabha;
  const initialDetails = secondDropdownOptions[district]?.find((d) => d.name === name);

  const [details, setDetails] = useState(initialDetails);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Simulate saving the updated details (you can replace this with actual save logic)
    setIsEditing(false);
    console.log('Saved details:', details);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900">
      <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-16 shadow-lg shadow-black rounded-lg">
        <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">Details</h1>
        <div className="space-y-6 text-white grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">  
            <h2 className="text-xl font-semibold">Admin Info</h2>
            {details && (
              <>
                <div>
                  <strong>Admin Name:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="adminName"
                      value={details.adminName}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.adminName
                  )}
                </div>
                <div>
                  <strong>NIC:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="nic"
                      value={details.nic}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.nic
                  )}
                </div>
                <div>
                  <strong>Phone:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="adminPhone"
                      value={details.adminPhone}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.adminPhone
                  )}
                </div>
                <div>
                  <strong>Email:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="adminEmail"
                      value={details.adminEmail}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.adminEmail
                  )}
                </div>
                <div>
                  <strong>Password:</strong>
                  {isEditing ? (
                    <input
                      type="password"
                      name="adminPassword"
                      value={details.adminPassword}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.adminPassword
                  )}
                </div>
              </>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Sabha Info</h2>
            {details && (
              <>
                <div>
                  <strong>District:</strong> {district}
                </div>
                <div>
                  <strong>Pradeshiya Sabha:</strong> {name}
                </div>
                <div>
                  <strong>Address:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={details.address}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.address
                  )}
                </div>
                <div>
                  <strong>Phone:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={details.phone}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.phone
                  )}
                </div>
                <div>
                  <strong>Email:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="email"
                      value={details.email}
                      onChange={handleChange}
                      className="text-black p-2 rounded"
                    />
                  ) : (
                    details.email
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="btn1"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PradeshiyaSabhaDetails;
