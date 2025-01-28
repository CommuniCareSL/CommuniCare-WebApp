import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import ReportComplaintBarchart from '../../components/Admin/Report/ReportComplaintBarchart';
import ReportComplaintLineChart from '../../components/Admin/Report/ReportComplaintLineChart';

import WaveIcon from '../../assets/Admin/waving-hand.png';

import '../../styles/pages/Admin/Dashboard.css';
import '../../styles/pages/Admin/AdminReport.css';

const AdminReport = () => {
  // Example holidays array
  const holidays = [
    { date: "2025-01-20", reason: "New Year's Day" },
    { date: "2025-01-22", reason: "Republic Day" },
    { date: "2025-01-20", reason: "New Year's Day" },
    { date: "2025-01-22", reason: "Republic Day" },
    { date: "2025-01-20", reason: "New Year's Day" },
    { date: "2025-01-22", reason: "Republic Day" },
    // Add more holidays here
  ];

  return (
    <div>

      <style jsx>{`
        button:hover {
          transform: scale(1.05);
        }
      `}</style>

      <Sidebar />

      <div className="admin-dashboard-home-page">

        <div className="welcome-for-admin">
          <h3>Welcome</h3>
          <img src={WaveIcon} alt="Wave" />
        </div>
        
        {/* Complaint summary */}
        <div className='report-main-title'>
          <h4>Summary Of Complaints</h4>
        </div>

        <div className="report-summery-blocks">
          <div className="report-summery-left-block-type1">
            <ReportComplaintBarchart />
          </div>
          <div className="report-summery-right-block-type1">
            <div className="report-summery-right-block-type1-first-box">
              <ReportComplaintLineChart />
            </div>
            <div className="report-summery-right-block-type1-Second-box">
              <h2 className="text-lg font-semibold mb-4">Last Week Holidays</h2>
              <div className="bg-gray-200 h-px w-full mt-[1vh] mb-[1vh]"></div>
              {/* Render the holidays */}
              <div className="h-[15vh] overflow-y-auto border border-gray-300 rounded-lg bg-gray-50">
                {holidays.length > 0 ? (
                  holidays.map((holiday, index) => (
                    <div key={index} className="holiday-item">
                      <p><strong>Date:</strong> {holiday.date}</p>
                      <p><strong>Reason:</strong> {holiday.reason}</p>
                    </div>
                  ))
                ) : (
                  <p>No holidays for last week.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Summary */}
        <div className='report-main-title'>
          <h4>Summary Of Appointments</h4>
        </div>

        <div className="report-summery-blocks">
          {/* Appointment content */}
        </div>

        {/* Services Summary */}
        <div className='report-main-title'>
          <h4>Summary Of Services</h4>
        </div>

        <div className="report-summery-blocks">
          {/* Services content */}
        </div>

      </div>
    </div>
  );
};

export default AdminReport;
