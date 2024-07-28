import React from 'react';
import Sidebar from '../../components/Civil Officer/Sidebar';
import { RiCalendar2Line, RiInboxFill, RiUserAddFill, RiFileTextFill, RiArrowRightSLine, RiBarChartBoxFill } from 'react-icons/ri';

// import { Grid, GridItem } from '@chakra-ui/react';
// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Box, Text, Flex, Icon, Card, CardHeader, CardBody, CardFooter, Button, Heading } from '@chakra-ui/react';

const serviceData = [
    { icon: RiCalendar2Line, color: 'blue-500', title: 'Issuance of cycle licences', count: 46, description: 'Appointments' },
    { icon: RiInboxFill, color: 'green-500', title: 'Acreage Taxation', count: 20, description: 'Requests' },
    { icon: RiUserAddFill, color: 'red-500', title: 'Allotment of Assembly Hall', count: 16, description: 'Follow Up' },
    { icon: RiFileTextFill, color: 'yellow-500', title: 'Review Documents', count: 34, description: 'Documents' },
    { icon: RiCalendar2Line, color: 'blue-500', title: 'Issuance of cycle licences', count: 46, description: 'Appointments' },
    { icon: RiInboxFill, color: 'green-500', title: 'New Requests', count: 20, description: 'Requests' },
    { icon: RiUserAddFill, color: 'red-500', title: 'Follow Up Requests', count: 16, description: 'Follow Up' },
    { icon: RiFileTextFill, color: 'yellow-500', title: 'Review Documents', count: 34, description: 'Documents' },
    { icon: RiUserAddFill, color: 'red-500', title: 'Follow Up Requests', count: 16, description: 'Follow Up' },
    { icon: RiFileTextFill, color: 'yellow-500', title: 'Review Documents', count: 34, description: 'Documents' },
    // Add more service data as needed
];

const Service_requests = () => {
    return (

        <Flex h="100vh">
        <Sidebar />
        <Box flex="1" p={5} bg="gray.100">
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                {serviceData.map((service, index) => (
                    <GridItem key={index}>
                        <Card>
                            <CardHeader>
                                <Flex justify="space-between" align="center">
                                    <Flex align="center" gap={2}>
                                        {/* <Icon as={service.icon} boxSize={6} color={service.color} /> */}
                                        <Heading size='md'>{service.title}</Heading>
                                    </Flex>
                                    <Icon as={RiArrowRightSLine} boxSize={6} color="gray.400" />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Flex align="center" gap={1}>
                                    <Text fontSize="2xl" fontWeight="bold">{service.count}</Text>
                                </Flex>
                                {/* <Text color="gray.600">{service.description}</Text> */}
                            </CardBody>
                            <CardFooter>
                                <Button colorScheme='blue' size='sm'>View More</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    </Flex>
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

        // <div className="flex h-screen">
        //     <Sidebar />
        //     <div className="flex-1 p-5 bg-gray-100">
            
        //         <div className="flex justify-around w-full p-4">
        //             <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
        //                 <div className="flex items-center justify-between w-full mb-4">
        //                     <div className="flex items-center gap-2">
        //                         {/* <RiCalendar2Line size={24} className="text-blue-500" /> */}
        //                         <h4 className="text-lg font-medium">Issuance of cycle licences</h4>
        //                     </div>
        //                     <RiArrowRightSLine size={24} className="text-gray-400" />
        //                 </div>
        //                 <hr className="w-full border-t border-gray-200 my-0.5"/>
        //                 <div className="flex items-center gap-1">
        //                     <h3 className="text-2xl font-bold">46</h3>
        //                     </div>
        //                     <span className="text-gray-600">Appointments</span>
        //                     {/* <RiBarChartBoxFill size={50} className="text-blue-500 " /> */}

        //                 </div>
                       
                       
        //             {/* </div> */}

        //             <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
        //                 <div className="flex items-center justify-between w-full mb-4">
        //                     <div className="flex items-center gap-2">
        //                         <RiInboxFill size={24} className="text-green-500" />
        //                         <h4 className="text-lg font-medium">New Requests</h4>
        //                     </div>
        //                     <RiArrowRightSLine size={24} className="text-gray-400" />
        //                 </div>
        //                 <hr className="w-full border-t border-gray-200 my-0.5"/>
        //                 <div className="flex items-center gap-1">
        //                     <h3 className="text-2xl font-bold">20</h3>
        //                 </div>
        //                 <span className="text-gray-600">Requests</span>
        //             </div>

        //             <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
        //                 <div className="flex items-center justify-between w-full mb-4">
        //                     <div className="flex items-center gap-2">
        //                         <RiUserAddFill size={24} className="text-red-500" />
        //                         <h4 className="text-lg font-medium">Follow Up Requests</h4>
        //                     </div>
        //                     <RiArrowRightSLine size={24} className="text-gray-400" />
        //                 </div>
        //                 <hr className="w-full border-t border-gray-200 my-0.5"/>
        //                 <div className="flex items-center gap-1">
        //                     <h3 className="text-2xl font-bold">16</h3>
        //                 </div>
        //                 <span className="text-gray-600">Follow Up</span>
        //             </div>

        //             <div className="flex flex-col items-start p-5 bg-white rounded-lg shadow-md w-72">
        //                 <div className="flex items-center justify-between w-full mb-4">
        //                     <div className="flex items-center gap-2">
        //                         <RiFileTextFill size={24} className="text-yellow-500" />
        //                         <h4 className="text-lg font-medium">Review Documents</h4>
        //                     </div>
        //                     <RiArrowRightSLine size={24} className="text-gray-400" />
        //                 </div>
        //                 <hr className="w-full border-t border-gray-200 my-0.5"/>
        //                 <div className="flex items-center gap-1">
        //                     <h3 className="text-2xl font-bold">34</h3>
        //                 </div>
        //                 <span className="text-gray-600">Documents</span>
        //             </div>

                    
        //         </div>
        //         {/* <div>
        //             <h1 className="text-2xl font-semibold text-blue-500">Service requests-Officer</h1>
        //             <h2 className="mt-4">Create cards here</h2>
        //             <div className="mt-4"></div>
        //         </div>
        //         <div>
        //             <h2 className="mt-4">All the timmmeeee</h2>
        //         </div> */}

        //         <div>

        //         </div>
        //     </div>
            
        // </div>
    );
};

export default Service_requests;
