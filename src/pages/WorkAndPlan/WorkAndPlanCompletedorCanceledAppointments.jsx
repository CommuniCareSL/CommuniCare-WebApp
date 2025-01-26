import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/WorkAndPlan/Sidebar";
import ReactSearchBox from "react-search-box";
import { Warehouse, LandPlot, FileText, ChartArea, Trees } from "lucide-react";
import { getStoredData } from "../../hooks/localStorage";
import AlertService from "../../shared/service/AlertService";
import {
  fetchCanceledOrCompletedAppointments,
  fetchAppointmentDetails,
} from "../../service/appointment/CompletedorCanceledAppointment";

const WorkAndPlanCompletedorCanceledAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedAppointmentDetails, setSelectedAppointmentDetails] = useState(null);

  const { sabhaId, departmentId } = getStoredData();

  // Fetch all canceled or completed appointments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCanceledOrCompletedAppointments(sabhaId, departmentId);
        console.log("API Response:", data); 
        const mappedData = data.map((appointment) => ({
          id: appointment.appointmentId,
          name: appointment.user.fullName,
          category: appointment.title,
          date: appointment.date,
          time: appointment.timeSlot,
          description: appointment.description,
          state: appointment.status === 1 ? "Canceled" : "Completed",
          reason: appointment.note,
        }));
        console.log("Mapped Data:", mappedData); 
        setAppointments(mappedData);
        setFilteredAppointments(mappedData);
      } catch (error) {
        AlertService.error("Failed to fetch appointments.");
      }
    };

    fetchData();
  }, [sabhaId, departmentId]);

  // Fetch details of the selected appointment
  useEffect(() => {
    if (selectedAppointment) {
      const fetchDetails = async () => {
        try {
          const details = await fetchAppointmentDetails(selectedAppointment.id);
          setSelectedAppointmentDetails(details);
        } catch (error) {
          AlertService.error("Failed to fetch appointment details.");
        }
      };

      fetchDetails();
    }
  }, [selectedAppointment]);

  const categoryStyles = {
    "Approval of Building Plans": {
      icon: <Warehouse className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-100",
      bgSize: "w-10 h-10",
    },
    "Approving Land Subdivision and Amalgamation Development Plans": {
      icon: <LandPlot className="w-6 h-6 text-yellow-600" />,
      bgColor: "bg-yellow-100",
      bgSize: "w-10 h-10",
    },
    "Issuance of Certificate of Conformity": {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      bgSize: "w-10 h-10",
    },
    "Obtaining a Trade license": {
      icon: <ChartArea className="w-6 h-6 text-red-600" />,
      bgColor: "bg-red-100",
      bgSize: "w-10 h-10",
    },
    "Obtaining an Environmental Compliance Certificate": {
      icon: <Trees className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-100",
      bgSize: "w-10 h-10",
    },
    // Add a default style for undefined categories
    default: {
      icon: <Warehouse className="w-6 h-6 text-gray-600" />,
      bgColor: "bg-gray-100",
      bgSize: "w-10 h-10",
    },
  };

  const categoryCheckOptions = {
    "Approval of Building Plans": [
      "Archtectural plans",
      "Land ownership documents",
      "National ID card",
      "Fees : Rs.750.00",
    ],
    "Approving land subdivision and amalgamation development plans": [
      "Request Letter",
      "Land survery report",
      "Ownership certificates",
      "A copy of National ID card",
      "Fees : Rs.750.00",
    ],
    "Issuance of Certificate of Conformity": [
      "Completed application form",
      "Request Letter",
      "Copy of building plan",
      "Fees : Rs.2000.00",
    ],
    "Obtaining a trade license": [
      "Completed application form",
      "Bussiness registration",
      "Tax identification number",
      "Fees : Rs.3000.00",
    ],
    "Obtaining an Environmental Compliance Certificate": [
      "Environmental impact assessment",
      "Project proposal",
      "Site environmental survey",
      "Trade license",
      "Fees : Rs.3100.00",
    ],
  };

  const handleSearch = (value) => {
    if (value) {
      const searchTerm = value.toLowerCase();
      setFilteredAppointments(
        appointments.filter(
          (appointment) =>
            appointment.state.toLowerCase().includes(searchTerm) ||
            appointment.category.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setFilteredAppointments(appointments);
    }
  };

  // Get the cancel note based on the type
  const getCancelNote = (details) => {
    if (details.tcNote) return `Today Appointment Cancel Note: ${details.tcNote}`;
    if (details.ocNote) return `Ongoing Appointment Cancel Note: ${details.ocNote}`;
    if (details.bcNote) return `Booking Cancel Note: ${details.bcNote}`;
    if (details.ucNote) return `User Cancel Note: ${details.ucNote}`;
    return "No cancel note available.";
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
          <h1 className="text-2xl font-semibold text-gray-800">
            Completed/Canceled Appointments
          </h1>
          <p className="text-gray-500 mt-1">
            View the appointments that are Completed/Canceled
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <ReactSearchBox
            placeholder="Search appointments"
            data={appointments.map((appointment) => ({
              key: appointment.id,
              value: `${appointment.state} - ${appointment.category}`,
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
                      className={`cursor-pointer ${
                        index % 2 === 0 ? "border-t" : "border-t bg-gray-50"
                      } hover:bg-gray-100`}
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">
                        <div
                          className={`p-3 ${
                            categoryStyles[appointment.category || categoryStyles.default].bgColor
                          } ${
                            categoryStyles[appointment.category || categoryStyles.default].bgSize
                          } rounded-lg flex items-center justify-center`}
                        >
                          {categoryStyles[appointment.category || categoryStyles.default].icon}
                        </div>
                      </td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">
                        {appointment.state}
                      </td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">
                        {appointment.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Appointment Details Panel */}
          <div className="col-span-1 bg-white p-6 shadow rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Appointment Details
              </h2>
              {selectedAppointment && (
                <span
                  className={`text-lg font-medium ${
                    selectedAppointment.state === "Completed"
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAppointment.state}
                </span>
              )}
            </div>

            {selectedAppointmentDetails ? (
              <div className="flex flex-col items-left text-left">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 ${
                      categoryStyles[selectedAppointment.category].bgColor
                    } rounded-lg flex items-center justify-center`}
                  >
                    {categoryStyles[selectedAppointment.category].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-900">
                      {selectedAppointmentDetails.user.fullName}
                    </h3>
                    <p className="text-gray-500">{selectedAppointmentDetails.date}</p>
                  </div>
                </div>
                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                <p className="text-gray-700 text-left w-full text-lg font-semibold mt-2">
                  {selectedAppointmentDetails.title}
                </p>
                <p className="text-gray-700 mt-3 text-left w-full">
                  {selectedAppointmentDetails.description || "No description available."}
                </p>

                <div className="mt-4 flex justify-end gap-3 w-full">
                  <p className="text-gray-700 mt-3 text-right w-full">
                    {selectedAppointmentDetails.timeSlot}
                  </p>
                </div>

                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Required Documents
                  </h3>
                  {selectedAppointment &&
                  categoryCheckOptions[selectedAppointment.category] ? (
                    <ul className="list-disc pl-5 text-gray-700">
                      {categoryCheckOptions[selectedAppointment.category].map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No requirements available.</p>
                  )}
                </div>

                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                {/* Display cancel note if appointment is canceled */}
                {selectedAppointment.state === "Canceled" && (
                  <div>
                    <p className="mt-1 text-red-600 text-sm mt-[2vh] mb-[2vh]">
                      {getCancelNote(selectedAppointmentDetails)}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-center">
                Select an appointment to see details.
              </p>
            )}
          </div>

          {/* Actions Sidebar */}
          <div className="col-span-1 bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Appointments Actions
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  label: "Upcoming Appointments",
                  path: "/WorkAndPlanBookedAppointments",
                },
                {
                  label: "Today Appointments",
                  path: "/WorkAndPlanTodaysAppointments",
                },
                {
                  label: "Ongoing Appointments",
                  path: "/WorkAndPlanOngoingAppointments",
                },
                {
                  label: "Completed or Canceled Appointments",
                  path: "/WorkAndPlanCompletedorCanceledAppointments",
                },
              ].map(({ label, path }) => (
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