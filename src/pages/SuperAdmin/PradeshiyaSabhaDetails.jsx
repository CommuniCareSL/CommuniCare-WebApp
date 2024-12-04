import React from 'react';
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
    },
  ],
  Kalutara: [
    {
      id: 1,
      name: 'Agalwatta',
      phone: '+94 112 345 679',
      email: 'agalwatta@example.com',
      address: '789 Temple Road, Agalwatta',
      nic: '123123123V',
      adminName: 'Ravi Kumara',
      adminPhone: '+94 112 345 123',
      adminEmail: 'ravi@example.com',
    },
    {
      id: 2,
      name: 'Matugama',
      phone: '+94 113 456 789',
      email: 'matugama@example.com',
      address: '123 River Road, Matugama',
      nic: '321654987V',
      adminName: 'Priya Perera',
      adminPhone: '+94 113 555 555',
      adminEmail: 'priya@example.com',
    },
  ],
  Gampaha: [
    {
      id: 1,
      name: 'Attanagalla',
      phone: '+94 114 345 678',
      email: 'attanagalla@example.com',
      address: '987 Main Street, Attanagalla',
      nic: '456789123V',
      adminName: 'Jayantha Silva',
      adminPhone: '+94 114 666 666',
      adminEmail: 'jayantha@example.com',
    },
    {
      id: 2,
      name: 'Kelaniya',
      phone: '+94 116 567 890',
      email: 'kelaniya@example.com',
      address: '555 River Road, Kelaniya',
      nic: '789456123V',
      adminName: 'Dinesh Wickramasinghe',
      adminPhone: '+94 116 777 777',
      adminEmail: 'dinesh@example.com',
    },
  ],
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
  const details = secondDropdownOptions[district]?.find((d) => d.name === name);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900">
      <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-16 shadow-lg shadow-black rounded-lg">
        <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">
          Sabha Details
        </h1>
        <div className="space-y-6 text-white grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Admin Info</h2>
            {details && (
              <>
                <p>
                  <strong>Admin Name:</strong> {details.adminName}
                </p>
                <p>
                  <strong>NIC:</strong> {details.nic}
                </p>
                <p>
                  <strong>Phone:</strong> {details.adminPhone}
                </p>
                <p>
                  <strong>Email:</strong> {details.adminEmail}
                </p>
              </>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Sabha Info</h2>
            {details && (
              <>
                <p>
                  <strong>District:</strong> {district}
                </p>
                <p>
                  <strong>Pradeshiya Sabha:</strong> {name}
                </p>
                <p>
                  <strong>Address:</strong> {details.address}
                </p>
                <p>
                  <strong>Phone:</strong> {details.phone}
                </p>
                <p>
                  <strong>Email:</strong> {details.email}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PradeshiyaSabhaDetails;
