import React, { useState, useEffect } from "react";
import profileImg from '../../assets/Admin/profile-img.jpg';

const AppointmentDay = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        const date = new Date();
        const formattedDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
        setCurrentDate(formattedDate);
    }, []);

    const appointment_day = [
        { start_time: '08:00', end_time: '08:15', name: 'Kristin Watson', issue: 'Acreage Taxation', state: 'new', img: profileImg },
        { start_time: '08:30', end_time: '08:45', name: 'Jerome Bell', issue: 'Allocating the football ground', state: 'new', img: profileImg },
        { start_time: '09:00', end_time: '09:15', name: 'Dianne Russell', issue: 'Issuance of Cycle Permit', state: 'new', img: profileImg },
        { start_time: '09:30', end_time: '09:45', name: 'Brooklyn Simmons', issue: 'Issuance of Marriage Certificate', state: 'followUp', img: profileImg },
        { start_time: '10:30', end_time: '10:45', name: 'Marvin McKinney', issue: 'Allocating the City hall', state: 'followUp', img: profileImg },
        { start_time: '10:45', end_time: '11:00', name: 'Ralph Edwards', issue: 'Permit to cut down tree', state: 'followUp', img: profileImg },
        { start_time: '11:00', end_time: '11:15', name: 'Guy Hawkins', issue: 'Acreage Taxation', state: 'new', img: profileImg },
    ];

    const handleAppointmentClick = (appointment) => {
        setSelectedAppointment(appointment);
    };

    return (
        <div className="bg-white p-6">
            <p className="font-semibold">Current Date: {currentDate}</p>
            <div className="m-5 text-left p-5 rounded-lg shadow-md">
           
     
       <div  className='flex bg-white justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-2 px-2 md:mx-12'>
        
          <div className='flex group hover:bg-blue-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all border border-gray-300 duration-300 border-blue-100 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-blue-900 text-sm transition-all	duration-300'> Mon </p>
                     <p className='text-gray-900 group-hover:text-blue-900 mt-3 group-hover:font-bold transition-all	duration-300'> 29 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-blue-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 border border-gray-300 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-blue-900 text-sm transition-all	duration-300'> Tue </p>
                     <p className='text-gray-900 group-hover:text-blue-900 mt-3 group-hover:font-bold transition-all	duration-300'> 30 </p>
                  </div>
              </div>
          </div>
        
        <div class='flex group hover:bg-blue-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 border border-gray-300 cursor-pointer justify-center w-16'>
              <div class='flex items-center px-4 py-4'>
                  <div class='text-center'>
                     <p class='text-gray-900 group-hover:text-blue-900 text-sm transition-all duration-300'> Wed </p>
                     <p class='text-gray-900 group-hover:text-blue-900 mt-3 group-hover:font-bold transition-all	duration-300'> 31</p>
                  </div>
              </div>
          </div>
        
          <div class='flex group bg-blue-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center'>
            <span class="flex h-3 w-3 absolute -top-1 -right-1">
              <span class="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-blue-400 "></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
              <div class='flex items-center px-4 py-4'>
                  <div class='text-center'>
                     <p class='text-blue-900 text-sm'> Thu </p>
                     <p class='text-blue-900  mt-3 font-bold'> 01 </p>
                  </div>
              </div>
          </div>
        
        <div class='flex group hover:bg-blue-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	border border-gray-300 cursor-pointer justify-center w-16'>
              <div class='flex items-center px-4 py-4'>
                  <div class='text-center'>
                     <p class='text-gray-900 group-hover:text-blue-900 text-sm transition-all	duration-300'> Fri </p>
                     <p class='text-gray-900 group-hover:text-blue-900 mt-3 group-hover:font-bold transition-all	duration-300'> 02 </p>
                  </div>
              </div>
          </div>
        
        <div class='flex group hover:bg-blue-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 border border-gray-300 cursor-pointer justify-center w-16'>
              <div class='flex items-center px-4 py-4'>
                  <div class='text-center'>
                     <p class='text-gray-900 group-hover:text-blue-900 text-sm transition-all	duration-300'> Sat </p>
                     <p class='text-gray-900 group-hover:text-blue-900 mt-3 group-hover:font-bold transition-all	duration-300'> 03 </p>
                  </div>
              </div>
          </div>
          
        <div class='flex group hover:bg-blue-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 border border-gray-300 cursor-pointer justify-center w-16'>
              <div class='flex items-center px-4 py-4'>
                  <div class='text-center'>
                     <p class='text-gray-900 group-hover:text-blue-900 text-sm transition-all	duration-300'> Sun </p>
                     <p class='text-gray-900 group-hover:text-blue-900 mt-3 group-hover:font-bold transition-all	duration-300'> 04 </p>
                  </div>
              </div>
          </div>
          
        



                </div>
                {/* </div> */}

                <p className="text-left text-blue-600 font-semibold text-xl mb-3">Upcoming Appointments</p>

                <div className="relative">
                    {/* Vertical Timeline */}
                    <div className="absolute left-0 top-0 h-full w-1 border-l-2 border-blue-600"></div>
                    
                    {appointment_day.map((appointment, index) => (
                        <div key={index} className={`relative mb-6 p-4 rounded-lg shadow-md pl-10 flex items-center ${appointment.state === 'new' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                            <div className="absolute left-[-1.1rem] top-1/2 transform -translate-y-1/2 h-3 w-3 bg-blue-600 rounded-full"></div>
                            {/* <img src={appointment.img} alt={appointment.name} className="w-12 h-12 rounded-full mr-4" /> */}
                            <div>
                                <p className="font-semibold">{appointment.name}</p>
                                <p className="text-gray-600">{appointment.issue}</p>
                                <p className="text-gray-500 text-sm">{appointment.start_time} - {appointment.end_time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppointmentDay;
