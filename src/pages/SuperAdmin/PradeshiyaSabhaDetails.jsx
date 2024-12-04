import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const secondDropdownOptions = {
  Colombo: [
    {
      id: 1,
      name: 'Homagama',
      phone: '+94 112 345 678',
      email: 'homagama@example.com',
      address: '123 Main Street, Homagama',
      nic: '123456789V',
      adminName: 'John Doe',
    },
    {
      id: 2,
      name: 'Dehiwala',
      phone: '+94 114 567 890',
      email: 'dehiwala@example.com',
      address: '456 Beach Road, Dehiwala',
      nic: '987654321V',
      adminName: 'Jane Smith',
    },
  ],
  Gampaha: [
    {
      id: 3,
      name: 'Attanagalla',
      phone: '+94 112 678 901',
      email: 'attanagalla@example.com',
      address: '789 Hilltop Drive, Attanagalla',
      nic: '123123123V',
      adminName: 'Alice Brown',
    },
    {
      id: 4,
      name: 'Kelaniya',
      phone: '+94 112 345 123',
      email: 'kelaniya@example.com',
      address: '321 Riverside Blvd, Kelaniya',
      nic: '321321321V',
      adminName: 'Bob White',
    },
  ],
  Kalutara: [
    {
      id: 5,
      name: 'Agalwatta',
      phone: '+94 116 789 012',
      email: 'agalwatta@example.com',
      address: '567 Mountain Pass, Agalwatta',
      nic: '456456456V',
      adminName: 'Charlie Green',
    },
    {
      id: 6,
      name: 'Matugama',
      phone: '+94 117 890 123',
      email: 'matugama@example.com',
      address: '890 Forest Lane, Matugama',
      nic: '654654654V',
      adminName: 'Diana Blue',
    },
  ],
};

const PradeshiyaSabhaDetails = () => {
  const { index } = useParams();
  const navigate = useNavigate();

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900 ">
      <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-16 shadow-lg shadow-black rounded-lg">
        <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6 ">
          Pradeshiya Sabha Details
        </h1>
        <div className="space-y-4 text-white">
          <p>
            <strong>Index:</strong> {pradeshiyaSabha.index}
          </p>
          <p>
            <strong>District:</strong> {district}
          </p>
          <p>
            <strong>Pradeshiya Sabha:</strong> {name}
          </p>
          {details && (
            <>
            <p>
                <strong>Admin Name:</strong> {details.adminName}
              </p>
              <p>
                <strong>Phone:</strong> {details.phone}
              </p>
              <p>
                <strong>Email:</strong> {details.email}
              </p>
              <p>
                <strong>Address:</strong> {details.address}
              </p>
              <p>
                <strong>NIC:</strong> {details.nic}
              </p>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PradeshiyaSabhaDetails;
