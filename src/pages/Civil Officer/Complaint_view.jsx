import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Menu, MenuButton, MenuList, MenuItem, Button, Card, CardHeader, CardBody, CardFooter, Text, SimpleGrid, Heading, Input, Stack } from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import { BsSearch } from "react-icons/bs";
import { FaUser, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const Complaint_view = () => {
    const [sortOption, setSortOption] = useState('Latest'); // default state 'latest'
    const [selectedRows, setSelectedRows] = useState([]);
    const [reason, setReason] = useState('');

    const documents = [
        { id: 1, name:'Erin Downes', doc: 'Requesting letter',service:'Allocation of City Hall', date:'21-04-24', status: 'In Review' },
        { id: 2, name:'Jerome Bell', doc: 'Document 2',service:'Allocation of City Hall', date:'21-04-24', status: 'Not Started' },
        { id: 3, name:'Dianne Russell', doc: 'Document 3',service:'Allocation of City Hall', date:'21-04-24', status: 'Completed' },
        { id: 4, name:'Brooklyn Simmons', doc: 'Document 4',service:'Allocation of City Hall', date:'21-04-24', status: 'In Review' },
        { id: 5, name:'Marvin McKinney', doc: 'Document 5',service:'Allocation of City Hall', date:'21-04-24', status: 'Not Started' },
        { id: 6, name:'Ralph Edwards', doc: 'Document 3',service:'Allocation of City Hall', date:'21-04-24', status: 'Completed' },
        { id: 7, name:'Guy Hawkins', doc: 'Document 4',service:'Allocation of City Hall', date:'21-04-24', status: 'In Review' },
        { id: 8, name:'Erin Downes', doc: 'Document 5',service:'Allocation of City Hall', date:'21-04-24', status: 'Not Started' },
      ];

    const handleCheckboxChange = (id) => {
        setSelectedRows((prev) => 
          prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
      };
    
      const showButtons = selectedRows.length > 0;

    const handleRejectSubmit = () => {
        console.log('Reject reason:', reason);
    };

    return(
        <div className='flex h-screen'>
            <div className='overflow-y-auto bg-white flex-1'>
                <h2 className='ml-20 mb-3 mt-5 font-semibold text-3xl'>Department of Blah blah</h2>
                <div className='ml-20 font-semibold'>        
                    <span>Officer : Name of Officer</span>
                </div>
                <div className='ml-20 font-semibold'>
                    <span>Position : Role of Officer</span>
                </div>
                <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15"/>

                <div className='p-3 pb-6'>
                    <div className='flex justify-center space-x-4 h-13'>
                        <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-gray-500'>
                            <h3 className='text-left font-semibold text-2xl text-slate-700'>27</h3>
                            <p className='text-left text-slate-700'>Pending</p>
                        </div>
                        <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-blue-500'>
                            <h3 className='text-left font-semibold text-2xl text-blue-600'>12</h3>
                            <p className='text-left text-blue-600'>In Progress</p>
                        </div>
                        <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-green-500'>
                            <h3 className='text-left font-semibold text-2xl' style={{ color: '#12b074' }}>38</h3>
                            <p className='text-left' style={{ color: '#12b074' }}>Resolved</p>
                        </div>
                        <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-red-500'>
                            <h3 className='text-left font-semibold text-2xl text-red-500'>04</h3>
                            <p className='text-left text-red-500'>Rejected</p>
                        </div>
                    </div>

                    <input type={"search"} placeholder='Search'  className="p-2 border border-blue-400 ml-14 mt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <Button colorScheme='blue' size='md' m={2} variant='solid'><BsSearch/></Button>

{/* 
                    <Input type="search" placeholder='Search' className="p-2 border border-blue-400 ml-14 mt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <Button colorScheme='blue' size='md' m={2} variant='solid'><BsSearch/></Button> */}

                    <Menu>
                        <MenuButton as={Button} rightIcon={<HiChevronDown />}
                            variant='outline'
                            size='md' 
                            mx={2}
                            sx={{ 
                                borderRadius: 'md',
                                padding: '8px 16px',
                                backgroundColor: 'white',
                                color: 'blue.700',
                                _hover: {
                                    backgroundColor: 'blue.600',
                                    color: 'white',
                                },
                            }}>
                            Filter
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Pending</MenuItem>
                            <MenuItem>In Progress</MenuItem>
                            <MenuItem>Resolved</MenuItem>
                            <MenuItem>Rejected</MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15 mb-5"/>

                <div className='mb-7 ml-14 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <SimpleGrid spacing={4} templateColumns='repeat(4, 1fr)'>
                            {documents.map((doc) => (
                                <Link to={`/Single_complaint/${doc.id}`} key={doc.id}>
                                    <Card cursor="pointer">
                                        <CardHeader>
                                            <Heading size='md'>Category: {doc.service}</Heading>
                                        </CardHeader>
                                        {/* <CardBody>
                                            <Text>Submittee : {doc.name}</Text>
                                            <Text>Date : {doc.date}</Text>
                                            <Text>Status : {doc.status}</Text>
                                        </CardBody> */}
                                         <CardBody>
                    <Stack spacing={3}>
                        <Stack direction="row" alignItems="center">
                            <FaUser color="blue" />
                            <Text>Submittee : {doc.name}</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <FaCalendarAlt color="green" />
                            <Text>Date : {doc.date}</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <FaInfoCircle color="red" />
                            <Text>Status : {doc.status}</Text>
                        </Stack>
                    </Stack>
                </CardBody>

                                        <CardFooter>
                                            <Button colorScheme='blue' size='sm' mr={1}>View More</Button>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaint_view;
