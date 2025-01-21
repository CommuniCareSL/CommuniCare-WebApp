import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/WorkAndPlan/Sidebar";
import ReactSearchBox from "react-search-box";

const WorkAndPlanBookedAppointments = () => {
  const appointments = [
    { id: "001", name: "John Doe - Dental Checkup", category: "Appointment Category 12" },
    { id: "002", name: "Jane Smith - Eye Exam", category: "Appointment Category 24" },
    { id: "003", name: "Mike Johnson - General Consultation", category: "Appointment Category 34" },
    { id: "004", name: "Alice Brown - Physiotherapy", category: "Appointment Category 45" },
  ];

  const [filteredAppointments, setFilteredAppointments] = useState(appointments);

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
      <div className="max-w-8xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Booked Appointments</h1>
          <p className="text-gray-500 mt-1">View the appointments that are booked</p>
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
          <div className="col-span-3 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-medium text-gray-800">Appointments</h2>
            <p className="text-gray-500 mt-1">Categorized Appointments</p>

            {/* Table */}
            <div className="mt-8 overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full border-collapse">
                <tbody>
                  {filteredAppointments.map((appointment, index) => (
                    <tr key={appointment.id} className={index % 2 === 0 ? "border-t" : "border-t bg-gray-50"}>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">#{appointment.id}</td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">{appointment.name}</td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">{appointment.category}</td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded">Start</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-1 bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointments Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              {["Booked Appointments", "Today Appointment", "Ongoing Appointments", "Completed or Canceled Appointments"].map(
                (label, index) => (
                  <Link key={index} to={`/WorkAndPlan${label.replace(/ /g, "")}`}>
                    <button className="w-full p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                      {label}
                    </button>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default WorkAndPlanBookedAppointments;
