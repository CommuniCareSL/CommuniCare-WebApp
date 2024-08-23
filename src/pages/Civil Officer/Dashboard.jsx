import React, {useState, useEffect} from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import '../../styles/components/Civil officer/dashboard.css';

const Dashboard = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        const time = `${hours}:${minutes} ${ampm}`;
        const date = `${year}-${month}-${day}`;

        setCurrentDate(date);
        setCurrentTime(time);
    });


    return (
        <div className="flex h-screen ">
        
        <Sidebar />

        <div className='flex-1 bg-slate-50'>
            <div className='m-5 flex justify-between'>
                <div className='flex flex-col text-left m-2'>
                    <h2 className='text-2xl font-semibold'>Dashboard</h2>
                    <span className='text-slate-600'>{currentTime} {currentDate}</span>
                </div>
                <div className='flex flex-col text-left m-2'>
                <h2 className='text-lg font-semibold'>Sunil Wijethilaka</h2>
                <span className='text-slate-600'>Project Manager</span>
                </div>
                
            </div>

            <div className='m-5 bg-white'>
            <h1 className='bg-blue text-2xl font-semibold'>Homepage-Officer</h1>
            </div>
            
            
        </div>
        
        
        </div>
    );
};

export default Dashboard;