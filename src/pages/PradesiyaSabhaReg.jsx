import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PradesiyaSabhaReg = () => {
  const [district, setDistrict] = useState('');
  const [pradeshiyaSabhas, setPradeshiyaSabhas] = useState([]);
  const [fileName, setFileName] = useState('No file chosen');
  const [isDocumentInfoVisible, setIsDocumentInfoVisible] = useState(false);
  const navigate = useNavigate();

  const districts = {
    colombo: ['Homagama', 'Kotikawatta', 'Seethawaka'],
    kalutara: ['Kalutara', 'Beruwala', 'Aluthgama'],
    gampaha: ['Attanagalla', 'Biyagama', 'Divulapitiya'],
  };

  useEffect(() => {
    if (district) {
      setPradeshiyaSabhas(districts[district]);
    } else {
      setPradeshiyaSabhas([]);
    }
  }, [district]);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

  const toggleDocumentInfo = () => {
    setIsDocumentInfoVisible(!isDocumentInfoVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary validation and form submission logic here
    // After successful registration, navigate to the home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Register your Pradeshiya Sabha</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="district" className="block text-lg font-semibold text-gray-700">
                Select District
              </label>
              <select
                id="district"
                className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg rounded-md"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">Select a district</option>
                <option value="colombo">Colombo</option>
                <option value="kalutara">Kalutara</option>
                <option value="gampaha">Gampaha</option>
              </select>
            </div>

            <div>
              <label htmlFor="pradeshiya-sabha" className="block text-lg font-semibold text-gray-700">
                Select Pradeshiya Sabha
              </label>
              <select
                id="pradeshiya-sabha"
                className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg rounded-md"
                disabled={!district}
              >
                <option value="">Select a Pradeshiya Sabha</option>
                {pradeshiyaSabhas.map((ps, index) => (
                  <option key={index} value={ps}>
                    {ps}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="register-number" className="block text-lg font-semibold text-gray-700">
                Register Number
              </label>
              <input
                type="text"
                id="register-number"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md py-3"
                placeholder="Enter register number"
              />
            </div>

            <div>
              <div className="flex items-center">
                <label htmlFor="document-upload" className="block text-lg font-semibold text-gray-700">
                  Upload Document
                </label>
                <svg
                  className={`h-5 w-5 ml-2 text-gray-500 cursor-pointer transform transition-transform ${
                    isDocumentInfoVisible ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  onClick={toggleDocumentInfo}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              {isDocumentInfoVisible && (
                <p className="mt-2 text-gray-600">Please upload the required document. Only PDF files are accepted.</p>
              )}
              <div className="mt-1 flex items-center">
                <input
                  id="document-upload"
                  name="document-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="document-upload"
                  className="bg-white py-3 px-4 border border-gray-300 rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  Choose file
                </label>
                <p className="ml-3 text-lg text-gray-500">{fileName}</p>
              </div>
            </div>

            <div>
              <label htmlFor="registrant-name" className="block text-lg font-semibold text-gray-700">
                Name of Registrant
              </label>
              <input
                type="text"
                id="registrant-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md py-3"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label htmlFor="contact-number" className="block text-lg font-semibold text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                id="contact-number"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md py-3"
                placeholder="Enter contact number"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-lg font-semibold text-gray-700">
                User Name
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md py-3"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md py-3"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label htmlFor="additional-info" className="block text-lg font-semibold text-gray-700">
                Additional Note
              </label>
              <textarea
                id="additional-info"
                rows={6}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Enter any additional note"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PradesiyaSabhaReg;
