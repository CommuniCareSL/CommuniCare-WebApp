import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/WorkAndPlan/Sidebar";
import ReactSearchBox from "react-search-box";
import { Warehouse, LandPlot, FileText, ChartArea, Trees } from 'lucide-react';

const WorkAndPlanCompletedorCanceledAppointments = () => {
  const appointments = [
    { id: 1, name: "John Doe", category: "Approval of Building Plans", date: "2025-02-10", time: "09.45 AM", description: "A routine dental checkup with Dr. Smith.", state: "Completed"},
    { id: 2, name: "Jane Smith", category: "Approving land subdivision and amalgamation development plans", date: "2025-02-12", time: "10.45 AM", description: "Comprehensive eye exam to check vision and eye health.", state: "Completed"},
    { id: 3, name: "Mike Johnson", category: "Issuance of Certificate of Conformity", date: "2025-02-15", time: "11.45 AM", description: "A general health consultation with Dr. Johnson.", state: "Canceled", reason: "A general health consultation with Dr. Johnson." },
    { id: 4, name: "Alice Brown", category: "Obtaining a trade license", date: "2025-02-20", time: "12.45 PM", description: "Physiotherapy session to improve mobility and reduce pain.", state: "Completed"},
    { id: 5, name: "Alice Brown", category: "Obtaining an Environmental Compliance Certificate", time: "1.45 PM", date: "2025-02-20", description: "Physiotherapy session to improve mobility and reduce pain.", state: "Canceled", reason: "Physiotherapy session to improve mobility and reduce pain." },
  ];

  const [filteredAppointments, setFilteredAppointments] = useState(appointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const categoryStyles = {
    "Approval of Building Plans": {
      icon: <Warehouse className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-100",
      bgSize: "w-10 h-10"
    },
    "Approving land subdivision and amalgamation development plans": {
      icon: <LandPlot className="w-6 h-6 text-yellow-600" />,
      bgColor: "bg-yellow-100",
      bgSize: "w-10 h-10"
    },
    "Issuance of Certificate of Conformity": {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      bgSize: "w-10 h-10"
    },
    "Obtaining a trade license": {
      icon: <ChartArea className="w-6 h-6 text-red-600" />,
      bgColor: "bg-red-100",
      bgSize: "w-10 h-10"
    },
    "Obtaining an Environmental Compliance Certificate": {
      icon: <Trees className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-100",
      bgSize: "w-10 h-10"
    },
  };

  const categoryCheckOptions = {
    "Approval of Building Plans": [
      "Archtectural plans",
      "Land ownership documents",
      "National ID card",
      "Fees : Rs.750.00"
    ],
    "Approving land subdivision and amalgamation development plans": [
      "Request Letter",
      "Land survery report",
      "Ownership certificates",
      "A copy of National ID card",
      "Fees : Rs.750.00"
    ],
    "Issuance of Certificate of Conformity": [
      "Completed application form",
      "Request Letter",
      "Copy of building plan",
      "Fees : Rs.2000.00"
    ],
    "Obtaining a trade license": [
      "Completed application form",
      "Bussiness registration",
      "Tax identification number",
      "Fees : Rs.3000.00"
    ],
    "Obtaining an Environmental Compliance Certificate": [
      "Environmental impact assessment",
      "Project proposal",
      "Site environmental survey",
      "Trade license",
      "Fees : Rs.3100.00"
    ],
  };
  
  const handleSearch = (value) => {
    if (value) {
      const searchTerm = value.toLowerCase();
      setFilteredAppointments(
        appointments.filter(
          (appointment) =>
            appointment.name.toLowerCase().includes(searchTerm) ||
            appointment.category.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setFilteredAppointments(appointments);
    }
  };

  return (
    <Sidebar>

      <style jsx>{`
        button:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-8xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Completed/Canceled Appointments</h1>
          <p className="text-gray-500 mt-1">View the appointments that are Completed/Canceled</p>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <ReactSearchBox
            placeholder="Search appointments"
            data={appointments.map((appointment) => ({
              key: appointment.id,
              value: `${appointment.name} - ${appointment.category}`,
            }))}
            onSelect={(record) => handleSearch(record.value)}
            onChange={(value) => handleSearch(value)}
            clearOnSelect
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Appointments Table */}
          <div className="col-span-2 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-medium text-gray-800">Appointments</h2>
            <p className="text-gray-500 mt-1">Categorized Appointments</p>

            <div className="mt-8 overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full border-collapse">
              <tbody>
                {filteredAppointments.map((appointment, index) => (
                  <tr
                    key={appointment.id}
                    className={`cursor-pointer ${index % 2 === 0 ? "border-t" : "border-t bg-gray-50"} hover:bg-gray-100`}
                    onClick={() => setSelectedAppointment(appointment)}
                  >
                    <td className="px-4 py-2 text-gray-700 h-[10vh]">
                      <div className={`p-3 ${categoryStyles[appointment.category].bgColor} ${categoryStyles[appointment.category].bgSize} rounded-lg flex items-center justify-center`}>
                        {categoryStyles[appointment.category].icon}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-gray-700 h-[10vh]">{appointment.name}</td>
                    <td className="px-4 py-2 text-gray-700 h-[10vh]">{appointment.category}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>

          {/* Appointment Details Panel */}
          <div className="col-span-1 bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointment Details</h2>

            {selectedAppointment ? (
              <div className="flex flex-col items-left text-left">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${categoryStyles[selectedAppointment.category].bgColor} rounded-lg flex items-center justify-center`}>
                    {categoryStyles[selectedAppointment.category].icon }
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-900">{selectedAppointment.name}</h3>
                    <p className="text-gray-500">{selectedAppointment.date}</p>
                  </div>
                </div>
                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                <p className="text-gray-700 text-left w-full text-lg font-semibold mt-2">{selectedAppointment.category}</p>
                <p className="text-gray-700 mt-3 text-left w-full">{selectedAppointment.description}</p>

                <div className="mt-4 flex justify-end gap-3 w-full">
                  <p className="text-gray-700 mt-3 text-right w-full">{selectedAppointment.time}</p>
                </div>

                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Required Documents</h3>
                  {selectedAppointment && categoryCheckOptions[selectedAppointment.category] ? (
                    <ul className="list-disc pl-5 text-gray-700">
                      {categoryCheckOptions[selectedAppointment.category].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No requirements available.</p>
                  )}
                </div>

                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                {/* Appointment Status */}
                <div className="mt-4">
                  {selectedAppointment.state === "Completed" && (
                    <span className="px-4 py-2 text-white bg-blue-600 rounded-lg">Completed</span>
                  )}
                  {selectedAppointment.state === "Canceled" && (
                    <div>
                      <span className="px-4 py-2 text-white bg-gray-600 rounded-lg">Canceled</span>
                      {selectedAppointment.reason && (
                        <p className="mt-2 text-red-600 text-sm mt-[2vh] mb-[2vh]">Reason: {selectedAppointment.reason}</p>
                      )}
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <p className="text-gray-500 text-center">Select an appointment to see details.</p>
            )}
          </div>

          {/* Actions Sidebar */}
          <div className="col-span-1 bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointments Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              {[{ label: "Upcoming Appointments", path: "/WorkAndPlanBookedAppointments" },
                { label: "Today Appointments", path: "/WorkAndPlanTodaysAppointments" },
                { label: "Ongoing Appointments", path: "/WorkAndPlanOngoingAppointments" },
                { label: "Completed or Canceled Appointments", path: "/WorkAndPlanCompletedorCanceledAppointments" }]
                .map(({ label, path }) => (
                  <Link key={path} to={path}>
                    <button className="w-full p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                      {label}
                    </button>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

    </Sidebar>
  );
};

export default WorkAndPlanCompletedorCanceledAppointments;
