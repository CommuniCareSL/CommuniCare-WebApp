import React from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import profileImg from '../../assets/Admin/profile-img.jpg';
import { RiCalendar2Line, RiInboxFill, RiUserAddFill, RiFileTextFill, RiArrowRightSLine, RiBarChartBoxFill } from 'react-icons/ri';
import { RiCheckboxCircleFill, RiTimeFill, RiMessageLine, RiFullscreenLine } from 'react-icons/ri';
import { Progress } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'


const appointment_today = [
    { time: '08.00', name: 'Kristin Watson', issue: 'Acreage Taxation', status: 'completed', img: profileImg },
    { time: '08.30', name: 'Jerome Bell', issue: 'Allocating the football ground', status: 'completed', img: profileImg },
    { time: '09.00', name: 'Dianne Russell', issue: 'Issuance of Cycle Permit', status: 'completed', img: profileImg },
    { time: '09.30', name: 'Brooklyn Simmons', issue: 'Issuance of Marriage Certificate', status: 'ongoing', img: profileImg },
    { time: '10.00', name: 'ISHOMA', issue: '', status: 'none' },
    { time: '10.30', name: 'Marvin McKinney', issue: 'Allocating the City hall', status: 'upcoming', img: profileImg },
    { time: '10.45', name: 'Ralph Edwards', issue: 'Permit to cut down tree', status: 'upcoming', img: profileImg },
    { time: '11.00', name: 'Guy Hawkins', issue: 'Acreage Taxation', status: 'upcoming', img: profileImg },
  ];

  const statusColors = {
    completed: 'bg-green-500',
    ongoing: 'bg-blue-500',
    upcoming: 'bg-orange-500',
    none: 'bg-gray-200'
  };

  const patients = [
    {
      id: 1,
      name: 'Esther Howard',
      service: 'Issuance of cycle licences',
      date: 'August 26, 2023',
      note: "Urgent. Provide licence",
      
    },
    {
      id: 2,
      name: 'Brooklyn Simmons',
      service: 'Marriage Certificate Request',
      date: 'August 26, 2023',
      note: "Provide Certificate",
    
    },
    {
      id: 3,
      name: 'Cody Fisher',
      service: 'Allocation of Billboard rights',
      date: 'August 26, 2023',
      note: "Payment done. Permit needed",
      
    }
  ];
  

  const reports = [
    {
      id: 1,
      name: 'Georgette Strobel',
      date: 'August 26, 2023',
      service: 'Acreage Taxation'
    },
    {
      id: 2,
      name: 'Freida Varnes',
      date: 'August 26, 2023',
      service: 'Acreage Taxation'
    },
    {
      id: 3,
      name: 'Chantal Shelburne',
      date: 'August 26, 2023',
      service: 'Acreage Taxation'
    },
    {
      id: 4,
      name: 'Maryland Winkles',
      date: 'August 26, 2023',
      service: 'Acreage Taxation'
    },
    {
      id: 5,
      name: 'Phyllis Godley',
      date: 'August 26, 2023',
      service: 'Acreage Taxation'
    }
  ];


  const AppointmentCard = ({ time, name, issue, status, img }) => (
    <div className="flex items-center p-2">
      <div className="text-sm font-bold">{time}</div>
      <div className="w-2 h-2 mx-4 rounded-full bg-green-500"></div>
      {status !== 'none' && (
        <div className="flex items-center w-full bg-white shadow-md rounded-lg p-2">
          <img className="w-10 h-10 rounded-full" src={img} alt={name} />
          <div className="flex flex-col ml-2">
            <div className="font-bold">{name}</div>
            <div className="text-gray-500 text-sm">{issue}</div>
          </div>
          {/* <div className={`ml-auto ${statusColors[status]} w-4 h-4 rounded-full`}></div> */}
          <div className={`ml-auto ${statusColors[status]} w-6 h-6 rounded-full flex items-center justify-center`}>
          {status === 'completed' ? <RiCheckboxCircleFill className="text-white" size={16} /> : <RiTimeFill className="text-white" size={16} />}
        </div>
        </div>
      )}
      {status === 'none' && (
        <div className="flex items-center justify-center w-full bg-gray-200 shadow-md rounded-lg p-2">
          <div className="font-bold">{name}</div>
        </div>
      )}
    </div>
  );
  

