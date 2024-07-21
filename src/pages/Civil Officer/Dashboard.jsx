import Sidebar from '../../components/Civil Officer/Sidebar';
import '../../styles/components/Civil officer/dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-officer'>
        <div>
        <Sidebar />
        </div>
        <div className='officer-home'>
            <h1 className='bg-blue text-2xl font-semibold'>Homepage-Officer</h1>
            
        </div>
        
        
        </div>
    );
};

export default Dashboard;