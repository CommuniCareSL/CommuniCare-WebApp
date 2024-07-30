import React from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import profileImg from '../../assets/Admin/profile-img.jpg';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { BsArrowLeftShort , BsSearch} from "react-icons/bs";

const Citizen_documents = () => {
    return(
        <div className='flex h-screen'>
        <Sidebar />

        <div className='overflow-y-auto bg-white flex-1'>
        <h2 className='m-5 font-bold text-3xl'>Documents</h2>
        <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15"/>

        <BsSearch className='search-icon'/>

        <input type={"search"} placeholder='Search'/>
        <Button colorScheme='blue' size='sm' m={2}><RiAddLine className='mr-1'/> New</Button>
        
        
        </div>
          
        </div>
    );
};

export default Citizen_documents;