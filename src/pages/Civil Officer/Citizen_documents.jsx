import React, { useState } from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import profileImg from '../../assets/Admin/profile-img.jpg';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { RiSortAsc } from 'react-icons/ri';
import { HiChevronDown, HiPlus, HiDownload } from 'react-icons/hi';
import { BsArrowLeftShort , BsSearch} from "react-icons/bs";
import { AiOutlineEye } from 'react-icons/ai';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, Input, Textarea, Stack } from '@chakra-ui/react';
import {
    Button,
    ButtonGroup,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Checkbox,
    TableCaption,
    Tooltip,
  } from '@chakra-ui/react';


const Citizen_documents = () => {
    const [sortOption, setSortOption] = useState('Latest'); // default state 'latest'
    const [selectedRows, setSelectedRows] = useState([]);

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

    const sortedDocuments = documents.sort((a, b) => {
        const statusOrder = ['In Review', 'Not Started', 'Completed'];
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    });

    const handleSortChange = (option) => {
        setSortOption(option);
        console.log('Selected Sort Option:', option);
        // Add your sorting logic here based on the selected option
    };


    const handleCheckboxChange = (id) => {
        setSelectedRows((prev) => 
          prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
      };
    
      const showButtons = selectedRows.length > 0;

      const [reason, setReason] = useState('');

    const handleRejectSubmit = () => {
        // Handle the reject reason submission logic here
        console.log('Reject reason:', reason);
    };

    return(
        <div className='flex h-screen'>
        <Sidebar />

        <div className='overflow-y-auto bg-white flex-1'>
        <h2 className='m-5 font-semibold text-3xl'>Documents</h2>
        <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15"/>

        <div className='p-3 pb-6'>
            <div className='flex justify-center space-x-4 h-13'>
            <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-green-500'>
                <h3 className='text-left font-semibold text-2xl' style={{ color: '#12b074' }}>38</h3>
                <p className='text-left' style={{ color: '#12b074' }}>Completed</p>
            </div>
            <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-red-500'>
            <h3 className='text-left font-semibold text-2xl text-red-500'>04</h3>
                <p className='text-left text-red-500'>Rejected</p>
            </div>

            <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-blue-500'>
                <h3 className='text-left font-semibold text-2xl text-blue-600'>12</h3>
                <p className='text-left text-blue-600'>In Review</p>
            </div>

            <div style={{ width: '150px' }} className='max-w-xs p-3 rounded-lg shadow-md border border-gray-500'>
             <h3 className='text-left font-semibold text-2xl text-slate-700'>27</h3>
                <p className='text-left text-slate-700'>Not Started</p>
            </div>
        </div>
        </div>

        <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15 mb-5"/>

        {/* <div className='mb-5'> */}
        <div className='mb-7 flex justify-between items-center'>
        <div className='flex items-center'>
        <input type={"search"} placeholder='Search'  className="p-2 border border-blue-400 ml-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <Button colorScheme='blue' size='md' m={2} variant='solid'><BsSearch/></Button>
        
        <Menu>
          <MenuButton as={Button} rightIcon={<HiChevronDown />}
          variant='outline'
          size='md' 
          mx={2} // horizontal margin
          sx={{ 
            borderRadius: 'md',
            padding: '8px 16px',
            backgroundColor: 'white',
            color: 'blue.700',
            _hover: {
                backgroundColor: 'blue.600',
                color: 'white',
            },
        }} >
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>Not Started</MenuItem>
            <MenuItem>In Review</MenuItem>
            <MenuItem>Completed</MenuItem>
          </MenuList>
          
        </Menu>

        <Menu>
            <MenuButton as={Button} leftIcon={<RiSortAsc />}
            variant='outline'
            size='md' 
            mx={2} // horizontal margin
            sx={{ 
              borderRadius: 'md',
              padding: '8px 16px',
              backgroundColor: 'white',
              color: 'blue.700',
              _hover: {
                  backgroundColor: 'blue.600',
                  color: 'white',
              },
          }} >
                Sort by: {sortOption}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => handleSortChange('latest')}>Latest</MenuItem>
                <MenuItem onClick={() => handleSortChange('oldest')}>Oldest</MenuItem>
                {/* <MenuItem onClick={() => handleSortChange('name')}>Name</MenuItem> */}
                <MenuItem onClick={() => handleSortChange('priority')}>Priority</MenuItem>
            </MenuList>
        </Menu>
        <Button colorScheme='blue' size='md' m={2}><HiPlus className='mr-1'/> Import</Button>
        </div>

        {showButtons && (
            <div className="flex items-center mr-8">
                <Button colorScheme='green' className='mr-2'>Completed</Button>
                <Button colorScheme='blue' className='mr-2'>In-Review</Button>
                <Popover>
            <PopoverTrigger>
              <Button colorScheme='red'>Reject</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Reject Reason(Be specific as possible) </PopoverHeader>
              <PopoverBody>
                <Stack spacing={4}>
                  <Textarea
                    placeholder="Please provide a reason for rejection"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </Stack>
              </PopoverBody>
              <PopoverFooter display="flex" justifyContent="flex-end">
                <Button colorScheme="red" onClick={handleRejectSubmit}>Submit</Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
                {/* <Button colorScheme='red'>Reject</Button> */}
            </div>
                    )}
        </div>
{/* 
        <div className='bg-red-400'>
            <p>stayyyyyy</p>
        </div> */}

<TableContainer>
          <Table variant='simple'>
            <TableCaption>Documents List</TableCaption>
            <Thead>
              <Tr>
              <Th>Select</Th>
                <Th>Requestee</Th>
                <Th>Document Name</Th>
                <Th>Service</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {documents.map((doc) => (
                <Tr key={doc.id} _hover={{ bg: 'gray.100' }}>
                  <Td>
                    {doc.status !== 'Completed' && (
                      <Checkbox 
                        isChecked={selectedRows.includes(doc.id)} 
                        onChange={() => handleCheckboxChange(doc.id)} 
                      />
                    )}
                  </Td> */}
                  {sortedDocuments.map((doc, index) => (
                                <>
                                    {index > 0 && sortedDocuments[index - 1].status !== doc.status && (
                                        <Tr key={`separator-${doc.id}`}><Td colSpan={7}></Td></Tr>
                                    )}
                                    <Tr key={doc.id} _hover={{ bg: 'gray.100' }}>
                                        <Td>
                                            {doc.status !== 'Completed' && (
                                                <Checkbox
                                                    isChecked={selectedRows.includes(doc.id)}
                                                    onChange={() => handleCheckboxChange(doc.id)}
                                                />
                                            )}
                                        </Td>
                  <Td>{doc.name}</Td>
                  <Td>{doc.doc}</Td>
                  <Td>{doc.service}</Td>
                  <Td style={{
                        color: doc.status === 'Completed' ? '#12b074' : doc.status === 'In Review' ? '#0000FF' :'#808080'
                        }}>{doc.status}</Td>
                  <Td>{doc.date}</Td>
                  <Td>
                    <ButtonGroup spacing={2}>
                    <Tooltip label="Download" aria-label="Download tooltip">
                      <Button colorScheme='blue'><HiDownload /></Button>
                      </Tooltip>
                      <Tooltip label="View" aria-label="View tooltip">
                      <Button colorScheme='green'><AiOutlineEye /></Button>
                      </Tooltip>
                    </ButtonGroup>
                  </Td>
                </Tr>
                </>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Select</Th>
                <Th>Requestee</Th>
                <Th>Document Name</Th>
                <Th>Service</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

        {/* Conditional Buttons */}
        {/* {showButtons && (
          <div className="flex justify-center mt-4">
            <Button colorScheme='green' className='mr-2'>Mark as Completed</Button>
            <Button colorScheme='yellow'>Set as In Review</Button>
          </div>
        )} */}


        </div>
          
        </div>
    );
};

export default Citizen_documents;