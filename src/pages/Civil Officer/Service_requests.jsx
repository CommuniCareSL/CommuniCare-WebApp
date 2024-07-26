import React from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import { RiCalendar2Line, RiInboxFill, RiUserAddFill, RiFileTextFill, RiArrowRightSLine, RiBarChartBoxFill } from 'react-icons/ri';

const Service_requests = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-5 bg-gray-100">
            
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

                <div>

                </div>
            </div>
            
        </div>
    );
};

export default Service_requests;