const Appointments = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            
            <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
            
                <div className="flex justify-around w-full p-4">
                    <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex items-center gap-2">
                                <RiCalendar2Line size={24} className="text-blue-500" />
                                <h4 className="text-lg font-medium">Appointments</h4>
                            </div>
                            <RiArrowRightSLine size={24} className="text-gray-400" />
                        </div>
                        <hr className="w-full border-t border-gray-200 my-0.5"/>
                        <div className="flex items-center gap-1">
                            <h3 className="text-2xl font-bold">46</h3>
                            </div>
                            <span className="text-gray-600">Appointments</span>
                            {/* <RiBarChartBoxFill size={50} className="text-blue-500 " /> */}

                        </div>
                       
                       
                    {/* </div> */}

                    <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex items-center gap-2">
                                <RiInboxFill size={24} className="text-green-500" />
                                <h4 className="text-lg font-medium">New Requests</h4>
                            </div>
                            <RiArrowRightSLine size={24} className="text-gray-400" />
                        </div>
                        <hr className="w-full border-t border-gray-200 my-0.5"/>
                        <div className="flex items-center gap-1">
                            <h3 className="text-2xl font-bold">20</h3>
                        </div>
                        <span className="text-gray-600">Requests</span>
                    </div>

                    <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex items-center gap-2">
                                <RiUserAddFill size={24} className="text-red-500" />
                                <h4 className="text-lg font-medium">Follow Up Requests</h4>
                            </div>
                            <RiArrowRightSLine size={24} className="text-gray-400" />
                        </div>
                        <hr className="w-full border-t border-gray-200 my-0.5"/>
                        <div className="flex items-center gap-1">
                            <h3 className="text-2xl font-bold">16</h3>
                        </div>
                        <span className="text-gray-600">Follow Up</span>
                    </div>

                    <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex items-center gap-2">
                                <RiFileTextFill size={24} className="text-yellow-500" />
                                <h4 className="text-lg font-medium">Review Documents</h4>
                            </div>
                            <RiArrowRightSLine size={24} className="text-gray-400" />
                        </div>
                        <hr className="w-full border-t border-gray-200 my-0.5"/>
                        <div className="flex items-center gap-1">
                            <h3 className="text-2xl font-bold">34</h3>
                        </div>
                        <span className="text-gray-600">Documents</span>
                    </div>
                </div>
                {/* <div>
                    <h1 className="text-2xl font-semibold text-blue-500">Service requests-Officer</h1>
                    <h2 className="mt-4">Create cards here</h2>
                    <div className="mt-4"></div>
                </div>
                <div>
                    <h2 className="mt-4">All the timmmeeee</h2>
                </div> */}

                <div className='flex mr-4 bg-blue-50 m-2'>

                    <div className='flex flex-col w-[500px] mr-[20px] bg-white rounded-lg'>
                    <div className="flex items-center gap-[150px] bg-blue-100 rounded-t-lg">
                        <h4 className="ml-3 text-lg text-blue-950 font-bold md:font-medium p-2 ">Today's Appointments</h4>
                        <RiCalendar2Line size={24} className="text-blue-950" />
                                
                    </div>
                    
                    
                    <p className='font-bold flex m-3'>COMPLETED APPOINTMENTS</p>
                    <div className='flex text-sm justify-around m-3 '>
                    <div className='border-2 border-slate-100 flex flex-col p-3 rounded-lg shadow-md'>
                        <div className='flex justify-between mb-3'>
                        <p className='mr-5'><b> New </b>Appointments</p>
                        <p>4/20</p>
                        </div>
                        
                        <Progress value={20} size='xs' colorScheme='blue' />
                        
                    </div>

                    <div className='border-2 border-slate-100 flex flex-col p-3 rounded-lg shadow-md'>
                        <div className='flex justify-between mb-5'>
                        <p className='mr-5'><b> Follow-Up </b>Appointments</p>
                        <p>7/26</p>
                        </div>
                        
                        <Progress value={25} size='xs' colorScheme='blue' />
                        
                    </div>
                    
                    </div>
                    <hr className="w-full border-t border-gray-200 my-0.5 mb-5"/>


                    <div>
                    <a href="" className='text-blue-500 underline ml-3'>View All</a>
                    {/* <div class="bg-blue-400 text-blue px-3 py-1 rounded-full w-3">46</div> */}

                    <div className="mt-4">
                {appointment_today.map((appt, index) => (
                    <AppointmentCard key={index} {...appt} />
                ))}
    </div>
                                        
                    

                    </div>
                    
                    
                    </div>

