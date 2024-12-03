import logo from '../../assets/Admin/DarkLogo.png';
import '../../styles/components/Civil officer/Sidebar.css';
import profileImg from '../../assets/Admin/profile-img.jpg';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort , BsSearch} from "react-icons/bs";
import { RiDashboardFill, RiCalendar2Line, RiServiceLine, RiBarChart2Fill, RiProfileLine, RiLogoutBoxLine, RiFileList2Line } from 'react-icons/ri';
import { useState } from 'react';

const Menus = [
    { title: 'Home', icon:<RiDashboardFill />, path: '/dashboard_Officer'},
    { title: 'Calendar Schedule', icon:<RiCalendar2Line /> , path: '/calendar_Officer'},
    { title: 'Appointments', icon:<RiFileList2Line />, path:'/appointment_Officer' },
    // { title: 'Service Requests', icon:<RiServiceLine />, path:'/requests_Officer' },
    // { title: 'Documents',icon:<RiBarChart2Fill />, path:'/document_Officer' },
    { title: 'Profile', icon:<RiProfileLine />, path:'/dashboard_Officer', spacing:true},
    { title: 'Logout', icon:<RiLogoutBoxLine />, path: '/login'},

  ];

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return(
        <div className={`sidebar-officer ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
        <BsArrowLeftShort className={`icon-arrow ${!open ? 'icon-rotate' : ''}`} onClick={() => setOpen(!open)}/>
        
        <div className='icons-sidebar'>
        <img src={logo} alt="logo" className="logo-img" />

        </div>

        <div className='searchSidebar'>
        <BsSearch className='search-icon'/>

        <input type={"search"} placeholder='Search' className={`searchBar ${!open ? 'searchBar-hidden' : ''}`}/>
        </div>

        <ul className='Menu-items-officer'>
            {Menus.map((menu, index) => (
                <>
                <li key={index} className={`list-items ${menu.spacing ? 'menu-icon-itemSpacing' : ''}`}>
                <Link to={menu.path} className='menu-link'>
                    <span className='menu-icon'>
                        {/* <RiDashboardFill /> */}
                        {menu.icon}
                    </span>
                    <span className={`menu-icon-item ${!open ? 'menu-icon-item-hidden' : ''}`}>{menu.title}</span>
                    </Link>
                </li>
                </>
            ))}

        </ul>
        
        </div>

        








        // <aside>
        //     <h3>Navigation</h3>
        // </aside>
    );
};

export default Sidebar