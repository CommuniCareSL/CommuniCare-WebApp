import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PradesiyaSabhaReg = () => {
  const [district, setDistrict] = useState("");
  const [pradeshiyaSabhas, setPradeshiyaSabhas] = useState([]);
  const [fileName, setFileName] = useState("No file chosen");
  const [isDocumentInfoVisible, setIsDocumentInfoVisible] = useState(false);
  const navigate = useNavigate();

  const districts = {
    colombo: ["Homagama", "Kotikawatta", "Seethawaka", "Borella", "Kolonnawa"],
    kalutara: ["Kalutara", "Beruwala", "Aluthgama", "Panadura", "Matugama"],
    gampaha: ["Attanagalla", "Biyagama", "Divulapitiya", "Minuwangoda", "Gampaha"],
    jaffna: ["Jaffna", "Nallur", "Chankanai", "Tellippalai", "Vaddukoddai"],
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
      setFileName("No file chosen");
    }
  };

  const toggleDocumentInfo = () => {
    setIsDocumentInfoVisible(!isDocumentInfoVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[black] to-[#0991FF] flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-white/100 backdrop-blur-md rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Register Your Pradeshiya Sabha
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="district" className="block text-lg font-semibold text-black">
              Select District
            </label>
            <select
              id="district"
              className="w-full p-3 border border-black rounded-md focus:ring focus:ring-[#0991FF]"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="">Select a district</option>
              <option value="colombo">Colombo</option>
              <option value="kalutara">Kalutara</option>
              <option value="gampaha">Gampaha</option>
              <option value="jaffna">Jaffna</option>
            </select>
          </div>
          <div>
            <label htmlFor="pradeshiya-sabha" className="block text-lg font-semibold text-black">
              Select Pradeshiya Sabha
            </label>
            <select
              id="pradeshiya-sabha"
              disabled={!district}
              className="w-full p-3 border border-black rounded-md focus:ring focus:ring-[#0991FF]"
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
            <label htmlFor="register-number" className="block text-lg font-semibold text-black">
              Register Number
            </label>
            <input
              type="text"
              id="register-number"
              className="w-full p-3 border border-black rounded-md focus:ring focus:ring-[#0991FF]"
              placeholder="Enter register number"
            />
          </div>
          <div>
            <label htmlFor="document-upload" className="block text-lg font-semibold text-black">
              Upload Document
            </label>
            <div className="flex items-center">
              <label
                htmlFor="document-upload"
                className="cursor-pointer bg-[#0991FF] text-white py-2 px-4 rounded-md"
              >
                Choose file
              </label>
              <input
                id="document-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="ml-4 text-black">{fileName}</p>
            </div>
            {isDocumentInfoVisible && (
              <p className="text-sm text-black mt-2">
                Upload the Sabha registration documents (PDF only).
              </p>
            )}
          </div>
          <div>
            <label htmlFor="registrant-name" className="block text-lg font-semibold text-black">
              Name of Registrant
            </label>
            <input
              type="text"
              id="registrant-name"
              className="w-full p-3 border border-black rounded-md focus:ring focus:ring-[#0991FF]"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label htmlFor="contact-number" className="block text-lg font-semibold text-black">
              Contact Number
            </label>
            <input
              type="text"
              id="contact-number"
              className="w-full p-3 border border-black rounded-md focus:ring focus:ring-[#0991FF]"
              placeholder="Enter contact number"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#0991FF] text-white font-semibold rounded-md shadow-lg hover:bg-[#007ACC] transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PradesiyaSabhaReg;