{/* 
                    <div class="h-screen flex flex-col">
      
        <div class="flex-1 bg-blue-200">
            Top half
        </div>

   
        <div class="flex-1 flex">
           
            <div class="flex-1 bg-green-200">
                Bottom left
            </div>
            
            <div class="flex-1 bg-yellow-200">
                Bottom right
            </div>
        </div>
    </div> */}

                    <div className='overflow-y-auto flex flex-col w-2/3 rounded-lg'>
                    <div className='flex-1 bg-white'>
                    {/* <div className="flex items-center gap-[420px] bg-blue-100 rounded-t-lg">
                        <h4 className="ml-3 text-lg text-blue-950 font-bold md:font-medium p-2 ">Ongoing Appointment</h4>
                        <Button colorScheme='bg-blue-100'>
                        <RiFullscreenLine size={24} className="text-blue-500" />
                        </Button>
                                
                    </div>

                    <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src={profileImg} alt={name} />
                    </div> */}

<div className="flex justify-between bg-blue-100 rounded-t-lg p-4 overflow-y-auto">
          <h4 className="text-lg text-blue-950 font-bold md:font-medium">Ongoing Appointment</h4>
          <Button variant='ghost' size='sm'>
            <RiFullscreenLine size={24} className="text-blue-500" />
          </Button>
        </div>

        <div className="flex items-start p-2">
          <img className="w-10 h-10 rounded-full mr-4" src={profileImg} alt={name} />
          <div>
            <h5 className="font-bold text-blue-950">{name}</h5>
            <p className="text-sm text-gray-700">Brooklyn Simmons • Ongoing</p>
            <p className="text-sm text-gray-700 text-left">11.00 - 12.00</p>
          </div>
        </div>
        <hr className="w-full border-t border-gray-200 my-0.5"/>

        <div className='flex flex-wrap p-3 text-left'>
          <div className='flex-1 p-2'>
            <div className='text-gray-700'>
              <p>Referring officer</p>
              <p className='font-bold'>Joseph Carla</p>
            </div>
            <div className='text-gray-700 mt-2'>
              <p>Requested Service</p>
              <p className='font-bold'>Allotment of Billboards and Advertising rights</p>
            </div>
            <div className='text-gray-700 mt-2'>
              <p>NIC</p>
              <p className='font-bold'>1345568665v</p>
            </div>
            <div className='text-gray-700 mt-2'>
              <p>Date Booked</p>
              <p className='font-bold'>12/07/2023</p>
            </div>
          </div>

          <div className='flex-1 p-2'>
            <div className='text-gray-700'>
              <p>Special Notes</p>
              <p className='font-bold'>Payment has already been made. It is urgent</p>
            </div>

            <div className='text-gray-700 mt-4 flex flex-col items-center'>
              <p>Submitted Documents</p>
            <Button colorScheme='blue' variant='ghost'  size='sm'>
            View Here
          </Button>
            </div>

            <div className='text-gray-700 mt-11 ml-13 flex flex-row items-right gap-4'>
            <Button colorScheme='blue' variant='outline' size='md' className='ml-auto' _hover={{ color: 'white', background: 'blue.500' }}>
            Reschedule
          </Button>
          {/* <Button colorScheme='blue' mt={4} size='md'>
              Finish Appointment
          </Button> */}
            </div>
          </div>

          <div className='flex-1 p-2'>
            <div className='text-gray-700'>
              <p>Appointment Notes</p>
              <textarea className='w-full p-2 border rounded mt-2' rows='5' placeholder='Type...'></textarea>
              <Button colorScheme='blue' mt={4} size='md'
              variant='solid'
               _hover={{ color: 'blue.500', background: 'white', borderColor: 'blue.500'}}>
              Finish Appointment
          </Button>
            </div>
          </div>

        </div>

        {/* <Button colorScheme='blue' variant='outline'>
            Reschedule
          </Button>
          <Button colorScheme='blue'>
              Finish Appointment
          </Button> */}
        {/* <div className='flex justify-end gap-4 p-4 bg-gray-100'>
          
        </div> */}

                    </div>
                    <div className='overflow-y-auto flex-1 flex'>

                        <div className='flex-1 bg-white mr-2 mt-4 rounded-lg'>
                        <div className="flex items-center gap-[60px] bg-blue-100 rounded-t-lg">
                        <h4 className="ml-3 text-md text-blue-950 font-bold md:font-medium p-2 ">Follow-Up Appointments</h4>
                        <Button variant='ghost' size='sm'>
                        <RiFullscreenLine size={20} className="text-blue-500" />
                        </Button> 
                                
                        </div>

                        <div className="p-4">
        
          {patients.map(patient => (
            <div key={patient.id} className="flex items-center justify-between py-2 border-b">
              <div className="flex ">
                <img src={profileImg} alt={patient.name} className="w-10 h-10 rounded-full mr-3" />
                <div className='text-left p-1'>
                  <h5 className="text-sm font-semibold text-left mb-1">{patient.name}</h5>
                  <p className="text-xs text-gray-500 mb-1">Service: {patient.service}</p>
                  <p className="text-xs text-gray-500 text-left mb-1">{patient.date}</p>
                  <p className="text-xs text-red-500 text-left mb-1">{patient.note}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                  <IconButton
                  variant='ghost'
                  colorScheme='blue'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<RiMessageLine />}
                />
                {/* <RiPhoneLine size={20} className="text-blue-500" /> */}
                {/* <RiMessageLine size={20} className="text-blue-500" /> */}
                {/* <RiMailLine size={20} className="text-blue-500" />  */}
              </div>
            </div>
          ))}
        </div>
                        </div>

                        <div className='flex-1 bg-white ml-2 mt-4 rounded-lg'>
                        <div className="flex items-center gap-[100px] bg-blue-100 rounded-t-lg">
                        <h4 className="ml-3 text-md text-blue-950 font-bold md:font-medium p-2 ">Review Documents</h4>
                        <Button variant='ghost' size='sm'>
                        <RiFullscreenLine size={20} className="text-blue-500" />
                        </Button>
                        </div>

                        <div className="p-4">
                 
                    {reports.map(report => (
                      // <a href={report.link} key={report.id}>
                      <a href='' className="shadow hover:bg-blue-500 hover:bordertransition duration-200">
                      <div key={report.id} className="flex items-center justify-between py-2 border-b">
                        <div className="flex items-center">
                          <img src={profileImg} alt='' className="w-10 h-10 rounded-full mr-3" />
                          <div>
                            <h5 className="text-sm font-semibold">{report.name}</h5>
                            <p className="text-xs text-gray-500">{report.service}</p>
                            <p className="text-xs text-gray-500">{report.date}</p>
                          </div>
                        </div>
                        <div>
                        <RiArrowRightSLine size={24} className="text-gray-400" />
                        </div>
                      </div>
                      </a>
                    ))}
                  </div>

</div>


                        </div>
                    </div>
                  
                    </div>
                </div>
            </div>
            






        // </div>
    );
};

export default Appointments;
