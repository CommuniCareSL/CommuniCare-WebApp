import React from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import { RiCalendar2Line, RiInboxFill, RiUserAddFill, RiFileTextFill, RiArrowRightSLine, RiBarChartBoxFill, RiQuestionLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// import { Grid, GridItem } from '@chakra-ui/react';
// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Box, Text, Flex, Icon, Card, CardHeader, CardBody, CardFooter, Button, Heading } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react';

  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const serviceData = [
    { icon: RiCalendar2Line, color: 'blue-500', title: 'Booking the Playground', count: 6, description: 'Appointments' },
    { icon: RiInboxFill, color: 'green-500', title: 'Booking the crematorium', count: 20, description: 'Requests' },
    { icon: RiUserAddFill, color: 'red-500', title: 'Allotment of satipola land', count: 11, description: 'Follow Up' },
    { icon: RiFileTextFill, color: 'yellow-500', title: 'Allotment parking', count: 34, description: 'Documents' },
    { icon: RiCalendar2Line, color: 'blue-500', title: 'Permission to display advertisements', count: 4, description: 'Appointments' },
    { icon: RiInboxFill, color: 'green-500', title: 'Allotment Community hall', count: 7, description: 'Requests' },
    // { icon: RiUserAddFill, color: 'red-500', title: 'Follow Up Requests', count: 16, description: 'Follow Up' },
    // { icon: RiFileTextFill, color: 'yellow-500', title: 'Review Documents', count: 34, description: 'Documents' },
    // { icon: RiUserAddFill, color: 'red-500', title: 'Follow Up Requests', count: 16, description: 'Follow Up' },
    // { icon: RiFileTextFill, color: 'yellow-500', title: 'Review Documents', count: 34, description: 'Documents' },
    // Add more service data as needed
];

const Service_requests = () => {
    return (

        // <div className="flex h-screen">
        //     <Sidebar />
        //     <div className="flex-1 p-5 bg-gray-100">
        //         <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        //             {serviceData.map((service, index) => (
        //                 <GridItem key={index} className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
        //                     <div className="flex items-center justify-between w-full mb-4">
        //                         <div className="flex items-center gap-2">
        //                             {/* <service.icon size={24} className={`text-${service.color}`} /> */}
        //                             <h4 className="text-lg font-medium">{service.title}</h4>
        //                         </div>
        //                         <RiArrowRightSLine size={24} className="text-gray-400" />
        //                     </div>
        //                     <hr className="w-full border-t border-gray-200 my-0.5" />
        //                     <div className="flex items-center gap-1">
        //                         <h3 className="text-2xl font-bold">{service.count}</h3>
        //                     </div>
        //                     {/* <span className="text-gray-600">{service.description}</span> */}
        //                     <div className="w-full flex justify-end mt-2">
        //                         <Button colorScheme='blue' size='sm'>View More</Button>
        //                     </div>
        //                 </GridItem>
        //             ))}
        //         </Grid>
        //     </div>
        // </div>

        <div className="flex h-screen ">
        <Sidebar />
        <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                {serviceData.map((service, index) => (
                    <GridItem key={index} className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
                        <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex items-center gap-2 min-h-[48px]"> {/* Adjust min-h value if needed */}
                                {/* <service.icon size={24} className={`text-${service.color}`} /> */}
                                <h4 className="text-lg font-medium break-words max-w-full">{service.title}</h4>
                            </div>
                            <RiArrowRightSLine size={24} className="text-gray-400" />
                        </div>
                        <hr className="w-full border-t border-gray-200 my-0.5" />
                        <div className="flex items-center gap-1">
                            <h3 className="text-3xl font-bold">{service.count}</h3>
                        </div>
                        {/* <span className="text-gray-600">{service.description}</span> */}
                        <div className="w-full flex justify-end mt-2">
                        <Link to={`/details/${service.title}`}>
                                    <Button colorScheme='blue' size='sm' mr={1}>View More</Button>
                            </Link>
                            {/* <Button colorScheme='blue' size='sm' mr={1}>View More</Button> */}
                            {/* <Button colorScheme='blue' size='sm' variant='ghost'>
                                    <RiQuestionLine size={20} />
                                </Button> */}
                                <Popover>
                                    <PopoverTrigger>
                                        <Button colorScheme='blue' size='sm' variant='ghost'>
                                            <RiQuestionLine size={20} />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader><b> What is this number?</b></PopoverHeader>
                                        <PopoverBody>This indicates the number of unresolved requests from citizens received for the service {service.title}.
                                        </PopoverBody>

                                        <PopoverBody>Click 'View More' to see information on related appointments, requestee and relevant payments and documents.</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                        </div>
                    </GridItem>
                ))}
            </Grid>

            {/* <h1 className='mt-5 font-semibold'>Most Recent Requests</h1> */}
            <h1 className='mt-5 mb-4 text-3xl font-bold text-gray-800 tracking-wide'>Most Recent Requests</h1>


            <TableContainer mt={7}>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Requestee</Th>
        <Th>Service</Th>
        <Th >Date</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>vk</Td>
        <Td>dd</Td>
        <Td >2s</Td>
        <Td >2s</Td>
        <Td>
        <Button colorScheme='blue' size='sm'>View</Button>
        </Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td >2s</Td>
        <Td >2s</Td>
        <Td>
            <Button colorScheme='blue' size='sm'>View</Button>
        </Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td >2s</Td>
        <Td >2s</Td>
        <Td>
        <Button colorScheme='blue' size='sm'>View</Button>
        </Td>
      </Tr>
      <Tr>
        <Td>vk</Td>
        <Td>dd</Td>
        <Td >2s</Td>
        <Td >2s</Td>
        <Td>
            <Button colorScheme='blue' size='sm'>View</Button>
        </Td>
      </Tr>
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
        </div>

        

    </div>

       
    );
};

export default Service_requests;
