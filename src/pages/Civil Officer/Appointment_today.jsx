// const appointments = [
//     { time: '08.00', name: 'Kristin Watson', issue: 'Stomach Pain', status: 'completed', img: profileImg },
//     { time: '09.00', name: 'Jerome Bell', issue: 'Headache', status: 'completed', img: profileImg },
//     { time: '10.00', name: 'Dianne Russell', issue: 'Gerd', status: 'completed', img: profileImg },
//     { time: '11.00', name: 'Brooklyn Simmons', issue: 'On Consultation', status: 'ongoing', img: profileImg },
//     { time: '12.00', name: 'ISHOMA', issue: '', status: 'none' },
//     { time: '13.00', name: 'Marvin McKinney', issue: 'Stomach Pain', status: 'upcoming', img: profileImg },
//     { time: '14.00', name: 'Ralph Edwards', issue: 'Headache', status: 'upcoming', img: profileImg },
//     { time: '15.00', name: 'Guy Hawkins', issue: 'Headache', status: 'upcoming', img: profileImg },
//   ];

//   const statusColors = {
//     completed: 'bg-green-500',
//     ongoing: 'bg-blue-500',
//     upcoming: 'bg-orange-500',
//     none: 'bg-gray-200'
//   };

// const Appointment_Card = ({ time, name, issue, status, img }) => (
//     <div className="flex items-center p-2">
//       <div className="text-sm font-bold">{time}</div>
//       <div className="w-2 h-2 mx-4 rounded-full bg-green-500"></div>
//       {status !== 'none' && (
//         <div className="flex items-center w-full bg-white shadow-md rounded-lg p-2">
//           <img className="w-10 h-10 rounded-full" src={img} alt={name} />
//           <div className="flex flex-col ml-2">
//             <div className="font-bold">{name}</div>
//             <div className="text-gray-500 text-sm">{issue}</div>
//           </div>
//           <div className={`ml-auto ${statusColors[status]} w-4 h-4 rounded-full`}></div>
//         </div>
//       )}
//       {status === 'none' && (
//         <div className="flex items-center justify-center w-full bg-gray-200 shadow-md rounded-lg p-2">
//           <div className="font-bold">{name}</div>
//         </div>
//       )}
//     </div>
//   );

//   const Appointment_today = () => (
//     <div className='flex flex-col w-full bg-white rounded-lg p-4'>
//       <div className="flex items-center justify-between bg-blue-100 rounded-t-lg p-2">
//         <h4 className="text-lg text-blue-950 font-bold">Today's Appointments</h4>
//         <RiCalendar2Line size={24} className="text-blue-950" />
//       </div>
//       <div className="mt-4">
//         {appointments.map((appt, index) => (
//           <Appointment_Card key={index} {...appt} />
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         <a href="#" className="text-blue-500">View All</a>
//       </div>
//     </div>
//   );

// export default Appointment_today;

import React from "react";

const AppointmentDay = () => {
    return(
    <div className="bg-slate-600">
        <p>test
        </p>
        <h2>test</h2>
    </div>
    );
};

export default AppointmentDay;