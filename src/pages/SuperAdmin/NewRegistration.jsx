import React, { useState } from 'react';
import Sidebar from '../../components/SuperAdmin/Sidebar';
import '../../styles/pages/SuperAdmin/NewRegistration.css';

export const Newregistration = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const data = [
    { pradeshiyaSabha: 'Sri Lanka Sabha', district: 'All Island', address: 'National Secretariat, Colombo', email: 'srilanka.sabha@example.com', phone: '+94100000000' },
    { pradeshiyaSabha: 'Colombo Municipal Council', district: 'Colombo', address: '123 Main Street, Colombo', email: 'colombo.mc@example.com', phone: '+94111234567' },
    { pradeshiyaSabha: 'Dehiwala - Mt. Lavinia Municipal Council', district: 'Colombo', address: '45 Beach Road, Dehiwala', email: 'dehiwala.mc@example.com', phone: '+94112345678' },
    { pradeshiyaSabha: 'Sri Jayawardenepura Kotte Municipal Council', district: 'Colombo', address: '78 Parliament Road, Kotte', email: 'kotte.mc@example.com', phone: '+94123456789' },
    { pradeshiyaSabha: 'Kaduwela Municipal Council', district: 'Colombo', address: '67 Temple Road, Kaduwela', email: 'kaduwela.mc@example.com', phone: '+94134567890' },
    { pradeshiyaSabha: 'Moratuwa Municipal Council', district: 'Colombo', address: '89 Lakeside Road, Moratuwa', email: 'moratuwa.mc@example.com', phone: '+94145678901' },
    { pradeshiyaSabha: 'Kollonnawa Urban Council', district: 'Colombo', address: '32 Hilltop Avenue, Kollonnawa', email: 'kollonnawa.uc@example.com', phone: '+94156789012' },
    { pradeshiyaSabha: 'Seethawakapura Urban Council', district: 'Colombo', address: '56 Riverside Street, Seethawakapura', email: 'seethawakapura.uc@example.com', phone: '+94167890123' },
    { pradeshiyaSabha: 'Maharagama Urban Council', district: 'Colombo', address: '21 Market Road, Maharagama', email: 'maharagama.uc@example.com', phone: '+94178901234' },
    { pradeshiyaSabha: 'Kesbewa Urban Council', district: 'Colombo', address: '14 Garden Lane, Kesbewa', email: 'kesbewa.uc@example.com', phone: '+94189012345' },
    { pradeshiyaSabha: 'Boralesgamuwa Urban Council', district: 'Colombo', address: '9 Lakeview Drive, Boralesgamuwa', email: 'boralesgamuwa.uc@example.com', phone: '+94190123456' },
    { pradeshiyaSabha: 'Kotikawatta Mulleriyawa Pradeshiya Sabha', district: 'Colombo', address: '88 New Street, Kotikawatta', email: 'kotikawatta.ps@example.com', phone: '+94201234567' },
    { pradeshiyaSabha: 'Seethawaka Pradeshiya Sabha', district: 'Colombo', address: '77 Old Town Road, Seethawaka', email: 'seethawaka.ps@example.com', phone: '+94212345678' },
    { pradeshiyaSabha: 'Homagama Pradeshiya Sabha', district: 'Colombo', address: '100 Forest Lane, Homagama', email: 'homagama.ps@example.com', phone: '+94223456789' }
  ];

  const filteredData = data.filter(item =>
    item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.pradeshiyaSabha.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sidebar>
      <div className="p-6 overflow-hidden">
        <div className="admin-table-home-page relative">
          <div className="admin-table-title-container flex justify-between items-center pr-8">
            <h3>Sabha Details</h3>
            <div className="newreg-search-input relative ">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="newreg-input pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="admin-table-table-tab-view-for-table-content mt-4 overflow-auto max-h-96 border border-gray-300 rounded-lg">
            <table className="newreg-table w-full table-auto">
              <thead className="bg-gradient-to-r from-black to-blue-900 text-white sticky top-0">
                <tr>
                  <th className="px-4 py-2 text-left h-[8vh]">Pradeshiya Sabha</th>
                  <th className="px-4 py-2 text-left h-[8vh]">District</th>
                  <th className="px-4 py-2 text-left h-[8vh]">Address</th>
                  <th className="px-4 py-2 text-left h-[8vh]">Email</th>
                  <th className="px-4 py-2 text-left h-[8vh]">Phone</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2 text-left h-[8vh]">{item.pradeshiyaSabha}</td>
                    <td className="px-4 py-2 text-left h-[8vh]">{item.district}</td>
                    <td className="px-4 py-2 text-left h-[8vh]">{item.address}</td>
                    <td className="px-4 py-2 text-left h-[8vh]">{item.email}</td>
                    <td className="px-4 py-2 text-left h-[8vh]">{item.phone}</td>
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

export default Newregistration;
