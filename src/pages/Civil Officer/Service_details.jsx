import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Civil Officer/Sidebar';

const ServiceDetails = () => {
    const { serviceName } = useParams();

    // Use serviceName to fetch or display relevant data
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex-1'>
            <h1>Details for {serviceName}</h1>
            {/* Display more details based on serviceName */}
            </div>
        </div>
    );
};

export default ServiceDetails;
