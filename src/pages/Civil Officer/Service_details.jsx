import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Civil Officer/Sidebar';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider, Box, Heading, Divider, Text, Table, Tbody, Tr, Td, Input, Button } from '@chakra-ui/react';
import UserRequests from './User_requests';

const ServiceDetails = () => {
    
    const { serviceName } = useParams();

    const [formData, setFormData] = useState({
        documents: ['Written Request', 'Rough prototype of Advertisement', 'Information on expected location', 'Sizes of advertisements(In square feet)'],
        officers: ['Officer-In-Charge', 'Payment Supervisor'],
        paymentInfo: ['Rs 400 per square feet annually', 'Rs 500 Permit charge ']
    });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    const handleInputChange = (e, field, index) => {
        const { value } = e.target;
        setFormData(prevState => {
            const newValues = [...prevState[field]];
            newValues[index] = value;
            return { ...prevState, [field]: newValues };
        });
    };

    const addNewField = (field) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: [...prevState[field], '']
        }));
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log(formData);
    };

    const sampleRequests = [
        {
            user: "Mckenna Grace",
            description: "Request for a new billboard at Main St.",
            date: "2024-07-31",
            status: "Pending",
            past_app: "1",
            upcoming: "1",
            payment: 'done',
            docs: "4"
        },
        {
            user: "Dylan Thomas",
            description: "Approval request for outdoor advertisement.",
            date: "2024-07-29",
            status: "Approved",
            past_app: "1",
            upcoming: "0",
            payment: 'done',
            docs: "4"
        },
        {
            user: "Riley Evans",
            description: "Renewal request for existing billboard permit.",
            date: "2024-07-25",
            status: "Pending",
            past_app: "1",
            upcoming: "1",
            payment: 'none',
            docs: "4"
        }
    ];
    

    
    return (
        <ChakraProvider>
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex-1 m-5 overflow-y-auto'>
            {/* <h1>Details for {serviceName}</h1> */}
            <Tabs>
                <TabList className="border-b-2 border-blue-500">
                    <Tab className='px-4 py-2 text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300'>Details</Tab>
                    <Tab>Requests</Tab>
                    {/* <Tab>Three</Tab> */}
                </TabList>

                <TabPanels className='p-4'>
                    <TabPanel>
                    
                    {/* <div className='bg-white shadow-md p-4 border border-slate-300 rounded-md'>
                        <p className='font-semibold text-xl text-left'>Obtaining Permission to display Billboards and Advertisements</p>
                        <hr className="w-full border-t-2 border-gray-200 my-0.5 mt-3"/>

                        <div className='bg-green-300'>
                            <p>
                                njsfjsvd
                            </p>
                        </div>
                    </div> */}

<Box className='bg-white shadow-md p-4 border border-slate-300 rounded-md'>
                                    <Heading as='h2' size='lg' className='font-semibold text-left'>
                                        Obtaining Permission to display Billboards and Advertisements
                                    </Heading>
                                    <Divider className="w-full border-t-2 border-blue-500 my-0.5 mt-3"/>
                                    <Box className='bg-slate-50 p-4 mt-4 rounded'>
                                    <Table variant='simple'>
                                            {/* <Tbody>
                                                <Tr>
                                                    <Td fontWeight='bold'>Documents</Td>
                                                    <Td>
                                                        <Input 
                                                            value={formData.documents} 
                                                            name='documents' 
                                                            onChange={handleInputChange} 
                                                            placeholder='Enter document details' 
                                                        />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td fontWeight='bold'>Involved Officers</Td>
                                                    <Td>
                                                        <Input 
                                                            value={formData.officers} 
                                                            name='officers' 
                                                            onChange={handleInputChange} 
                                                            placeholder='Enter officer names' 
                                                        />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td fontWeight='bold'>Payment Info</Td>
                                                    <Td>
                                                        <Input 
                                                            value={formData.paymentInfo} 
                                                            name='paymentInfo' 
                                                            onChange={handleInputChange} 
                                                            placeholder='Enter payment information' 
                                                        />
                                                    </Td>
                                                </Tr>
                                            </Tbody> */}

                                            <Tbody>
                                                {Object.entries(formData).map(([field, values]) => (
                                                    <Tr key={field} borderBottom="2px solid #BFDBFE">
                                                        <Td fontWeight='bold' fontSize="lg">{field.charAt(0).toUpperCase() + field.slice(1)}</Td>
                                                        <Td>
                                                            <ul className="list-none pl-0">
                                                                {values.map((value, index) => (
                                                                    <li key={index}>
                                                                        <Input 
                                                                            value={value} 
                                                                            onChange={(e) => handleInputChange(e, field, index)} 
                                                                            placeholder={`Enter ${field} details`} 
                                                                            className='mb-2'
                                                                        />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <Button 
                                                                onClick={() => addNewField(field)} 
                                                                colorScheme='blue' 
                                                                size='sm'
                                                                className='mt-2'
                                                            >
                                                                Add New {field.charAt(0).toUpperCase() + field.slice(1)}
                                                            </Button>
                                                        </Td>
                                                    </Tr>
                                                ))}
                                            </Tbody>
                                        </Table>
                                        <Button 
                                            onClick={handleSubmit} 
                                            colorScheme='blue' 
                                            className='mt-4'
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Box>
                    </TabPanel>
                    <TabPanel>
                    <UserRequests requests={sampleRequests} />
                    
                    </TabPanel>
                    {/* <TabPanel>
                    <p>three!</p>
                    </TabPanel> */}
                </TabPanels>
                </Tabs>
            </div>
        </div>
        </ChakraProvider>
    );
    
};

export default ServiceDetails;
