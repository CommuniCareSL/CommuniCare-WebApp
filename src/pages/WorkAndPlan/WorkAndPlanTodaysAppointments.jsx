import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/WorkAndPlan/Sidebar";
import ReactSearchBox from "react-search-box";
import { Warehouse, LandPlot, FileText, ChartArea, Trees } from 'lucide-react';
import { getTodayAppointments, getTodayAppointmentDetails, cancelTodayAppointment, startAppointment } from '../../service/appointment/TodaysAppointment';
import { getStoredData } from "../../hooks/localStorage";
import AlertService from "../../shared/service/AlertService";

const WorkAndPlanTodaysAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isCancelPopupVisible, setIsCancelPopupVisible] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const { sabhaId, departmentId } = getStoredData();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getTodayAppointments(sabhaId, departmentId);
        console.log("Fetched Today's Appointments:", data); // Log the data
        setAppointments(data);
        setFilteredAppointments(data);
      } catch (error) {
        console.error('Error fetching today\'s appointments:', error);
      }
    };

    fetchAppointments();
  }, [sabhaId, departmentId]);

  const handleSearch = (value) => {
    if (value) {
      const searchTerm = value.toLowerCase();
      setFilteredAppointments(
        appointments.filter(
          (appointment) =>
            appointment.timeSlot.toLowerCase().includes(searchTerm) ||
            appointment.title.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setFilteredAppointments(appointments);
    }
  };

  const handleAppointmentClick = async (appointmentId) => {
    try {
      const appointmentDetails = await getTodayAppointmentDetails(appointmentId);
      console.log("Appointment Details:", appointmentDetails); // Log the details
      setSelectedAppointment(appointmentDetails);
    } catch (error) {
      console.error('Error fetching appointment details:', error);
    }
  };

  const handleCheckboxChange = (category, option) => {
    setCheckedItems((prev) => {
      const updatedCategory = {
        ...prev[category],
        [option]: !prev[category]?.[option],
      };

      console.log("Checkbox Changed:", category, option);
      console.log("Updated Checked Items:", updatedCategory);

      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  const isStartEnabled = () => {
    if (!selectedAppointment || !categoryCheckOptions[selectedAppointment.title]) return false;

    const options = categoryCheckOptions[selectedAppointment.title];
    const allChecked = options.every((option) => checkedItems[selectedAppointment.title]?.[option]);

    console.log("Checked Items:", checkedItems);
    console.log("Is Start Enabled:", allChecked);

    return allChecked;
  };

  const handleStartAppointment = async () => {
    if (selectedAppointment) {
      try {
        await startAppointment(selectedAppointment.appointmentId);
        AlertService.success("Appointment started successfully!");

        // Refresh the appointments list
        const data = await getTodayAppointments(sabhaId, departmentId);
        console.log("Refreshed Appointments:", data);
        setAppointments(data);
        setFilteredAppointments(data);

        // Clear the selected appointment
        setSelectedAppointment(null);
      } catch (error) {
        console.error("Error starting appointment:", error);
        AlertService.error("Failed to start the appointment. Please try again.");
      }
    }
  };

  const handleCancelClick = () => {
    setIsCancelPopupVisible(true);
  };

  const handleCancelSubmit = async () => {
    if (cancelReason) {
      try {
        await cancelTodayAppointment(selectedAppointment.appointmentId, cancelReason);
        console.log("Appointment cancelled successfully");
        AlertService.success("Appointment cancelled successfully!");
        setIsCancelPopupVisible(false);
        setCancelReason(""); // Reset the reason after submission

        // Refresh the appointments list
        const data = await getTodayAppointments(sabhaId, departmentId);
        setAppointments(data);
        setFilteredAppointments(data);

        // Clear the selected appointment
        setSelectedAppointment(null);
      } catch (error) {
        console.error('Error cancelling appointment:', error);
        alert('Failed to cancel the appointment. Please try again.');
      }
    } else {
      AlertService.error("Please provide a cancellation reason.");
    }
  };

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
      "Architectural plans",
      "Land ownership documents",
      "National ID card",
      "Fees : Rs.750.00"
    ],
    "Approving land subdivision and amalgamation development plans": [
      "Request Letter",
      "Land survey report",
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
      "Business registration",
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

  return (
    <Sidebar>
      <style jsx>{`
        button:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-8xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Today's Appointments</h1>
          <p className="text-gray-500 mt-1">View the appointments that are booked for today</p>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <ReactSearchBox
            placeholder="Search appointments"
            data={appointments.map((appointment) => ({
              key: appointment.appointmentId,
              value: `${appointment.timeSlot} - ${appointment.title}`,
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
                      key={appointment.appointmentId}
                      className={`cursor-pointer ${index % 2 === 0 ? "border-t" : "border-t bg-gray-50"} hover:bg-gray-100`}
                      onClick={() => handleAppointmentClick(appointment.appointmentId)}
                    >
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">
                        <div className={`p-3 ${categoryStyles[appointment.title]?.bgColor || "bg-gray-100"} ${categoryStyles[appointment.title]?.bgSize || "w-10 h-10"} rounded-lg flex items-center justify-center`}>
                          {categoryStyles[appointment.title]?.icon || <div>No Icon</div>}
                        </div>
                      </td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">{appointment.timeSlot}</td>
                      <td className="px-4 py-2 text-gray-700 h-[10vh]">{appointment.title}</td>
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
                  <div className={`p-2 ${categoryStyles[selectedAppointment.title]?.bgColor || "bg-gray-100"} rounded-lg flex items-center justify-center`}>
                    {categoryStyles[selectedAppointment.title]?.icon || <div>No Icon</div>}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-900">{selectedAppointment.user?.fullName || "No Name"}</h3>
                    <p className="text-gray-500">{selectedAppointment.date}</p>
                  </div>
                </div>
                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                <p className="text-gray-700 text-left w-full text-lg font-semibold mt-2">{selectedAppointment.title}</p>
                <p className="text-gray-700 mt-3 text-left w-full">{selectedAppointment.note || "No Description"}</p>

                <div className="mt-4 flex justify-end gap-3 w-full">
                  <p className="text-gray-700 mt-3 text-right w-full">{selectedAppointment.timeSlot}</p>
                </div>

                <div className="bg-gray-200 h-px w-full mt-[2vh] mb-[2vh]"></div>

                {/* Checkboxes */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800">Requirements</h3>
                  {selectedAppointment && categoryCheckOptions[selectedAppointment.title] ? (
                    <div className="mt-2 space-y-2">
                      {categoryCheckOptions[selectedAppointment.title].map((option, index) => (
                        <label key={index} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={checkedItems[selectedAppointment.title]?.[option] || false}
                            onChange={() => handleCheckboxChange(selectedAppointment.title, option)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No checklist available for this category.</p>
                  )}
                </div>

                <div className="mt-4 flex justify-end gap-3 w-full">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      isStartEnabled() ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                    disabled={!isStartEnabled()}
                    onClick={handleStartAppointment}
                  >
                    Start
                  </button>

                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
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

      {/* Cancellation Popup */}
      {isCancelPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800">Why cancel?</h3>
            <textarea
              className="mt-4 w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter cancellation reason"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              rows="4"
            />
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                onClick={() => setIsCancelPopupVisible(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={handleCancelSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
};

export default WorkAndPlanTodaysAppointments;