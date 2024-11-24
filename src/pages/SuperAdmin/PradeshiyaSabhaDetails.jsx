import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PradeshiyaSabhaDetails = () => {
  const { index } = useParams(); // Extract the 'index' from the URL parameter
  const navigate = useNavigate();

  // Sample data (You can replace this with real data from an API or backend)
  const data = [
    { index: 1, district: 'Colombo', pradeshiyaSabha: 'Homagama' },
    { index: 2, district: 'Kalutara', pradeshiyaSabha: 'Agalwatta' },
    { index: 3, district: 'Colombo', pradeshiyaSabha: 'Dehiwala' },
    { index: 4, district: 'Gampaha', pradeshiyaSabha: 'Attanagalla' },
    { index: 5, district: 'Kalutara', pradeshiyaSabha: 'Matugama' },
    { index: 6, district: 'Gampaha', pradeshiyaSabha: 'Kelaniya' }
  ];

  // Find the specific pradeshiya sabha by index
  const pradeshiyaSabha = data.find(item => item.index === parseInt(index));

  if (!pradeshiyaSabha) {
    return <div className="text-center text-lg text-red-500">Pradeshiya Sabha not found!</div>;
  }

  const handleEdit = () => {
    // Navigate to edit page (you can create an edit form page here)
    navigate(`/edit-pradeshiya-sabha/${index}`);
  };

  const handleDelete = () => {
    // Handle delete logic here
    alert('Pradeshiya Sabha deleted');
    navigate('/Registered'); // Redirect after delete
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900 ">
<div className="w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-16  shadow-lg rounded-lg bg-black">
<h1 className="text-3xl font-semibold text-blue-600 text-center mb-6 ">Pradeshiya Sabha Details</h1>
        <div className="space-y-12">
          <div className="text-lg text-white">
            <p><span className="font-semibold">Index:</span> {pradeshiyaSabha.index}</p>
            <p><span className="font-semibold">District:</span> {pradeshiyaSabha.district}</p>
            <p><span className="font-semibold">Pradeshiya Sabha:</span> {pradeshiyaSabha.pradeshiyaSabha}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button 
              onClick={handleEdit} 
              className="btn1"
            >
              Edit
            </button>
            <button 
              onClick={handleDelete} 
              className="btn1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PradeshiyaSabhaDetails;
